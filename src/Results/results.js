import Card from './Card'
import { fetchArrayByPage, fetchTotalResults, fetchID } from './fetch'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Results = (props) => {

    // HANDLE EMPTY VALUE
    // CLEANUP FOR USE EFFECTS
    // IGNORE INITIAL RENDER?
    // LOADING SYMBOL WHEN GETTING DATA 
    // MORE IMP ERROR 404
    // FETCHING WHEN IT SHOULD NOT BE

    //const perPage = 20;
    //const [ mAmt, setMAmt ] = useState(0);
    //const [ tAmt, setTAmt ] = useState(0);

    //const handlePageClick = (event) => {setPage(event.target.value)}
    //const handleNextClick = () => {setPage(page + 1)}
    //const handlePrevClick = () => {setPage(page - 1)}

    //fetchTotalResults(value, options[0]).then(res => setMAmt(res));
    //fetchTotalResults(value, options[1]).then(res => setTAmt(res));

    const { value } = useParams(); // from router - see how useParams work
    const options = ['movie', 'tv']; 
    const [ page, setPage ] = useState(1);
    const [ option, setOption ] = useState(options[0]);
    const [ array, setArray ] = useState([]);

    const handleMovieClick = () => {}
    const handleTVShowClick = () => {}

    console.log(value);
    console.log(array);

    return (
        <div className="results-container">
            <div>
                <ul className='categories'>
                    <button onClick={handleMovieClick}>Movies<span>{0}</span></button>
                    <button onClick={handleTVShowClick}>TV Shows<span>{0}</span></button>
                </ul>
            </div>
            {
            <div>
                <div className='results-list'>
                    {array.map((arr, index) => {
                        return <Card key={index} id={arr} option={option}></Card>})}
                </div>

                <div className='pages'>

                </div>
            </div>
            }
        </div>
    );
}

export default Results;