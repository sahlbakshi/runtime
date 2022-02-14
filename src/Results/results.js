import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArrayByPage } from "../fetch";

const Results = () => {

    let { value } = useParams();
    const options = ['movie', 'tv'];
    let [ option, setOption ] = useState(options[0]);
    let [ result, setResult ] = useState([]);
    let [ page, setPage ] = useState(1);

    const handleMovieClick = () => {setOption('movie')}
    const handleTVShowClick = () => {setOption('tv')}
    
    // FIX THE FETCH FUNCTIONS
    // TO HANDLE REQUEST FAILED N ERROR 404 CANT FIND
    useEffect(() => {
        fetchArrayByPage(value, page, option).then(res => setResult(res))
    }, [page, option, value])

    console.log(result);
    console.log(value);

    // HAVE TO PUT PAGE FUNCTION YET
    return (
        <div className="results-container">
            <div>
                <ul className='categories'>
                    <button onClick={handleMovieClick}>Movies<span>{0}</span></button>
                    <button onClick={handleTVShowClick}>TV Shows<span>{0}</span></button>
                </ul>
            </div>
            <div>
                <div className='results-list'>
                    {/*<Grid data={result} option={option}></Grid>*/}
                </div>

                <div className='pages'>

                </div>
            </div>
        </div>
    );
}

export default Results;