import { useState } from "react";
import styles from './search.module.css';

const SearchBar = () => {
    const [value, setValue] = useState("");


    const changeHandler = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return (
        <div className={styles.formControl}>
            search for :
            <input
                type="text"
                placeholder="search for ..."
                onChange={changeHandler}
                value={value}

            />
        </div>
    );
}

export default SearchBar;