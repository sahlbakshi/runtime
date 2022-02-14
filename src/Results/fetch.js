// prob should have used useFetch from FreeCodeCamp React Video

const SAME = `https://api.themoviedb.org/3`
const KEY = process.env.REACT_APP_API_KEY;

// retuns promise with object
async function fetchID(id, option) {
    const URL = `${SAME}/${option}/${id}?api_key=${KEY}&language=en-US`;
    const response = await fetch(URL);
    const object = await response.json();
    return object;
}


// returns promise with array of ids
async function fetchArrayByPage(value, page, option) {
    const URL = `${SAME}/search/${option}?api_key=${KEY}&query=${value}&page=${page}&include_adult=false`;
    const response = await fetch(URL);
    const object = await response.json();
    const results = object.results;
    return results.map(result => result.id);
}

// returns promise with number
async function fetchTotalResults(value, option) {
    const URL = `${SAME}/search/${option}?api_key=${KEY}&query=${value}&include_adult=false`;
    const response = await fetch(URL);
    const object = await response.json();
    const length = object.total_results;
    return length;
}

// get config
async function fetchConfig() {
    const URL = `${SAME}/configuration?api_key=${KEY}`;
    const response = fetch(URL, {mode: 'cors'});
    const object = await response.json();
    console.log(object);

    //baseURL = `http://image.tmdb.org/t/p/`
    //width = w500
    //posterPath = 
}


export { fetchArrayByPage, fetchTotalResults, fetchID, fetchConfig }
