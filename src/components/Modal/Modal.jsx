import styles from "./Modal.module.css";

export const Modal = ({ title, children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
        <h3>{title}</h3>
        <button className={styles.modalButton} onClick={onClose}>✕</button>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

