import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";
import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  runTransaction,
  setDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { userHandle } from "utils";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw-E8teeIeOwfKHKTNg0H-NC6io1tJXqs",
  authDomain: "mervan-instagram-web-clone.firebaseapp.com",
  projectId: "mervan-instagram-web-clone",
  storageBucket: "mervan-instagram-web-clone.appspot.com",
  messagingSenderId: "578029552441",
  appId: "1:578029552441:web:1efc4139a00c97f1dedee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    let data = {
      uid: user.uid,
      fullName: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const getUserInfo = async (uname) => {
  const username = await getDoc(doc(db, "usernames", uname));
  if (username.exists()) {
    return await (
      await getDoc(doc(db, "users", username.data().user_id))
    ).data();
  } else {
    toast.error("Kullanıcı bulunamadı");
    throw new Error("Kullanıcı bulunamadı");
  }
};

export const getUserInfoByID = async (ID) => {
  const username = await getDoc(doc(db, "users", ID));
  if (username.exists()) {
    return username.data();
  } else {
    toast.error("Kullanıcı bulunamadı");
    throw new Error("Kullanıcı bulunamadı");
  }
};

export const register = async ({ email, password, full_name, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          user_id: response.user.uid,
        });

        await setDoc(doc(db, "users", response.user.uid), {
          fullName: full_name,
          username: username,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          post: 0,
          email: email,
          gender: "",
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });

        return response.user;
      }
    }
  } catch (err) {
    toast.error(err.code);
  }
};

export const setUserFirestore = async ({
  fullName,
  username,
  website,
  bio,
  email,
  phoneNumber,
  gender,
}) => {
  const currentUser = auth.currentUser;
  const connUsers = doc(db, "users", currentUser.uid);
  const connUsernames = doc(db, "usernames", username);

  try {
    await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(connUsers);

      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }
      transaction.update(connUsers, {
        fullName: fullName,
        username: username,
        website: website,
        bio: bio,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
      });
      const username22 = await getDoc(doc(db, "users", currentUser.uid));
      const usernames22 = await getDoc(
        doc(db, "usernames", username22.data().username)
      );
      // console.log(username22.data().username);
      // console.log(usernames22.data().user_id);
      // console.log("New username : " + username);
      await setDoc(doc(db, "usernames", username), {
        user_id: usernames22.data().user_id,
      });
      await deleteDoc(doc(db, "usernames", username22.data().username));


    });
    console.log("Transaction successfully committed!");
  } catch (e) {
    toast.error(e.code);
  }
};


export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
