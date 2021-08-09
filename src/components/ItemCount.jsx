import React, { Fragment, useState, useEffect } from "react";
import Button from "./Button";
import Cards from "./Cards";

const cards = {id: 1, nombre: "remera", stock: 5}
  
//const enStock = cards.stock;
//console.log(enStock)

export default function itemCount () {
        const [contador, setCount] = useState(0);
        
        const enStock = cards.stock

        const incrementar= () => {
          if (contador < enStock) {
          setCount(contador +1)  
          }
        }
        const decrementar= () =>{
          if (contador > 0) {
            setCount(contador -1)
          }
        }
        return (
          <Fragment>
              <Cards nombre= {cards.nombre} stock= {cards.stock}/>
            <p>Agregados {contador}</p>
            <Button text="+" Click={incrementar} />
            <Button text="-" Click={decrementar} />
          </Fragment>
        );
      }
