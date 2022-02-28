import styles from '../Select/SelectComponent.module.css'
import Select from 'react-select';
const SelectComponent = ({ value, onChange, options, title }) => {

    return (
        <div className={styles.selectContainer}>

            <span>{title}</span>

            <Select
                value={value}
                onChange={onChange}
                options={options}
                className={styles.Select}
            />
        </div>
    );
}

export default SelectComponent;