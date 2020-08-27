import React, { Component }from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        id: "air-jordan-3-valor-blue",
        name: "VALOUR BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 54,
        colors: ["red", "blue", "white", "maroon"],
        "count": 1
      },
       {
        id: "jordan-mars-270-london",
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 45,
        colors: ["red", "blue", "white", "maroon"],
        "count": 1
      },
      {
        id: "air-jordan-1-zoom-racer-blue" ,
        name: "RACER BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 24,
        colors: ["red", "blue", "white", "maroon"],
        "count": 1
      },
      {
        id: "air-jordan-2-on-racer-blue" ,
        name: "Porshe BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 24,
        colors: ["red", "blue", "white", "maroon"],
        "count": 1
      },
       {
        id: "air-wolf-1-zoom-racer-blue",
        name: "Sportie BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 38,
        colors: ["red", "blue", "white", "maroon"],
        "count": 1
      },
       {
        id: "air-jaguar-1-zoom-racer-blue",
        name: "Jaguar BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 64,
        colors: ["red", "blue", "white", "grey"],
        "count": 1
      },
    ],
    cart: [],
    total: 0
  };


addCart = (id) => {
  const {products, cart} = this.state;
  const check = cart.every(item => {
    return item.id !== id
  })
  if(check){
    const data = products.filter(product => {
      return product.id === id
    })
    this.setState({cart: [...cart,...data]})
  }else{
    alert("The product already added to cart")
  }
  
};
reduction = id => {
  const { cart } = this.state;
  cart.forEach(item =>{
    if(item.id === id){
      item.count === 1 ? item.count = 1 : item.count -=1;
    }
  })
  this.setState({cart:cart});
  this.getTotal();
};
increase = id => {
  const { cart } = this.state;
  cart.forEach(item =>{
    if(item.id === id){
      item.count +=1
    }
  })
  this.setState({cart:cart});
  this.getTotal();

};
removeCart = id => {
  if(window.confirm("Do you wanna really delete this product")){
    const { cart } = this.state;
    cart.forEach((item,index) => {
      if(item.id === id){
        cart.splice(index,1)
      }
    })
    this.setState({cart:cart});
    this.getTotal();
  }
 
};
getTotal= () => {
  const{cart} = this.state;
  const res = cart.reduce((prev, item) => {
    return prev + (item.price * item.count)
  },0)
  this.setState({total : res})
}
componentDidUpdate(){
  localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
  localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
};
componentDidMount(){
  const dataCart = JSON.parse(localStorage.getItem('dataCart'));
  if(dataCart !== null){
    this.setState({cart: dataCart});
  }
  const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
  if(dataTotal !== null){
    this.setState({total: dataTotal});
  }
}

  render() {
    const {products,cart, total} = this.state;
    const {addCart, reduction, increase, removeCart, getTotal} = this;
    return(
        <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeCart, total,getTotal}}>
            {this.props.children}
        </DataContext.Provider>
    );
  }
}


