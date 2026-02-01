import styles from "./Services.module.css";
import {
  FaUserTie,
  FaClipboardCheck,
  FaSearch,
  FaUsers
} from "react-icons/fa";


export const Services = () => {
 return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>

        <h2>Nuestros Servicios</h2>

        <div className={styles.grid}>

          <div className={styles.card}>
            <FaUserTie className={styles.icon} />
            <h3>Reclutamiento y Selección</h3>
            <span className={styles.line}></span>
            <p>Búsqueda y selección de talento calificado.</p>
          </div>

          <div className={styles.card}>
            <FaClipboardCheck className={styles.icon} />
            <h3>Evaluación de Perfiles</h3>
            <span className={styles.line}></span>
            <p>Análisis y pruebas para candidatos.</p>
          </div>

          <div className={styles.card}>
            <FaSearch className={styles.icon} />
            <h3>Headhunting Especializado</h3>
            <span className={styles.line}></span>
            <p>Búsqueda de ejecutivos y directivos.</p>
          </div>

          <div className={styles.card}>
            <FaUsers className={styles.icon} />
            <h3>Consultoría en Talento Humano</h3>
            <span className={styles.line}></span>
            <p>Asesoría en gestión y desarrollo de personal.</p>
          </div>

        </div>

      </div>
    </section>
  );
}