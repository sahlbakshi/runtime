import fetchResults from './fetch'

import { useEffect, useState } from "react";

const Results = (props) => {
    const { term } = props;
    const options = ['Movies', 'TV Shows']
    const [ option, setOption ] = useState(options[0]); 

    return (
        <div className="results-container">
            <ul className='categories'>
                <li>Movies<span>{2}</span></li>
                <li>TV Shows<span>{2}</span></li>
            </ul>
            <div className="results">
            </div>
        </div>
    );
}

export default Results;


/*
 {results.map(result, index) => {
                    return <img key={index} link={link} handleClick={handleClick}></Card>
                })}
                */

// MAKE TWO CLASSES FOR MOVIES 
//1. FOR THE PAGE itself 
// 2. FOR WHEN VEWING