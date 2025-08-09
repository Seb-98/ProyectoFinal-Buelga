import ItemCamiseta from "./ItemCamiseta";

const ItemList = ({ dataList }) => {

    return (
        <div className="d-flex justify-content-start gap-5">
            {dataList.map((item) => (
                <ItemCamiseta dataCamiseta={item} key={item.id} />
            ))}
        </div>
    )
}

export default ItemList;