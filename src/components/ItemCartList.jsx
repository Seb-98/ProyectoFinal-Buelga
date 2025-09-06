import ItemCart from "./ItemCart";

const ItemCartList = ({ dataCartList }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center ">
            {dataCartList.map((elem) => (
                <ItemCart key={elem.id} data={elem} />
            ))}
        </div>
    );
};

export default ItemCartList;
