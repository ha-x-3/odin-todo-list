const localStorageKey = "projects";
const localStorageIdKey = "projectId";

function saveToLocalStorage(projects, selectedProjectId) {
	localStorage.setItem(localStorageKey, JSON.stringify(projects));
	if (selectedProjectId !== null && selectedProjectId !== undefined) {
		localStorage.setItem(localStorageIdKey, selectedProjectId);
	} else {
		localStorage.removeItem(localStorageIdKey);
	}
}

function getFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(localStorageKey));
    return data || [];
}

function getIdFromLocalStorage() {
	const selectedProjectId = localStorage.getItem(localStorageIdKey);
	return selectedProjectId ? parseInt(selectedProjectId) : null;
}

export { saveToLocalStorage, getFromLocalStorage, getIdFromLocalStorage };
