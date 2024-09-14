<template>
  <div>
    <h1>Sign In</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signin">Sign In via Firebase</button>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const email = ref("");
const password = ref("");
const router = useRouter();
const auth = getAuth();
const db = getFirestore();

// Inject globalState provided in main.js
const globalState = inject('globalState');

// Sign in function
const signin = () => {
  if (!email.value || !password.value) {
    alert("Please fill in both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async (data) => {
      console.log("Firebase Sign In Successful!");

      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, "users", data.user.uid));
      if (userDoc.exists()) {
        const userRole = userDoc.data().role;
        if (userRole) {
          globalState.role = userRole;  // Update global role state
          console.log("User role:", globalState.role);

          // Redirect to home page after login
          router.push("/");
        } else {
          console.log("User role is missing!");
          alert("Your account does not have an assigned role.");
        }
      } else {
        console.log("No such user in Firestore!");
        alert("No such user in Firestore!");
      }
    })
    .catch((error) => {
      console.log("Sign-in error:", error.message);
      alert("Login failed: " + error.message);
    });
};
</script>
