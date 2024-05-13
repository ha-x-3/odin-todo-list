const localStorageKey = 'projects';
const localStorageIdKey = 'projectId';

function saveToLocalStorage(projects, selectedProjectId) {
	localStorage.setItem(localStorageKey, JSON.stringify(projects));
	localStorage.setItem(localStorageIdKey, JSON.stringify(selectedProjectId));
}

function getFromLocalStorage() {
	const data = JSON.parse(localStorage.getItem(localStorageKey));
	return data;
}

function getIdFromLocalStorage() {
	const selectedProjectId = JSON.parse(
		localStorage.getItem(localStorageIdKey)
	);
	return selectedProjectId;
}

export { saveToLocalStorage, getFromLocalStorage, getIdFromLocalStorage };
