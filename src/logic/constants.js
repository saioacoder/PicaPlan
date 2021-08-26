import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faAngleRight,
	faEllipsisV,
	faPen,
	faTrashAlt,
	faBars,
	faTimes,
	faCarrot,
} from '@fortawesome/free-solid-svg-icons';
export const I_ADD = <FontAwesomeIcon icon={faPlus} />;
export const I_CLOSE = <FontAwesomeIcon icon={faTimes} />;
export const I_EDIT = <FontAwesomeIcon icon={faPen} />;
export const I_LOGO = <FontAwesomeIcon icon={faCarrot} />;
export const I_MENU = <FontAwesomeIcon icon={faBars} />;
export const I_REMOVE = <FontAwesomeIcon icon={faTrashAlt} />;
export const I_SUBMENU = <FontAwesomeIcon icon={faEllipsisV} />;
export const I_SUBMENU_CLOSE = <FontAwesomeIcon icon={faAngleRight} />;

export const DAYS_NAME = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

export const FOODMAP_LEVEL = [
	{ id: '0', name: 'No tiene' },
	{ id: '1', name: 'Bajo' },
	{ id: '2', name: 'Medio' },
	{ id: '3', name: 'Alto' },
];
