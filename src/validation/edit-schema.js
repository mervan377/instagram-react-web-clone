import Yup from "./validate";

export const EditSchema = Yup.object().shape({
  fullName: Yup.string().required(),
  username: Yup.string().required(),
  website: Yup.string(),
  bio: Yup.string().required(),
  email: Yup.string().required(),
  phoneNumber: Yup.string(),
  gender: Yup.string(),
});
