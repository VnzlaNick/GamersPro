
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA8lyX4IVmbgBNoI9-ufXYQanr78AiX_zU",
    authDomain: "migamerspro.firebaseapp.com",
    projectId: "migamerspro",
    storageBucket: "migamerspro.firebasestorage.app",
    messagingSenderId: "1002942942865",
    appId: "1:1002942942865:web:444fa77ac2cd71660fb930",
    measurementId: "G-TL85P679SF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
