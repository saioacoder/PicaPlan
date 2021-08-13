import { getCollection } from '../services/data'

async function getList(name) {
	try {
		const data = await getCollection(name)
		return data ? data : null
	} catch (error) {
		console.log("getList Error:", error)
		return null
	}
}

export const loadList = async (listName, updateFunction) => {
	const result = await getList(listName)
	result && updateFunction(result)
}