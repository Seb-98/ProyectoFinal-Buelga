import { Button } from "react-bootstrap";

const SizesList = ({data = [], select, selected}) => {

    return (
        <div className="d-flex justify-content-start mt-1 flex-wrap gap-3 mb-1">
            {data.map((item) => (
                 <Button variant={selected === item.size ? "secondary" : "dark"} key={item.size} onClick={() => select(item.size)}>{item.size}</Button>
            ))}

        </div>
    )
}

export default SizesList;