import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export const getIcon = (icon) => {
	return <FontAwesomeIcon icon={icon} />;
};

export const I_ADD = getIcon(faPlus);
export const I_CLOSE = getIcon(faTimes);
export const I_EDIT = getIcon(faPen);
export const I_LOGO = getIcon(faCarrot);
export const I_MENU = getIcon(faBars);
export const I_REMOVE = getIcon(faTrashAlt);
export const I_SUBMENU = getIcon(faEllipsisV);
export const I_SUBMENU_CLOSE = getIcon(faAngleRight);

export const I_FOOD = [
	{ id: 'Tint', icon: getIcon(faTint) },
	{ id: 'Fish', icon: getIcon(faFish) },
	{ id: 'DrumstickBite', icon: getIcon(faDrumstickBite) },
	{ id: 'Carrot', icon: getIcon(faCarrot) },
	{ id: 'AppleAlt', icon: getIcon(faAppleAlt) },
	{ id: 'Cheese', icon: getIcon(faCheese) },
	{ id: 'IceCream', icon: getIcon(faIceCream) },
	{ id: 'Leaf', icon: getIcon(faLeaf) },
	{ id: 'BreadSlice', icon: getIcon(faBreadSlice) },
];

export const MONTHS = [
	'Ene',
	'Feb',
	'Mar',
	'Abr',
	'May',
	'Jun',
	'Jul',
	'Ago',
	'Sep',
	'Oct',
	'Nov',
	'Dic',
];
export const DAYS_NAME = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export const FOODMAP_LEVEL = [
	{ id: '0', name: 'No tiene' },
	{ id: '1', name: 'Bajo' },
	{ id: '2', name: 'Medio' },
	{ id: '3', name: 'Alto' },
];
