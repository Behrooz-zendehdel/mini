import styles from './Navbar.module.css'
const Navbar = (props) => {
    return <header className={styles.navbar}>
        <h2>front end shopping</h2>
        <span>{props.totalItems}</span>
        </header>
}
 
export default Navbar;