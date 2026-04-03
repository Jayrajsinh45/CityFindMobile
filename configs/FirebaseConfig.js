import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjUSz2UqgWHJ2ATM1EbCHm9QSPQygbD6k",
  authDomain: "cityfind-735e6.firebaseapp.com",
  projectId: "cityfind-735e6",
  storageBucket: "cityfind-735e6.appspot.com",
  messagingSenderId: "367959994273",
  appId: "1:367959994273:web:907180cf39b4fefd2fa5e0",
  measurementId: "G-QZQ4ME0V1F"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
export const storage = getStorage(app);