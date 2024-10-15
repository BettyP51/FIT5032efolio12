<!-- Firebase Register -->
<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p>
    <select v-model="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  </p>
  <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const role = ref("user")
const router = useRouter()
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {
          const user = userCredential.user;
          const userId = user.uid;

          // Save role to Firestore (default role: 'user')
          const db = getFirestore();
          await setDoc(doc(db, 'roles', userId), {
              role: role.value // Assign default role here
          });

          console.log("Role saved successfully:", role.value);
          console.log("Firebase Register Successful!");
          router.push("/signin");
      })
      .catch((error) => {
          console.log("Error saving role:", error.code);
      });
}
</script>
