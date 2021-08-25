import { useEffect, useState } from "react";
import Item from "./Item";


export default function ItemList({productos}) {
 
  return (
    <div className= "container">
      <div className= "row row-cols-1 row-cols-md-3"> 
    {productos.map((u) => (
    <Item key={u.id} {...u}/>
    ))}
  </div>
    </div>
    
  )
   
  
}