import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.texto}>
        <p>Desenvolvido por Gabriel Ramos Trindade </p>
        <p> DW2A4 - Prof. Johnata Santicioli</p>
        <p className={styles.logo}>Projeto SPA© 2021</p>
      </section>

      <section id="social">

        <a href="http://github.com/tadsgabrieltrindade" target="__new" className={styles.item}> 
            <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/tadsgabrieltrindade" target="__new" className={styles.item}> 
            <FaLinkedin />
        </a>

        <a href="https://instagram.com/tadsgabrieltrindade" target="__new" className={styles.item}> 
            <FaInstagram />
        </a>
        
      </section>
    </footer>
  );
}

export default Footer;
