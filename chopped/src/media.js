import "./media.css";

const Media = (props) => {
    const _handleClick = () => {
        console.log("Test Test");
    }

    return(
        <div className="container">
            <img src={props.source} alt={props.alt} width={props.width} height={props.height} className="image"/>
            <div className="middle">
                <button onClick={_handleClick} className="text"/>
            </div>
        </div>
    );
}

export default Media;