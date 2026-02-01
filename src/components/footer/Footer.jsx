import styles from "./Footer.module.css";
import logo from "../../assets/images/logo2.png"; 
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Footer = () => {
  const [legalOpen, setLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  return (
    <footer className={styles.footer} id="footer">
      {legalOpen && (
  <Modal title="Aviso Legal" onClose={() => setLegalOpen(false)}>
    <p>ARYST, con domicilio comercial en México, es responsable del tratamiento de los datos personales que nos proporcione.

Los datos personales recabados a través de este sitio web, como nombre, correo electrónico, teléfono y empresa, serán utilizados únicamente para fines de contacto, atención de solicitudes de información y prestación de servicios relacionados con reclutamiento y selección de talento.

ARYST se compromete a proteger su información personal y a utilizarla de forma confidencial, adoptando las medidas de seguridad necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado.

El titular de los datos podrá ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación u oposición (derechos ARCO) enviando una solicitud al correo electrónico de contacto correspondiente.

Al proporcionar sus datos personales, usted acepta el presente aviso de privacidad.</p>
  </Modal>
)}

{privacyOpen && (
  <Modal title="Aviso de Privacidad" onClose={() => setPrivacyOpen(false)}>
    <p>El presente sitio web es propiedad de ARYST.

El contenido de este sitio tiene fines informativos y comerciales relacionados con los servicios de reclutamiento y selección de talento.

ARYST no garantiza la disponibilidad ininterrumpida del sitio ni se hace responsable por daños derivados del uso de la información aquí contenida.

Queda prohibida la reproducción total o parcial del contenido sin autorización expresa de ARYST.

El uso de este sitio implica la aceptación de los presentes términos.
</p>
  </Modal>
)}
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.brand}>
          <img src={logo} alt="ARYST Logo" />
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          © 2026 ARYST. Todos los derechos reservados.
        </div>

        {/* RIGHT */}
        <div className={styles.links}>
<a onClick={() => setLegalOpen(true)}>Aviso Legal</a>
<span>|</span>
<a onClick={() => setPrivacyOpen(true)}>Política de Privacidad</a>
        </div>

      </div>
    </footer>
  );
};