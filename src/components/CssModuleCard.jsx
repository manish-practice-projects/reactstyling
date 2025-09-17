import styles from "./CssModuleCard.module.css";

export default function CssModuleCard({ name, role, active }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{role}</p>
      <p className={active ? styles.active : styles.inactive}>
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}
