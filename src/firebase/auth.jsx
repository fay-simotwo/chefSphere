import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword ,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
} from "firebase/auth";

// Create a new user with email and password
export const handleCreateUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  sendEmailVerification(userCredential.user);
  return userCredential;
};

// Sign in with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign in with Google account
export const doCreateUserWithGoogle = async () => {
  // Use GoogleAuthProvider from the correct import
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // result.user
  return result;
};

// Sign out the current user
export const doSignOut = () => {
  return auth.signOut();
};

// Send a password reset email
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// Change the password of the current user
export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};
