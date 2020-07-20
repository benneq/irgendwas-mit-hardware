import { NETWORK_ROUTES } from './network.routes';

export const NETWORK_SEARCH_INDEX = {
    [NETWORK_ROUTES.index.path]: ['network', 'Netzwerk'],
    [NETWORK_ROUTES.cable.path]: ['network', 'Netzwerk', 'Netzwerkkabel', 'CAT'],
    [NETWORK_ROUTES.wifi.path]: ['network', 'Netzwerk', 'Wi-Fi', 'WLAN'],
}