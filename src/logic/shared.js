import { I_FOOD } from './constants';

import {
	getCollection,
	updateDocument,
	removeDocument,
	addDocument,
} from '../services/data';

async function getList(listName) {
	return await getCollection(listName);
}

export async function reloadList(listName, sortParam, setFunction) {
	const result = await getList(listName);
	const resultSorted = result.sort((a, b) => {
		return a[sortParam].toString().localeCompare(b[sortParam].toString());
	});
	setFunction(resultSorted);
}

export async function addItem(listName, item) {
	return await addDocument(listName, item);
}

export async function updateItem(listName, id, item) {
	return await updateDocument(listName, id, item);
}

export async function removeItem(listName, id) {
	await removeDocument(listName, id);
}

export const showColor = (color, content) => {
	const styles = { color };
	return <span style={styles}>{content}</span>;
};

export const getFoodIcon = (id, background) => {
	const styles = { background };
	const { icon } = I_FOOD.find((item) => item.id === id);
	return <span style={styles}>{icon}</span>;
};

export const handleLoadEditData = (
	id,
	data,
	setIsFormOpen,
	setIsEdit,
	setId,
	setFormData
) => {
	setIsFormOpen(true);
	setIsEdit(true);
	setId(id);
	setFormData(data);
};
