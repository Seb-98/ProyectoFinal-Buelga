import ItemCamiseta from "./ItemCamiseta";

const ItemList = ({ dataList }) => {

    return (
        <div className="d-flex flex-wrap justify-content-center gap-4">
            {dataList.map((item) => (
                <ItemCamiseta dataCamiseta={item} key={item.id} />
            ))}
        </div>
    )
}

export default ItemList;