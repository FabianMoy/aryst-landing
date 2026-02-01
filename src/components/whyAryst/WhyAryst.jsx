import styles from "./WhyAryst.module.css";
import jobs from "../../assets/images/whyuscover.png";
import { FaCheckCircle } from "react-icons/fa";

export const WhyAryst = () => {
  return (
    <section className={styles.why} id="porque">
      <div className={styles.container}>

        <h2>¿Por qué ARYST?</h2>

        <p className={styles.subtitle}>
          Profesionalismo, confidencialidad y{" "}
          <span>enfoque estratégico</span> en cada proceso.
        </p>

        <div className={styles.content}>

          {/* LIST */}
          <ul className={styles.list}>
            <li>
              <FaCheckCircle />
              Rapidez en los resultados.
            </li>
            <li>
              <FaCheckCircle />
              Precisión y eficacia.
            </li>
            <li>
              <FaCheckCircle />
              Enfoque empresarial.
            </li>
            <li>
              <FaCheckCircle />
              Amplia experiencia.
            </li>
          </ul>

          {/* IMAGE */}
          <div className={styles.imageWrapper}>
            <img src={jobs} alt="Equipo ARYST" />
          </div>

        </div>

      </div>
    </section>
  );
}