// 1. Importamos la base del sistema desde Google (Tu código ya lo tenía)
import { initializeApp } from "https://gstatic.com";
import { getAnalytics } from "https://gstatic.com";

// === CORRECCIÓN QUIRÚRGICA: Añadimos la pieza que te faltaba para usar la Base de Datos (Firestore) ===
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://gstatic.com";

// 2. Tus credenciales secretas de GamersPro
const firebaseConfig = {
  apiKey: "AIzaSyA8lyX4IVmbgBNoI9-ufXYQanr78AiX_zU",
  authDomain: "://firebaseapp.com",
  projectId: "migamerspro",
  storageBucket: "migamerspro.firebasestorage.app",
  messagingSenderId: "1002942942865",
  appId: "1:1002942942865:web:444fa77ac2cd71660fb930",
  measurementId: "G-TL85P679SF"
};

// 3. Inicializamos Firebase y creamos la variable real 'db' que antes faltaba
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // <- Esta es la pieza clave que le da vida a 'db'

// Mensaje de prueba rápido para la consola
console.log("=== SISTEMA: Conexión limpia establecida con Firebase ===");

// 4. EXPORTAMOS todo ordenadamente para que el resto de tu foro lo use
export { db, collection, addDoc, getDocs, serverTimestamp };
