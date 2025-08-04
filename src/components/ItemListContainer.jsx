const ItemListContainer = (props) => {

    const styles = {
        'backgroundColor' : props.backgroundColor,
        'color' : props.color,
        'padding' : props.padding,
        'margin' : props.margin,
        'width' : props.width,
        'height' : props.height,
        'display': 'flex',
        'alignItems' : 'center',
        'justifyContent' : 'center'
    }

    return (
        <div style={styles}>
            <h5>{props.text}</h5>
        </div>
    )
}

export default ItemListContainer;