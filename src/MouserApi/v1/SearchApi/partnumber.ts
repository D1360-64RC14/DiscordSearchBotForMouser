import { PartnumberSearchOptions, SearchResponseRoot } from './api-types';
import { BASE_URL, SEARCH_PARTNUMBER_ENDPOINT } from '../..';

import fetch from 'node-fetch';

export async function searchByPatnumber(
    options: PartnumberSearchOptions,
): Promise<SearchResponseRoot> {
    const url = new URL(BASE_URL + SEARCH_PARTNUMBER_ENDPOINT);

    url.searchParams.set('apikey', options.apiKey);

    const body = {
        SearchByPartRequest: {
            mouserPartNumber: options.mouserPartNumber.trim(),
            partSearchOptions: options.partSearchOptions || 'None',
        },
    };

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
}
