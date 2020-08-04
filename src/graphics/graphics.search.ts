import { GRAPHICS_ROUTES } from './graphics.routes';

export const GRAPHICS_SEARCH_INDEX = {
    [GRAPHICS_ROUTES.index.path]: ['Grafik', 'graphics', 'display', 'Monitor', 'Bildschirm'],
    [GRAPHICS_ROUTES.displayStandards.path]: ['Grafik', 'graphics', 'display', 'Monitor', 'Bildschirm'],
    [GRAPHICS_ROUTES.displayInterfaces.path]: ['Grafik', 'graphics', 'display', 'Monitor', 'Bildschirm', 'HDMI', 'DisplayPort'],
    [GRAPHICS_ROUTES.displaySynchronization.path]: ['double buffering', 'triple buffering', 'quad buffering', 'VSync', 'vertical synchronization', 'Vertikale Synchronisation', 'render ahead', 'flip queue', 'Fast Sync', 'Enhanced Sync', 'G-Sync', 'Adaptive-Sync', 'FreeSync', 'VRR', 'variable refresh rate'],
}