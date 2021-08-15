import ItemList from "./ItemList";

export default function ItemListContainer ({titulo}) {
    return (
        <>
            <div>{titulo}</div>
            <ItemList />
        </>
    );
}