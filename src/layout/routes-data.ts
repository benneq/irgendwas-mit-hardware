import { GRAPHICS_ROUTES } from "../graphics/graphics.routes"
import { HDD_ROUTES } from "../hdd/hdd.routes";
import { HOME_ROUTES } from "../home/home.routes";
import { MEMORY_ROUTES } from "../memory/memory.routes";
import { NETWORK_ROUTES } from "../network/network.routes";
import { PCIE_ROUTES } from "../pcie/pcie.routes";
import { USB_ROUTES } from "../usb/usb.routes";
import { FAN_ROUTES } from "../fan/fan.routes";

export const ROUTES = [FAN_ROUTES, GRAPHICS_ROUTES, HDD_ROUTES, HOME_ROUTES, MEMORY_ROUTES, NETWORK_ROUTES, PCIE_ROUTES, USB_ROUTES].reduce((curr, route) => {

    Object.entries(route).forEach(([_, value]) => {
        curr[value.path] = {
            title: value.title
        };
    });
    
    return curr;
}, {} as {[key: string]: any});