import React, { Component }from 'react';
import Products from './Section/Product';
import Details from './Section/Details';
import {Route} from "react-router-dom";
import Cartshop from './Section/Cartshop';
import Payment from './Section/Payment';


// console.log(Products,Details);
 class Section extends Component {
    render() {
      
        return (
          
            <section>
            <Route  path="/" component={Products} exact />
            <Route  path="/product" component={Products} exact />
            <Route path="/product/:id" component={Details}/>
            <Route path="/cart" component={Cartshop}/>
            <Route path="/payment" component={Payment}/>

            
            </section>
           
            
        )
    }
}

export default Section
