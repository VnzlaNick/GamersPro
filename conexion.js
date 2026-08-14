// 1. Configuración de tus credenciales reales de Supabase
const SUPABASE_URL = "https://zrrpjbqduwtaxsfbsuum.supabase.co/rest/v1/"; // Pon tu URL real
const SUPABASE_ANON_KEY = "sb_publishable_7sOPZc2sJT4jExW3gAREgA_GBpRe6Rp";   // Pon tu clave anon real


// Asegúrate de que las líneas del medio de tu archivo queden así:
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_ANON_KEY;

// Inicializamos usando la librería oficial de Supabase
export const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);







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
