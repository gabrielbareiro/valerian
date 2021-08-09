import React, {Fragment} from "react"
import Button from "./Button"

const style = {width: '18rem'}
export default function cards (props) {
        return (
          <Fragment>
            <div className="card" style={style}>
              <div className="card-body">
                <h5 className="card-title">articulo: {props.nombre}</h5>
                <p className="card-text">disponibles: {props.stock}</p>
                <a href="#" className="btn btn-outline-secondary">comprar</a>
              </div>
            </div>
          </Fragment>
        
        )
      }
