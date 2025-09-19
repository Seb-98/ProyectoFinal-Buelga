import { Form } from "react-bootstrap";

const InputsCheckout = ({ registerForm, errorsForm }) => {
    return (
        <div>
            <Form.Label className="mb-0 fw-bold">Nombre</Form.Label> <span className="text-danger">*</span>
            <Form.Control className={`form-control ${errorsForm?.name ? 'border border-danger' : ''}`} placeholder="Nombre"  {...registerForm("name", { required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })}></Form.Control>
            {errorsForm?.name?.type === "pattern" && <p className="text-danger m-0">Solo se permiten letras</p>}

            <Form.Label className="mb-0 fw-bold mt-3">Apellido</Form.Label> <span className="text-danger">*</span>
            <Form.Control className={`form-control ${errorsForm?.lastName ? 'border border-danger' : ''}`} placeholder="Apellido" {...registerForm("lastName", { required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })}></Form.Control>
            {errorsForm?.lastName?.type === "pattern" && <p className="text-danger m-0">Solo se permiten letras</p>}

            <Form.Label className="mb-0 fw-bold mt-3">Telefono</Form.Label> <span className="text-danger">*</span>
            <Form.Control className={`form-control ${errorsForm?.phone ? 'border border-danger' : ''}`} placeholder="Telefono" {...registerForm("phone", { required: true, minLength: 8, pattern: /^[0-9]+$/ })}></Form.Control>
            {errorsForm?.phone?.type === "minLength" && <p className="text-danger m-0">El telefono debe contener al menos 8 caracteres</p>}
            {errorsForm?.phone?.type === "pattern" && <p className="text-danger m-0">Solo se permiten numeros</p>}

            <Form.Label className="mb-0 fw-bold mt-3">Email</Form.Label> <span className="text-danger">*</span>
            <Form.Control className={`form-control ${errorsForm?.email ? 'border border-danger' : ''}`} placeholder="Email" {...registerForm("email", { required: true, minLength: 2, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}></Form.Control>
            {errorsForm?.email?.type === "pattern" && <p className="text-danger m-0">Ingrese un mail valido</p>}

            <Form.Label className="mb-0 fw-bold mt-3">Direccion</Form.Label> <span className="text-danger">*</span>
            <Form.Control className={`form-control ${errorsForm?.direction ? 'border border-danger' : ''}`} placeholder="Direccion" {...registerForm("direction", { required: true, minLength: 2, pattern: /^(?=.*[A-Za-zÀ-ÿ])(?=.*\d)[A-Za-zÀ-ÿ0-9\s.,#-]+$/ })}></Form.Control>
            {errorsForm?.direction?.type === "pattern" && <p className="text-danger m-0">La direccion debe contener numeros y letras</p>}

            <span className="text-danger">*</span><span className="small text-muted">Datos obligatorios</span>
        </div>
    )
}

export default InputsCheckout;