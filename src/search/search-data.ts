import { HDD_SEARCH_INDEX } from '../hdd/hdd.search';
import { MEMORY_SEARCH_INDEX } from '../memory/memory.search';
import { createIndex, extractKeywords, generateReversedIndex } from './search.util';
import { NETWORK_SEARCH_INDEX } from '../network/network.search';
import { PCIE_SEARCH_INDEX } from '../pcie/pcie.search';
import { USB_SEARCH_INDEX } from '../usb/usb.search';
import { GRAPHICS_SEARCH_INDEX } from '../graphics/graphics.search';
import { FAN_SEARCH_INDEX } from '../fan/fan.search';

export const SEARCH_INDEX = createIndex(
    FAN_SEARCH_INDEX,
    GRAPHICS_SEARCH_INDEX,
    HDD_SEARCH_INDEX,
    MEMORY_SEARCH_INDEX,
    NETWORK_SEARCH_INDEX,
    PCIE_SEARCH_INDEX,
    USB_SEARCH_INDEX
);

export const KEYWORDS = extractKeywords(SEARCH_INDEX);

export const REVERSED_INDEX = generateReversedIndex(SEARCH_INDEX);