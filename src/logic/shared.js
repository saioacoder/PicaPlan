import {
	getCollection,
	getDocumentById,
	removeDocument,
	addDocument,
} from '../services/data';

async function getList(listName) {
	return await getCollection(listName);
}

export async function reloadList(listName, setFunction) {
	const result = await getList(listName);
	setFunction(result);
}

export async function addItem(listName, item) {
	return await addDocument(listName, item);
}

export async function removeItem(listName, item) {
	return await removeDocument(listName, item);
}

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
