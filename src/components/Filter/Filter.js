import { useProductsActions } from "../../Providers/ProductsProvider";
import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../Filter/filter.module.css'

const options = [
    { value: "", label: "All" },
    { value: "Xs", label: "Xs" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
]

const Filter = () => {
    const dispatch = useProductsActions();
    const [value, setValue] = useState("");

    const changeHandler = (selectedOption) => {
        console.log(selectedOption)

        dispatch({ type: "filter", selectedOption })
        setValue(selectedOption)
    }
    return (
        <div className={styles.filter}>
            <p>filter product based on : </p>
            <div className={styles.Container}>

                <span>order by:</span>

                <Select
                    value={value}
                    onChange={changeHandler}
                    options={options}
                    className={styles.Select}
                />
            </div>
        </div>
    );
}

export default Filter;