import React, { useState, useEffect } from "react";
import Button from "./Button";


export default function items (props) {
        const [count, setCount] = useState(0);
        return (
          <React.Fragment>
            <h3>Agregados {count}</h3>
            {props.count2}
            <Button text="+" Click={() => setCount(count + 1)} />
            <Button text="-" Click={() => setCount(count - 1)} />
          </React.Fragment>
        );
      }
