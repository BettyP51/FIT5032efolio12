<!-- Firebase Sign-In -->
<template>
  <h1>Sign in</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signin">Sign in via Firebase</button></p>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()

const signin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(async (userCredential) => {
          const user = userCredential.user;
          const userId = user.uid;

          // Fetch role from Firestore (assume 'roles' collection)
          const db = getFirestore();
          const userDoc = doc(db, 'roles', userId);
          const docSnap = await getDoc(userDoc);
          
          if (docSnap.exists()) {
              const role = docSnap.data().role;  // Assuming the role is stored as 'role'
              console.log("User role:", role);

              // Redirect based on role
              if (role === 'admin') {
                  router.push("/admin-dashboard");
              } else if (role === 'user') {
                  router.push("/user-dashboard");
              }
          } else {
              console.log("No such document for role!");
          }

          console.log("Firebase Sign-in Successful!");
          console.log("Current user:", auth.currentUser); // To check the current user signed in
      })
      .catch((error) => {
          console.log("Error:", error.code);
      });
}
</script>
