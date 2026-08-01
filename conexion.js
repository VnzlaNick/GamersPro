// 1. Configuración de credenciales de Supabase para GamersPro
// Remplaza estas dos cadenas por tus claves reales de Supabase (Settings -> API)
const SUPABASE_URL = "https://zrrpjbqduwtaxsfbsuum.supabase.co/rest/v1/"; 
const SUPABASE_ANON_KEY = "sb_publishable_7sOPZc2sJT4jExW3gAREgA_GBpRe6Rp";

// 2. Inicializar el cliente global de Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. EXPORTAR la instancia para que tus otros archivos la puedan usar
export { supabase };

// 4. Función global para registrar posts de usuarios invitados sin login
async function publicarMensajeAnonimo(tituloPost, contenidoPost, categoriaPost) {
  try {
    const { data, error } = await supabase
      .from('posts') // El nombre exacto de la tabla que creaste en Supabase
      .insert([
        { 
          title: tituloPost, 
          content: contenidoPost, 
          category: categoriaPost, 
          author: "Invitado Anónimo" 
        }
      ]);

    if (error) throw error;

    alert("¡Post creado con éxito en GamersPro!");
    window.location.href = "index.html"; // Te redirige al foro principal
    
  } catch (error) {
    console.error("Error crítico al insertar en Supabase:", error.message);
    alert("Hubo un error al intentar publicar: " + error.message);
  }
}

// Hacer la función accesible desde los formularios HTML
window.publicarMensajeAnonimo = publicarMensajeAnonimo;

