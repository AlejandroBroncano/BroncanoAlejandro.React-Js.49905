const ItemListContainer = ({greeting}) => {

    return(
        <div style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize: 18, width: "100vw", height: "50vh", textAlign: "center"}}>
            {greeting}
        </div>
    )
}

export default ItemListContainer;