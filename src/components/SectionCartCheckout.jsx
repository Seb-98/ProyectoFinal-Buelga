import ItemCartCheckout from "./ItemCartCheckout";

const SectionCartCheckout = ({ dataCart }) => {
    return (
        <div className="overflow-y-auto mx-2 mt-2" style={{ maxHeight: "500px" }}>
            {dataCart.map((elem) => (
                <ItemCartCheckout data={elem} key={"itemCart" + elem.id} />
            ))}
        </div>
    );
};

export default SectionCartCheckout;
