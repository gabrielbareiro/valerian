import React, {Fragment} from "react"
import ItemCount from "./ItemCount"

const style = {width: '18rem'}
export default function Item ({nombre, stock, precio}) {
        return (
          <Fragment>

            <div className="card" style={style}>
            <div className="card-body">
                <h5 className="card-title">Articulo: {nombre}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <div className="card-text">Disponibles: {stock}</div>
            <ItemCount  initial={1} stock={stock} />
            </div>
            </div>
          </Fragment>
        
        )
      }
