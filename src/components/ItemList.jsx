import { useEffect, useState } from "react";
import Item from "./Item";

const { useEffect, useState } = require("react");


export default function ItemList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      const data = [
        {
          id: "1",
          name: "camisa",
          precio: 2500,         
          stock: 7         
        },
        {
          id: "2",
          name: "remera",
          precio: 1800,
          stock: 25
        }
      ];
      setTimeout(() => resolve(data), 2000);
    })
      .then((dataResolve) => {
        console.log("load: ", dataResolve);
        setProductos(dataResolve);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);

  return (<div>
      {productos.map((item) => (
                <Item datos={item}/>
            ))}
         </div>
                 
        );
}