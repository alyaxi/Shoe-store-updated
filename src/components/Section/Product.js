import React  from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import '../Css/Products.css'

export class Products extends React.Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
        return (
            <div id='products'>
                {products.map(product => (
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        <img src={product.img} alt=""/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Products
