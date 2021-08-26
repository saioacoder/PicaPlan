import { getIcon } from './shared';
import {
	faAngleRight,
	faAppleAlt,
	faBars,
	faBreadSlice,
	faCarrot,
	faCheese,
	faDrumstickBite,
	faEllipsisV,
	faFish,
	faIceCream,
	faLeaf,
	faPen,
	faPlus,
	faTimes,
	faTint,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
export const I_ADD = getIcon(faPlus);
export const I_CLOSE = getIcon(faTimes);
export const I_EDIT = getIcon(faPen);
export const I_LOGO = getIcon(faCarrot);
export const I_MENU = getIcon(faBars);
export const I_REMOVE = getIcon(faTrashAlt);
export const I_SUBMENU = getIcon(faEllipsisV);
export const I_SUBMENU_CLOSE = getIcon(faAngleRight);
export const I_FOOD = [
	getIcon(faTint),
	getIcon(faFish),
	getIcon(faDrumstickBite),
	getIcon(faCarrot),
	getIcon(faAppleAlt),
	getIcon(faCheese),
	getIcon(faIceCream),
	getIcon(faLeaf),
	getIcon(faBreadSlice),
];

export const DAYS_NAME = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export const FOODMAP_LEVEL = [
	{ id: '0', name: 'No tiene' },
	{ id: '1', name: 'Bajo' },
	{ id: '2', name: 'Medio' },
	{ id: '3', name: 'Alto' },
];
