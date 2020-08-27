import React, { Component } from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import Colors from './Colors';
import '../Css/Details.css'

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }
    getProduct = () => {
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item.id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };
    componentDidMount(){
        this.getProduct();
    }
    render() {
        const {product} = this.state;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item.id}>
                            <img src={item.img} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.name}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Colors colors={item.colors} />
                                <p>{item.description}</p>
                                <Link to="/cart" className="cart">Add to Cart</Link>
                            </div>

                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details