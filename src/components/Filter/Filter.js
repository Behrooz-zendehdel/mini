import { useProductsActions } from "../../Providers/ProductsProvider";
import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../Filter/filter.module.css'
import SelectCompoenent from '../../common/Select/SelectComponent'

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

                <SelectCompoenent
                    title="filter by size"
                    value={value}
                    onChange={changeHandler}
                    options={options}

                />


                <SelectCompoenent
                    title="sort by price"
                    value={sort}
                    onChange={sortHandler}
                    options={sortOptions}

                />
            </div>

        </div>
    );
}

export default Filter;