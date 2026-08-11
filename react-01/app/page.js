import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <h1>Olá Turma!</h1>
     <p>Página de testes para atividade de Programação Front-End.</p>
    </div>
  );
}
