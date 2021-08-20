import { useEffect, useState } from "react";
import Item from "./Item";


export default function ItemList({productos}) {
 
  return (
    <div> 
    {productos.map((u) => (
    <Item key={u.id} {...u}/>
    ))}
  </div>
  )
   
  
}