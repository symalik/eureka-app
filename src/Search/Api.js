import axios from 'axios';

const baseUrl = `https://localhost:44375/api/cards?`;

export const getApiData = async (title) => {
    try {
        const {data} = await axios.get(baseUrl + `Title=${title}`);
        return data
    } catch(err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`)
        }
    }
}