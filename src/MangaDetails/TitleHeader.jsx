const TitleHeader = (props)=> {

    const {
        className = "",
        children = "",
    } = props;
    return(
        <div>
            <h1 className={className}>{children}</h1>
        </div>
    );
}

export default TitleHeader;