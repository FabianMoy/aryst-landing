import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo2.png";

export const Header = () => {
const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  // Cerrar al cambiar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

      document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="ARYST logo" />
        </div>

        <nav className={styles.nav}>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.mobileMenu} >
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}