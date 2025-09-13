import { Button } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

const ItemTallesList = ({ data, handleDelete }) => {

    return (
        <div className="d-flex flex-wrap gap-2 mt-2" style={{ height: '30px' }}>
            {data.map((elem) => (
                <div key={elem.talle} className="d-flex justify-content-start align-items-center border rounded px-2 py-1 itemTalleList">
                    <span className="me-2"><b>{elem.talle}</b> ({elem.quantity})</span>
                    <Button
                        variant="dark"
                        className="p-0 d-flex align-items-center"
                        style={{ width: "15px", height: "15px" }}
                        onClick={() => handleDelete(elem.talle)}
                    >
                        <RxCross2 />
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default ItemTallesList;
