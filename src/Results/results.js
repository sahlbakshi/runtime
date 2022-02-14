import Card from './Card'
import { fetchArrayByPage, fetchTotalResults } from './fetch'
import { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router-dom';

const Results = () => {

    // HANDLE EMPTY VALUE
    // CLEANUP FOR USE EFFECTS
    // IGNORE INITIAL RENDER?
    // LOADING SYMBOL WHEN GETTING DATA 
    // MORE IMP ERROR 404

    const perPage = 20;
    const options = ['movie', 'tv']; // useMemo
    const { value } = useParams(); // from router - see how useParams work
    const [ page, setPage ] = useState(1);
    const [ option, setOption ] = useState(options[0]);
    const [ array, setArray ] = useState([]);
    const [ mAmt, setMAmt ] = useState(0);
    const [ tAmt, setTAmt ] = useState(0);

    const handleMovieClick = () => {setOption('movie');}
    const handleTVShowClick = () => {setOption('tv')}
    /*
    const handlePageClick = (event) => {setPage(event.target.value)}
    const handleNextClick = () => {setPage(page + 1)}
    const handlePrevClick = () => {setPage(page - 1)}
    */

    useEffect(() => {
        fetchTotalResults(value, options[0]).then(res => setMAmt(res));
        fetchTotalResults(value, options[1]).then(res => setTAmt(res));
    }, [value])

    useEffect(() => {
        fetchArrayByPage(value, page, option).then(res => setArray(res));
    }, [value, page, option])

    return (
        <div className="results-container">
            <div>
                <ul className='categories'>
                    <button onClick={handleMovieClick}>Movies<span>{mAmt}</span></button>
                    <button onClick={handleTVShowClick}>TV Shows<span>{tAmt}</span></button>
                </ul>
            </div>
            {
            <div>
                <div className='results-list'>
                    {array.map((arrId, index) => {
                        return <Card key={index} id={arrId} option={option}></Card>})}
                </div>

                <div className='pages'>

                </div>
            </div>
            }
        </div>
    );
}

export default Results;