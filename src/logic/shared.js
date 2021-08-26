import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	getCollection,
	getDocumentById,
	removeDocument,
	addDocument,
} from '../services/data';

async function getList(listName) {
	return await getCollection(listName);
}

export async function reloadList(listName, sortParam, setFunction) {
	const result = await getList(listName);
	const resultSorted = result.sort((a, b) => {
		return a[sortParam].localeCompare(b[sortParam]);
	});
	setFunction(resultSorted);
}

export async function addItem(listName, item) {
	return await addDocument(listName, item);
}

export async function removeItem(listName, item) {
	return await removeDocument(listName, item);
}

export const showColor = (color, content) => {
	const styles = { color };
	return <span style={styles}>{content}</span>;
};

export const getIcon = (icon) => {
	return <FontAwesomeIcon icon={icon} />;
};

//
async function getListItem(listName, id) {
	try {
		const data = await getDocumentById(listName, id);
		return data ? data : [];
	} catch (error) {
		console.log('getListItem Error:', error);
		return [];
	}
}

export const loadList = async (listName, updateFunction) => {
	const result = await getList(listName);
	updateFunction(result ? result : []);
};

export const loadItem = async (listName, id, updateFunction) => {
	const result = await getListItem(listName, id);
	updateFunction(result ? result : {});
};
