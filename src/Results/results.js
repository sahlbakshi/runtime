import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArrayByPage } from "../fetch";
import Card from '../Card/card' 
import './results.scss'

const Results = () => {

    //mPages
    //tPages
    //mAmt
    //tAmt

    let { value } = useParams();
    const options = ['movie', 'tv'];
    let [ option, setOption ] = useState(options[0]);
    let [ page, setPage ] = useState(1);
    let [ result, setResult ] = useState([]);

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
        fetchArrayByPage(value, page, option).then(res => {setResult(res)});
    }, [value])

    console.log(result);

    return (
        <div className="results-container">
            <div>
                <ul className='categories'>
                    <button onClick={handleMovieClick}>Movies<span>{0}</span></button>
                    <button onClick={handleTVShowClick}>TV Shows<span>{0}</span></button>
                </ul>
            </div>
            <div className='results-list'>
                {result.map((result, index) => {
                    return <Card key={index} id={result} option={option}></Card>
                })}
            </div>
            <div className='pages'>
            </div>
        </div>
    );
}

export default Results;