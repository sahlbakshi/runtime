const KEY = process.env.REACT_APP_API_KEY;

async function fetchID(id, option) {
    const URL = `https://api.themoviedb.org/3/${option}/${id}?api_key=${KEY}&language=en-US`;
    const response = await fetch(URL);
    const object = await response.json();
    return object;
}

async function fetchArrayByPage(value, page, option) {
    const URL = `https://api.themoviedb.org/3/search/${option}?api_key=${KEY}&query=${value}&page=${page}&include_adult=false`;
    const response = await fetch(URL);
    const object = await response.json();
    const results = object.results;
    return results.map(result => result.id);
}

async function fetchTotalResults(value) {
    let i = 0;
    let arrlen = [];
    let option = 'movie';
    while (i < 2) {
        if (i === 1) option = 'tv';
        const URL = `https://api.themoviedb.org/3/search/${option}?api_key=${KEY}&query=${value}&include_adult=false`;
        const response = await fetch(URL);
        const object = await response.json();
        const length = object.total_results;
        arrlen.push(length);
    }
    return arrlen;
}

export { fetchArrayByPage, fetchTotalResults, fetchID }
