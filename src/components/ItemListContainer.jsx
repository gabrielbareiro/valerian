import { useEffect, useState } from "react";
import ItemList from "./ItemList";



export default function ItemListContainer({ titulo }) {
  const [productos, setProductos] = useState([]);

  const getCharacterFromApi = async () => {
    try {
      // este response siempre nos devuelve un objeto para ejecutar una promesa
      const response = await fetch(
        "https://raw.githubusercontent.com/gabrielbareiro/mi-api/master/data/data.json",
        {
          method: "GET"
        }
      );
      const data = await response.json();
        console.log(data)
      setProductos(data);
    } catch (error) {
      console.log("aca hay un error");
    }
  };

  useEffect(() => {
    getCharacterFromApi();
  }, []);
  console.log(productos)
  return (
    <ItemList productos={productos} />
  );
}
