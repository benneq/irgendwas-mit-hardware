import { keywords } from './search-data';

export const filterKeywords = (input: string): string[] => {
    const result = keywords.filter(keyword => keyword.startsWith(input));
    return result;
};