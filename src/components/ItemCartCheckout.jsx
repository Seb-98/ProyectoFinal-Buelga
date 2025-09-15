import { Row, Col, Image } from "react-bootstrap";

const ItemCartCheckout = ({ data }) => {
    const totalQuantity = data.selectStock.reduce((acumulador, item) => acumulador + item.quantity, 0)

    const haveDesc = data.oferta;
    const unitInitialPrice = data.precio;
    const unitFinalPrice = haveDesc ? data.precio * data.porcDesc : unitInitialPrice;
    const initialPrice = data.precio * totalQuantity;
    const finalPrice = haveDesc ? initialPrice * data.porcDesc : initialPrice;



    return (
        <Row className="border rounded mb-2 p-1 g-0 align-items-center" key={data.id} style={{ minHeight: "115px" }} >
            <Col xs={4} className="d-flex justify-content-start">
                <Image src={data.img} alt={data.nombre} fluid rounded className="img-fluid object-fit-contain" style={{ maxHeight: "100px" }}
                />
            </Col>

            <Col className="d-flex flex-column justify-content-start align-items-center">
                <p className="fw-bold mb-1">{data.nombre}</p>
                {data.selectStock.map((item) => (
                    <div key={`${data.id}-${item.talle}`} className="small">
                        <span>Talle </span>
                        <span className="fw-bold">{item.talle} </span>
                        <span>({item.quantity})</span>
                    </div>
                ))}
            </Col>

            <Col className="d-flex flex-column justify-content-center align-items-center">
                {haveDesc && (
                    <span className="text-decoration-line-through text-muted p-0 m-0 small">
                        ${unitInitialPrice}
                    </span>
                )}
                <span className="p-0 m-0 mb-1 text-muted small">
                    ${unitFinalPrice}
                </span>

                {haveDesc && (
                    <span className="text-decoration-line-through p-0 m-0">
                        ${initialPrice}
                    </span>
                )}
                <span className={haveDesc ? "text-danger p-0 m-0" : "p-0 m-0"}>
                    ${finalPrice}
                </span>

            </Col>

        </Row>
    )
}

export default ItemCartCheckout;