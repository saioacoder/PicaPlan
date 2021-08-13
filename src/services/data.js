import firebase from 'firebase/app'
import 'firebase/firestore'

export async function getCollection(collection) {
	try {
		const allDocs = await firebase.firestore().collection(collection).get()
    	return allDocs.docs.map(doc => parseDocument(doc))
	} catch (error) {
		console.log("getCollection Error:", error)
		return null
	}
}

export async function addDocument(collection, document) {
	try {
		const result = await firebase.firestore().collection(collection).add(document)
		return result.id
	} catch (error) {
		console.log("addDocument Error:", error)
		return null
	}
}

export async function addDocumentWithId(collection, id, document) {
	try {
		await firebase.firestore().collection(collection).doc(id).set(document)
		return true
	} catch (error) {
		console.log("addDocumentWithId Error:", error)
		return false
	}
}

export async function updateDocumentWithId(collection, id, change) {
	try {
		await firebase.firestore().collection(collection).doc(id).update(change)
		return true
	} catch (error) {
		console.log("updateDocumentWithId Error: ", error)
		return false
	}
}

export async function getDocumentById(collection, id) {
	try {
		const doc = await firebase.firestore().collection(collection).doc(id).get()
		return doc.exists ? parseDocument(doc) : null
	} catch (error) {
		console.log("getDocumentById Error: ", error)
		return null
	}
}

export async function getDocumentsByConditions(collection, conditions) {
	try {
		let allDocs = firebase.firestore().collection(collection)
		conditions.forEach(({ field, condition, value }) => {
		 	allDocs = allDocs.where(field, condition, value)
		})
		allDocs = await allDocs.get()
		if(allDocs.docs.length > 0) {
			return {
				result: allDocs.docs.map(doc => parseDocument(doc)),
				error: false
			}
		} else {
			return {
				result: null,
				error: false
			}
		}
	} catch (error) {
		console.log("getDocumentsByConditions Error: ", error)
		return {
			result: null,
			error: true
		}
	}
}

export async function removeDocumentWithId(collection, id) {
	try {
		await firebase.firestore().collection(collection).doc(id).delete()
		return true
	} catch (error) {
		console.log("removeDocumentWithId Error:", error)
		return null
	}
}

function parseDocument(doc) {
	return {
		id: doc.id,
		...doc.data()
	}
}