import Image from "next/image";
import styles from "./Perfil.module.css";

export default function Perfil() {
    return (
        <div className={styles.profile}>
           
            <Image
            src="/image.jpg"
            alt="Foto de Kamilly"
            width={180}
            height={180}
            priority
            className={styles.avatar}
            />

            <div className={styles.identity}>
        <h2 className={styles.nome} style={{ color: '#3e2426' }}> Kamilly Kauany Nascimento </h2>
        <p className={styles.role}>Estudante de Sistemas para Internet</p>
        <p className={styles.role}>3º período - unicap</p>
      </div>
    </div>
  );
}