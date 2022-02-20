import styles from './Navbar.module.css'
const Navbar = ({totalItems}) => {
    return <header className={styles.navbar}>
        <h2>front end shopping</h2>
        <span>{totalItems}</span>
        </header>
}
 
export default Navbar;