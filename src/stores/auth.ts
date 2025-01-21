import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null, // Type the user as Firebase User object or null
  }),

  actions: {
    async register(email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        console.log("User registered:", this.user);
      } catch (error) {
        console.error("Registration error:", error);
      }
    },

    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        console.log("User logged in:", this.user);
      } catch (error) {
        console.error("Login error:", error);
      }
    },

    async googleLogin() {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
        console.log("Google login successful:", this.user);
      } catch (error) {
        console.error("Google login error:", error);
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        console.log("User logged out");
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
  },

  getters: {
    isAuthenticated: (state) => state.user !== null, // Add a getter to check if user is authenticated
  },
});
