import styles from "./AboutContact.module.css";
import jobs from "../../assets/images/aboutuscover.png";
import { useState } from "react";

export const AboutContact = () => {

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function isValid() {
    return (
      form.name.trim() &&
      form.company.trim() &&
      form.email.includes("@") &&
      form.phone.trim() &&
      form.message.trim()
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    setLoading(true);

    const whatsappNumber = "528132510251";

    const text = `
Nuevo contacto desde ARYST

Nombre: ${form.name}
Empresa: ${form.company}
Correo: ${form.email}
Teléfono: ${form.phone}

Mensaje:
${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });

      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
    }, 800);
  }

  return (
    <section className={styles.wrapper} id="contacto">
      <div className={styles.container}>

        {/* ABOUT */}
        <div className={styles.about}>
          <h2>Sobre Nosotros</h2>
          <p>
            ARYST, expertos en reclutamiento y selección de talento.
            Comprometidos con la ética, la experiencia y los resultados.
          </p>

          <div className={styles.imageWrapper}>
            <img src={jobs} alt="Sobre ARYST" />
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.contact}>
          <h2>Contáctanos</h2>

          <form className={styles.form} onSubmit={handleSubmit}>

            <input
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="company"
              placeholder="Empresa"
              value={form.company}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {loading && (
              <p className={styles.info}>
                Te redirigimos a WhatsApp...
              </p>
            )}

            {success && (
              <p className={styles.success}>
                Formulario listo ✔
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};
