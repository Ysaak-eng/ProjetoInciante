import styles from "./Navbar.module.css";
import imagem from "../assets/grass-6264039.jpg";

export const Nav = ({ name }) => {
  return (
    <header>
      <div className={styles.navContainer}>
        <div className={styles.name}>{name}</div>
        <div className="navNavigation">
          <ul>
            <li>Home</li>
            <li>Cortes</li>
            <li>Bloge</li>
            <li>Hire me</li>
          </ul>
        </div>
      </div>
      <img src={imagem} alt="" className={styles.imag} />
    </header>
  );
};
