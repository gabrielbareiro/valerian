import React, {Fragment} from "react"
import ItemCount from "./ItemCount"

const style = {width: '18rem'}
export default function Item () {
        return (
          <Fragment>
            <div className="card" style={style}>
            <ItemCount  initial={1} stock={10} />
            </div>
          </Fragment>
        
        )
      }
