import { useEffect, useState } from "react";
import styles from "./WhatsAppButton.module.css";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {

  const [raise, setRaise] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRaise(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/528132510251"
      target="_blank"
      className={`${styles.button} ${raise ? styles.up : ""}`}
    >
      <FaWhatsapp className={styles.icon}/>
      <span>Contáctanos por WhatsApp</span>
    </a>
  );
};
