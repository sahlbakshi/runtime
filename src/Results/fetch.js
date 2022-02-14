// prob should have used useFetch from FreeCodeCamp React Video

const SAME = `https://api.themoviedb.org/3`

// retuns promise with object
async function fetchID(id, option) {
    const KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/${option}/${id}?api_key=${KEY}&language=en-US`;
    const response = await fetch(URL);
    const object = await response.json();
    return object;
}


// returns promise with array of ids
async function fetchArrayByPage(value, page, option) {
    const KEY = process.env.REACT_APP_API_KEY;
    const URL = `${SAME}/search/${option}?api_key=${KEY}&query=${value}&page=${page}&include_adult=false`;
    const response = await fetch(URL);
    const object = await response.json();
    const results = object.results;
    return results.map(result => result.id);
}

// returns promise with number
async function fetchTotalResults(value, option) {
    const KEY = process.env.REACT_APP_API_KEY;
    const URL = `${SAME}/search/${option}?api_key=${KEY}&query=${value}&include_adult=false`;
    const response = await fetch(URL)
    const object = await response.json();
    const length = object.total_results;
    return length;
}

export { fetchArrayByPage, fetchTotalResults, fetchID }