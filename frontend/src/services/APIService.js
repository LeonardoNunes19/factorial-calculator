const FACTORIAL_REST_API = 'http://localhost:8080/api/fatorial'

const requestOptions = (number) => {
    return ({
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "id": Math.floor((Math.random() * 1000) + 1),
            "number": number
        })
    })
}

class APIService {
    async postNumber(number) {
        const response = await fetch(FACTORIAL_REST_API, requestOptions(number))
        const data = await response.json();
        return data
    }
}

export default new APIService();