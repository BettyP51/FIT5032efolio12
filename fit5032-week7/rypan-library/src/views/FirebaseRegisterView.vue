<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p>
      <select v-model="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </p>
    <p><button @click="register">Save to Firebase</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
  import { getFirestore, doc, setDoc } from "firebase/firestore"; 

  const email = ref("");
  const password = ref("");
  const role = ref("user"); 
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore(); 
  
  const register = () => {
  if (!email.value || !password.value) {
    alert("Email and password are required.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Invalid email format.");
    return;
  }

  if (password.value.length < 6) {
    alert("Password should be at least 6 characters.");
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (data) => {
      console.log("Firebase Register Successful!");

      await setDoc(doc(db, "users", data.user.uid), {
        email: email.value,
        role: role.value
      });

      router.push("/dashboard");
    })
    .catch((error) => {
      let errorMessage = "Registration failed. Please try again.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Email already in use.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email format.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password is too weak.";
      }

      alert(errorMessage); 
      console.log(error.code);
    });
};
</script>
  