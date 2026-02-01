import styles from "./Hero.module.css";
import jobs from "../../assets/images/Herocover.png";

export const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>

        <h1>Conectamos empresas con el talento correcto.</h1>

        <p>
          Soluciones eficientes para encontrar al candidato ideal.
        </p>

        <a href="#contacto" className={styles.cta}>
          Solicitar reclutamiento
        </a>

        {/* IMAGEN REAL */}
        <div className={styles.imageWrapper}>
          <img
            src={jobs}
            alt="Equipo de reclutamiento"
          />
        </div>

      </div>
    </section>
  );
}