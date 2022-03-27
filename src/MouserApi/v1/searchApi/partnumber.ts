import fetch from 'node-fetch'

const ENDPOINT = '/api/v1/search/partnumber';

export async function searchByPatnumber(partnumber: string, apiKey: string) {
    const url = new URL(BASE_URL + ENDPOINT);

    url.searchParams.set('apikey', apiKey)

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "SearchByPartRequest": {
                "mouserPartNumber": partnumber.trim()
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    data.SearchResults.NumberOfResult
}