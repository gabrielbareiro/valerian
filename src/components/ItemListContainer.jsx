import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import datosJson from "./data.json"


export default function ItemListContainer ({titulo}) {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      new Promise((resolve, reject) => {
        setLoading(true);
        const dataJson = '{"result":true, "count":42}';
        const dataObj = JSON.parse(dataJson)
        console.log(dataObj);
        setTimeout(() => resolve(dataObj.filter((item) => item.id === id)), 2000);
        
      })
        .then((data) => setProducts(data))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return loading ? (
        <h1>Loading ...</h1>
      ) : (
        <ItemList productos={productos}/>
      );
}
