const CoverImg = (props) => {

    const {
        className = "",
        source = ""
    } = props;

    return (
        <>
            <img
            className={className}
                src={source}
                alt="" 
                />
        </>
    );
}


export default CoverImg;