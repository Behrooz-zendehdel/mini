
import { Component } from 'react';
import './App.css'
import ProductList from './components/ProductList/ProductList';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
    constructor(props) {
        super(props)
        console.log('app.js constructor ');
    }

    state = {
        products: [
            { title: "react.js", price: "99$", id: 1, quantity: 1 },
            { title: "node.js", price: "89$", id: 2, quantity: 2 },
            { title: "javascript", price: "79$", id: 3, quantity: 3 },
        ],
       
    }


    removeHandler = (id) => {
        console.log('clicked', id)
        const filteredProduct = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filteredProduct })
    }
    incrementHandler = (id) => {
        const index =this.state.products.findIndex((item)=> item.id ===id);
        console.log(index)
        const product = {...this.state.products[index]}
        product.quantity++
        const products=[...this.state.products];
        products[index]=product;
this.setState({products})
        // console.log('increment', id)
        // const products = [...this.state.products]
        // const selectedItem = this.state.products.find((p) => p.id === id);
        // selectedItem.quantity++; // muted state !
        // this.setState({ products })
    }
    decrementHandler = (id) => {
        const products = [...this.state.products]
        const decrementItem = this.state.products.find((p) => p.id === id);
        if (decrementItem.quantity === 1) {
            const filteredProduct = products.filter((p) => p.id !== id);
            this.setState({ products: filteredProduct })
        } else {
            decrementItem.quantity--; // muted state !
            this.setState({ products })
        }
    }


    componentDidMount() {
        console.log('app.js componentDidMount')
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('app.js componentDidUpdate')
        console.log('app .js',prevState)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }


    render() {
        console.log('app.js render')
        return (
            <div className="container" id="title">
                <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
                <ProductList products={this.state.products}
                    onRemove={this.removeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                />

            </div>
        )
    }

};

export default App;






