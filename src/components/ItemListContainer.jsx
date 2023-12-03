

const ItemListContainer = ({greeting}) => {

    return(
        <div style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize: 24, width: "100vw", height: "50vh", textAlign: "center", padding: 25}}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;