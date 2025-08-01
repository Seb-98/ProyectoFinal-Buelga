const CommonButton = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        color: props.color
    }

    return (
        <button onClick={props.onClick} style={styles}>
            {props.text}
        </button>
    )
}

export default CommonButton;