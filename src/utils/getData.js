const API = 'https://rickandmortyapi.com/api/character/'


const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API
    try {
        const respose = await fetch(apiURL)
        const json = await respose.json()
        return json
    } catch (error) {
        console.log('Fetch Error', error)
    }
}

export default getData