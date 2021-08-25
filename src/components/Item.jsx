import React, {Fragment} from "react"
import ItemCount from "./ItemCount"

const style = {width: '16rem'}
export default function Item ({articulo, stock, precio, imagen}) {
        return (
          <Fragment>

            <div className="card text-center border-secondary col-md" style={style}>
            <div className="card-body">
                <img className="card-img-top" src={imagen} alt="" />
                <h5 className="card-title">{articulo}</h5>
                <p className="card-text">Precio: ${precio}</p>
                <div className="card-text">Disponibles: {stock}</div>
            <ItemCount  initial={0} stock={stock} />
            </div>
            </div>
          </Fragment>
        
        )
      }

