import { Button } from "react-bootstrap";

const TallesList = ({data = [], select}) => {

    return (
        <div className="d-flex justify-content-center justify-content-md-start mt-3 flex-wrap gap-3 mb-3">
            {data.map((item) => (
                 <Button className='btn btn-dark' key={item.talle} onClick={() => select(item.talle)}>{item.talle}</Button>
            ))}

        </div>
    )
}

export default TallesList;