import { useState } from "react";
import { fetchID } from "../fetch";

const Card = (props) => {
    
    const {id, option} = props;
    const [title, setTitle ] = useState();
    const [date, setDate ] = useState();
    const [path, setPath] = useState();

    const displayCard = () => {
        fetchID(id, option).then(res => {
            if (option === 'movie') {
                setTitle(res.original_title);
                setDate(res.release_date);
                setPath(`http://image.tmdb.org/t/p/w185/${res.poster_path}`);
            } else if (option === 'tv') {
                setTitle(res.original_name);
                setDate(res.first_air_date);
                setPath(`http://image.tmdb.org/t/p/w185/${res.poster_path}`);
            }
        })
        return (
            <div>
            <img src={path} alt="" style={{width: "200px"}}></img>
            <h4>{title}</h4>
            <p>{date}</p>
            </div>
        );
    } 

    return (

        <>{displayCard()}</>
    )
}

export default Card;