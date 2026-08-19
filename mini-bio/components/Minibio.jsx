import styles from "./Minibio.module.css";

export default function Minibio() {
  return (
    <section className={styles.bio}>
      <h2 className={styles.title}>Sobre mim</h2>
      <p className={styles.text}>
        Front-end Developer & UI/UX Designer <br></br>
Estudante de Sistemas para Internet, apaixonada por tecnologia, desenvolvimento web e design.<br></br>
1º lugar no Demoday do Porto Digital 2025.2.
      </p>
    </section>
  );
}