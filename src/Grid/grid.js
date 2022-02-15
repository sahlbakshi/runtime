import { fetchID } from "../fetch";

const Grid = (props) => {  
      
    const { data, option } = props;

    const card = (id) => {
        fetchID(id, option)
        .then(res => {
            const URL = `http://image.tmdb.org/t/p/w500/${res.poster_path}`
            console.log(URL);
            const date = res.release_date;
            const title = res.original_title;
            return (
                <div>
                    <img src={URL} alt=''></img>
                    <h2>{title}</h2>
                    <p>{date}</p>
                </div>
            )
        })
    }

    return (
        <ul>
            {card(data[0])}
            {data.map((id) => 
            <li key={id}>{card(id)}</li>)}
        </ul>
    );
}

export default Grid;
