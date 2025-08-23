import Item from "./Item";

const ItemList = ({ dataItemList }) => {

    return (
        <div className="d-flex flex-wrap justify-content-center gap-4">
            {dataItemList.map((item) => (
                <Item dataCamiseta={item} key={item.id} />
            ))}
        </div>
    )
}

export default ItemList;