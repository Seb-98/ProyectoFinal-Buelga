import { Button } from "react-bootstrap";

const ItemTallesList = ({ data, handleDelete }) => {


    return (
        <div className="d-flex flex-wrap gap-2 mt-2">
            {data.map((elem) => (
                <div key={elem.talle} className="d-flex align-items-center border border-dark rounded px-2 py-1">
                    <span className="me-2">Talle <b>{elem.talle}</b> ({elem.quantity})</span>
                    <Button
                        variant="danger"
                        className="p-0 d-flex align-items-center justify-content-center"
                        style={{ width: "20px", height: "20px" }}
                        onClick={() => handleDelete(elem.talle)}
                    >X
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default ItemTallesList;
