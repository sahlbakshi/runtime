import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArrayByPage } from "../fetch";

const Results = () => {

    let { value } = useParams();
    const options = ['movie', 'tv'];
    let [ option, setOption ] = useState(options[0]);
    let [ result, setResult ] = useState();
    let [ page, setPage ] = useState(1);
    
    //mPages
    //tPages
    //mAmt
    //tAmt

    const handleMovieClick = () => {
        console.log(value);
        fetchArrayByPage(value, page, 'movie').then(res => {
            setResult(res);
            setOption('movie');
        });
    }

    const handleTVShowClick = () => {
        fetchArrayByPage(value, page, 'tv').then(res => {
            setResult(res);
            setOption('tv');
        });
    }

    useEffect(() => {
        fetchArrayByPage(value, page, option).then(res => setResult(res))
    }, [value])
    
    console.log(value);
    console.log(result);

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