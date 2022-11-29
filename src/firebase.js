import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
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
    return (await getDoc(doc(db, "users", username.data().user_id))).data();
  } else {
    toast.error("Kullanıcı bulunamadı");
    throw new Error("Kullanıcı bulunamadı");
  }
};

// check all conditions before limit results
export async function getSuggestedProfiles(userId, following) {
  const first = query(collection(db, "users"), limit(2));
  const documentSnapshots = await getDocs(first);

  const getUsersData = await getDoc(
    doc(db, "users", "8DGUgU4ZFINkLjmsAdGDUIOQmD02")
  );
  
  const denemebillah = await getDoc(doc(db, "usernames", getUsersData.data().username));
  console.log(getUsersData);
  console.log(denemebillah);
  console.log(documentSnapshots.data());

  return documentSnapshots; 
}

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
  const getUsersData = await getDoc(doc(db, "users", currentUser.uid));
  try {
    await runTransaction(db, async (transaction) => {
      transaction.update(doc(db, "users", currentUser.uid), {
        fullName: fullName,
        username: username,
        website: website,
        bio: bio,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender,
      });
      const getUsernamesData = await getDoc(
        doc(db, "usernames", getUsersData.data().username)
      );
      await deleteDoc(doc(db, "usernames", getUsersData.data().username));
      await setDoc(doc(db, "usernames", username), {
        user_id: getUsernamesData.data().user_id,
      });
    });

    const getUsersDataSecond = await getDoc(doc(db, "users", currentUser.uid));
    userHandle(getUsersDataSecond.data()); // Update user dispatch
    toast.error("Transaction successfully committed!");
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
