import { NetworkCableCategory } from "../model/network-cable-category.model";

export const networkCableCategoryOf = (name: string, bandwidth: string, transferRates: string[], shielding: string, notes: string): NetworkCableCategory => {
    return { name, bandwidth, transferRates, shielding, notes };
};