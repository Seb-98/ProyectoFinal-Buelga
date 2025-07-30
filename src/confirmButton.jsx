const ConfirmButton = ({ text, onClick }) => {

    return (
        <button onClick={onClick} style={{ backgroundColor: 'green' }}>
            {text}
        </button>
    )
}

export default ConfirmButton;