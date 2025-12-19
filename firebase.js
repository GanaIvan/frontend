<!-- firebase.js -->
<script type="module">
  // Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  // ⚠️ PEGA TU CONFIG AQUÍ
  const firebaseConfig = {
    apiKey: "AIzaSyDyZplhFRU1anVZqi8JpzoxrKmOEJhLmJc",
    authDomain: "ganaconivan-admin.firebaseapp.com",
    projectId: "ganaconivan-admin",
    storageBucket: "ganaconivan-admin.firebasestorage.app",
    messagingSenderId: "1061309710988",
    appId: "1:1061309710988:web:a6b9effa477d4f74cbf1a9"
  };

  // Init
  const app = initializeApp(firebaseConfig);

  // Export servicios
  window.auth = getAuth(app);
  window.db = getFirestore(app);
</script>
