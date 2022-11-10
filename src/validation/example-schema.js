import Yup from "./validate";

export const exampleSchema = Yup.object().shape({
    name: Yup.string().required(),
    message: Yup.string().required(),
});
