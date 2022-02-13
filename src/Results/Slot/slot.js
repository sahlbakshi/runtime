const Slot = (props) => {

    // handle click method

    const {imgLink, title, date} = props;
    return (
        <div>
            <img src={imgLink} style={{width: "100px"}} alt=''/>
            <h2>{title}</h2>
            <p>{date}</p>
        </div>
    )
}

export default Slot;