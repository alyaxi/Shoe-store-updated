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
        colors: ["red", "black", "white", "maroon"],
      },
       {
        id: "jordan-mars-270-london",
        name: "JORDAN MARS 270 LONDON",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 45,
        colors: ["red", "black", "white", "maroon"],
      },
      {
        id: "air-jordan-1-zoom-racer-blue" ,
        name: "RACER BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 24,
        colors: ["red", "black", "white", "maroon"],
      },
      {
        id: "air-jordan-2-on-racer-blue" ,
        name: "Porshe BLUE",
        img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 24,
        colors: ["red", "black", "white", "maroon"],
      },
       {
        id: "air-wolf-1-zoom-racer-blue",
        name: "Sportie BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 38,
        colors: ["red", "black", "white", "maroon"],
      },
       {
        id: "air-jaguar-1-zoom-racer-blue",
        name: "Jaguar BLUE",
        img:
          "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price: 64,
        colors: ["red", "black", "white", "maroon"],
      },
    ]
  };
  render() {
    const {products} = this.state;
    return(
        <DataContext.Provider value={{products}}>
            {this.props.children}
        </DataContext.Provider>
    );
  }
}


