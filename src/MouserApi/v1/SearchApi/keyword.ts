import { KeywordSearchOptions, SearchResponseRoot } from './api-types';
import { BASE_URL, SEARCH_KEYWORD_ENDPOINT } from '../..';

import fetch from 'node-fetch';

export async function searchByKeyword(
    options: KeywordSearchOptions,
): Promise<SearchResponseRoot> {
    const url = new URL(BASE_URL + SEARCH_KEYWORD_ENDPOINT);

    url.searchParams.set('apikey', options.apiKey);

    const body = {
        SearchByKeywordRequest: {
            keyword: options.keyword,
            records: options.records || 0,
            startingRecord: options.startingRecord || 0,
            searchOptions: options.searchOptions || 'None',
            searchWithYourSignUpLanguage:
                options.searchWithYourSignUpLanguage || false,
        },
    };

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });

    return await response.json();
}
