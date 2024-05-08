const localStorageKey = "projects";
const localStorageIdKey = "projectId";

function saveToLocalStorage(projects, selectedProjectId) {
    localStorage.setItem(localStorageKey, JSON.stringify(projects));
    localStorage.setItem(localStorageIdKey, JSON.stringify(selectedProjectId));
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    return data;
}

function getIdFromLocalStorage() {
    const selectedProjectId = JSON.parse(localStorage.getItem(localStorageIdKey));
    return selectedProjectId;
}

function saveIncrementId(id) {
	localStorage.setItem('incrementId', JSON.stringify(id));
}

function getIncrementId() {
	const id = JSON.parse(localStorage.getItem('incrementId'));
	return id || 0;
}

export { saveToLocalStorage, getFromLocalStorage, getIdFromLocalStorage, saveIncrementId, getIncrementId };
