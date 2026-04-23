function enviarCampañaPersonalizada(e) {
  var nombre = e.values[1];  
  var uso = e.values[4];     // Columna E (Uso que le das)
  var email = e.values[10];  // Columna K (Email)
  
  var asunto = "";
  var bannerUrl = "https://i.postimg.cc/7PVqmRCJ/Compubot.jpg"; // Link de tu imagen decorativa
  var whatsappLink = "https://wa.me/2325459766"; // Tu número
  
  // VARIABLES PARA LOS LINKS (Definilas acá vacías)
  var linkSeleccionado = "";
  var mensajeTexto = "";

  // ASIGNACIÓN SEGÚN LA ELECCIÓN
  if (uso == "Gaming") {
    asunto = "🔥 " + nombre + ", ¡potenciá tu setup al máximo!";
    linkSeleccionado = "https://drive.google.com/file/d/1ubt5_g3UuVluiF-Z5etWPRDhwXbPrSh-/view?usp=sharing"; // TU LINK GAMING
    mensajeTexto = "Vimos que buscás rendimiento para tus partidas. Tenemos los mejores periféricos para vos.";
  } 
  else if (uso == "Oficina" || uso == "Estudio") {
    asunto = "💻 " + nombre + ", hacé que tu espacio de trabajo vuele";
    linkSeleccionado = "https://drive.google.com/file/d/1yGhLQJ5kuHJ5kP4qDRLsPKXYVU3_7prP/view?usp=sharing"; // TU LINK OFICINA
    mensajeTexto = "Mejorá tu productividad con nuestras soluciones ergonómicas y de almacenamiento.";
  } 
  else {
    asunto = "¡Hola " + nombre + "! Mirá nuestras ofertas";
    linkSeleccionado = "https://link-de-tu-catalogo-GENERAL.com"; // LINK GENERAL
    mensajeTexto = "Te invitamos a conocer todos nuestros insumos informáticos.";
  }

  // DISEÑO DEL MENSAJE HTML
  var mensajeHtml = "<div style='font-family: Arial; text-align: center; border: 1px solid #ddd; padding: 20px;'>" +
                    "<img src='" + bannerUrl + "' style='width: 100%; max-width: 600px;'>" +
                    "<h1>¡Hola " + nombre + "!</h1>" +
                    "<p>" + mensajeTexto + "</p>" +
                    "<br>" +
                    // EL BOTÓN USA EL LINK QUE SE ASIGNÓ ARRIBA
                    "<a href='" + linkSeleccionado + "' style='background-color: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;'>Ver Catálogo Especializado</a>" +
                    "<br><br>" +
                    "<a href='" + whatsappLink + "' style='background-color: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;'>Consultanos por WhatsApp</a>" +
                    "</div>";

  MailApp.sendEmail({
    to: email,
    subject: asunto,
    htmlBody: mensajeHtml
  });
}
