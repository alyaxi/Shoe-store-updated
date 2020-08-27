import React, { Component } from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import Colors from './Colors';
import '../Css/Details.css';
import '../Css/CartShop.css';

export class Cartshop extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal()
    }
    render() {
        const {cart, reduction, increase, removeCart, total} = this.context;
        if(cart.length === 0){
           return <h2 style={{textAlign:"center"}}>Empty Cart</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item.id}>
                                <img src={item.img} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.name}</h2>
                                        <span>${item.price * item.count}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}>-</button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}>+</button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeCart(item.id)}>X</div>
                            </div>
                        ))
                    }
                    <div className='total'>
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${total}</h3>
                    </div>
                </>
            )
        }
        }
        
}

export default Cartshop
