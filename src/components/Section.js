import React, { Component }from 'react';
import Products from './Section/Product';
import Details from './Section/Details';
import {Route} from "react-router-dom"


// console.log(Products,Details);
 class Section extends Component {
    render() {
      
        return (
          
            <section>
            <Route  path="/product" component={Products} exact />
            <Route path="/product/:id" component={Details}/>
            
            </section>
           
            
        )
    }
}

export default Section
