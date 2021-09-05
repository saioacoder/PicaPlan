import firebase from 'firebase/app';
import 'firebase/firestore';

export async function getCollection(collection) {
	try {
		const result = await firebase.firestore().collection(collection).get();
		const resultParsed = result.docs.map((doc) => parseDocument(doc));
		return resultParsed.length ? resultParsed : [];
	} catch (error) {
		console.log('getCollection Error:', error);
		return null;
	}
}

export async function addDocument(collection, document) {
	try {
		const result = await firebase
			.firestore()
			.collection(collection)
			.add(document);
		return result.id;
	} catch (error) {
		console.log('addDocument Error:', error);
		return null;
	}
}

export async function removeDocument(collection, id) {
	try {
		await firebase.firestore().collection(collection).doc(id).delete();
		return true;
	} catch (error) {
		console.log('removeDocument Error:', error);
		return false;
	}
}

export async function updateDocument(collection, id, change) {
	try {
		await firebase.firestore().collection(collection).doc(id).update(change);
		return true;
	} catch (error) {
		console.log('updateDocument Error: ', error);
		return false;
	}
}

function parseDocument(doc) {
	return {
		id: doc.id,
		...doc.data(),
	};
}
