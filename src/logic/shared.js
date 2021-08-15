import { getCollection, getDocumentById } from '../services/data';

async function getList(name) {
	try {
		const data = await getCollection(name);
		return data ? data : [];
	} catch (error) {
		console.log('getList Error:', error);
		return [];
	}
}

async function getListItem(name, id) {
	try {
		const data = await getDocumentById(name, id);
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

export const loadItem = async (name, id, updateFunction) => {
	const result = await getListItem(name, id);
	updateFunction(result ? result : {});
};
