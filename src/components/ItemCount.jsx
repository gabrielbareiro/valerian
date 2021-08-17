import React, { Fragment, useState} from "react";
import Button from "./Button";




export default function itemCount ({stock, initial, onAdd}) {
        const [contador, setCount] = useState(initial);

        const incrementar= () => {
          if (contador < stock) {
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
              <div className="card-body">
                <h5 className="card-title">articulo: articulo</h5>
                <div className="card-text">disponibles: {stock}</div>
                <p>Agregados {contador}</p>
                <Button text="+" onAdd={incrementar} />
                <Button text="-" onAdd={decrementar} />
                <a href="#" className="btn btn-outline-secondary">comprar</a>
            </div>
          </Fragment>
        );
      }
