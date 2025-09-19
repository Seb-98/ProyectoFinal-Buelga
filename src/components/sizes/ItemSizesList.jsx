import { Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const ItemSizesList = ({ data, handleDelete, typeFlex }) => {

    return (
        <div className={`d-flex ${typeFlex} gap-2 mt-2`}>
            {data.map((elem) => (
                <div key={elem.size} className="d-flex  justify-content-start align-items-center border rounded px-2 py-1 itemSizeList">
                    <span className="me-2"><b>{elem.size}</b> ({elem.quantity})</span>
                    <Button
                        variant="dark"
                        className="p-0 d-flex align-items-center"
                        style={{ width: "15px", height: "15px" }}
                        onClick={() => handleDelete(elem.size)}
                    >
                        <RxCross2 />
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default ItemSizesList;
