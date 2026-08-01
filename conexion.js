// 1. Configuración de tus credenciales reales de Supabase
const SUPABASE_URL = "https://zrrpjbqduwtaxsfbsuum.supabase.co/rest/v1/"; // Pon tu URL real
const SUPABASE_ANON_KEY = "sb_publishable_7sOPZc2sJT4jExW3gAREgA_GBpRe6Rp";   // Pon tu clave anon real

// CORRECCIÓN CLAVE: Usamos 'supabase.createClient' con la 's' minúscula de la librería
// pero guardamos el resultado en una constante para exportar.
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_ANON_KEY;

// Inicializamos usando el objeto global que carga el script del CDN
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Exportamos la herramienta lista para usar
export { supabase };

// Función global encargada de enviar la información desde el formulario
async function publicarMensajeAnonimo(tituloPost, contenidoPost, categoriaPost) {
  try {
    const { data, error } = await supabase
      .from('posts')
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
    window.location.href = "index.html"; // Nos regresa a la página principal
    
  } catch (error) {
    console.error("Error crítico al insertar en Supabase:", error.message);
    alert("Hubo un error al intentar publicar: " + error.message);
  }
}

// Hacer la función accesible de forma global para los scripts HTML
window.publicarMensajeAnonimo = publicarMensajeAnonimo;
