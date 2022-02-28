import { useProductsActions } from "../../Providers/ProductsProvider";
import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../Filter/filter.module.css'

const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },

]
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
    const [sort, setSort] = useState("");

    const sortHandler = (selectedOption) => {
        dispatch({ type: "sort", selectedOption })
        setSort(selectedOption)
    }
    const changeHandler = (selectedOption) => {
        dispatch({ type: "filter", selectedOption })
        dispatch({ type: "sort", selectedOption: sort })
        setValue(selectedOption)
    }
    return (
        <div className={styles.filter}>
            <p>filter product </p>
            <div className={styles.Container}>

                <span>order by:</span>

                <Select
                    value={value}
                    onChange={changeHandler}
                    options={options}
                    className={styles.Select}
                />
            </div>
            <div className={styles.Container}>

                <span>sort by:</span>

                <Select
                    value={value}
                    onChange={sortHandler}
                    options={sortOptions}
                    className={styles.Select}
                />
            </div>
        </div>
    );
}

export default Filter;