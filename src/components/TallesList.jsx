import { Button } from "react-bootstrap";

const TallesList = ({data = [], select, selected}) => {

    return (
        <div className="d-flex justify-content-start mt-1 flex-wrap gap-3 mb-1">
            {data.map((item) => (
                 <Button variant={selected === item.talle ? "secondary" : "dark"} key={item.talle} onClick={() => select(item.talle)}>{item.talle}</Button>
            ))}

        </div>
    )
}

export default TallesList;