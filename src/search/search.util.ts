import { union } from "lodash-es";



export const createIndex = (...source: {[key: string]: string[]}[]): {[key: string]: string[]} => {
    return Object.assign({}, ...source);
}

export const extractKeywords = (index: {[key: string]: string[]}): string[] => {
    return union(...Object.values(index))
} 

export const generateReversedIndex = (index: {[key: string]: string[]}): {[key: string]: string[]} => {
    return Object.entries(index).reduce((curr, entry) => {
        const [key, value] = entry;
    
        value.forEach(elem => {
            const keyword = elem.toLowerCase();
            if(!curr[keyword]) {
                curr[keyword] = [key];
            } else {
                curr[keyword] = [...curr[keyword], key];
            }
        });
    
        return curr;
    }, {} as {[key: string]: string[]});
}

export const tokenizeQuery = (query: string): string[] => {
    return query.split(/ +/).map(token => token.toLowerCase());
}

export const filterIndex = (index: {[key: string]: string[]}, searchTokens: string[]) => {
    return Object.entries(index).filter(entry => {
        const [key] = entry;
        return searchTokens.some(token => key.startsWith(token));
    }).reduce((curr, entry) => {
        const [token, urls] = entry;

        urls.forEach(url => {
            if(!curr[url]) {
                curr[url] = [token];
            } else {
                curr[url] = [...curr[url], token];
            }
        });

        return curr;
    }, {} as {[key: string]: string[]});
}

export const sortResults = (results: {[key: string]: string[]}) => {
    return Object.entries(results).map(([url, tokens]) => {
        return {
            url: url,
            tokens: tokens
        }
    }).sort((a, b) => b.tokens.length - a.tokens.length);
}