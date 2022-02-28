import { useProductsActions } from "../../Providers/ProductsProvider";

const Filter = () => {
    const dispatch = useProductsActions();
  
    return (
        <div>
            <p>filter product based on : </p>
            <div>
                order by:
                <select  onChange={(e) => dispatch({ type: "filter",  event: e })}
>
                    <option value="">All</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                    <option value="XS">XS</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;