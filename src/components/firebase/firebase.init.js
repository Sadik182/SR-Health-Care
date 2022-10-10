import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./firebase.config";

// const initializeAuthentication = () => {
//   initializeApp(firebaseConfig);
// };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
