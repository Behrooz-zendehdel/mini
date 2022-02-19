import styles from './Navbar.module.css';
const Navbar = (props) => {
    return (
        <header className={styles.Navbar}>
            <h2>Front End shopping</h2>
            <span>0</span>
        </header>
    );
}

export default Navbar;