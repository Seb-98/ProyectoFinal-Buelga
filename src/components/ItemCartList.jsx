import ItemCart from "./ItemCart";

const ItemCartList = ({ dataCartList }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center overflow-auto mx-2" style={{ height: '500px' }}>
            {dataCartList.map((elem) => (
                <ItemCart key={elem.id} data={elem} />
            ))}
        </div>
    );
};

export default ItemCartList;
