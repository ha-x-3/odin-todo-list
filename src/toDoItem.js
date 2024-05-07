import { projects, getProject, getProjectIndex } from "./project";
import { saveToLocalStorage } from "./localStorage";

incrementId = (function () {
		let id = 0;
		return function () {
			id++;
			return id;
		};
	})();

const ToDoItem = (projectId, name, description, date, priority) => {

	let id = incrementId();
    let complete = false;
    return {
        id,
        projectId,
        name,
        description,
        date,
        priority,
        complete,
    };
};

const createToDoItem = (projectId, name, description, date, priority) => {
    const project = getProject(projectId);
    const toDoItem = ToDoItem(projectId, name, description, date, priority);
    project.toDoItems.push(toDoItem);
    saveToLocalStorage(projects, projectId);
};

const editToDoItem = (
    projectId,
    toDoItemId,
    newName,
    newDescription,
    newDate,
    newPriority
) => {
    const toDoItem = getProject(projectId, toDoItemId);

    toDoItem.name = newName;
    toDoItem.description = newDescription;
    toDoItem.date = newDate;
    toDoItem.priority = newPriority;

    saveToLocalStorage(projects, projectId);
};

const deleteToDoItem = (projectId, toDoItemId) => {
    const project = getProject(projectId);
    const toDoItemIndex = getProjectIndex(projectId, toDoItemId);
    project.toDoItems.splice(toDoItemIndex, 1);
    saveToLocalStorage(projects, projectId);
};

const markComplete = (projectId, toDoItemId) => {
    const project = getProject(projectId);
    const toDoItem = getProject(projectId, toDoItemId);
    const toDoItemIndex = getProjectIndex(projectId, toDoItemId);
    project.completed.unshift(toDoItem);
    project.toDoItems.splice(toDoItemIndex, 1);
    saveToLocalStorage(projects, projectId);
};

const getToDoItem = (projectId, toDoItemId) => {
    const project = getProject(projectId);
    for (const key in project) {
        if (key === "toDoItems") {
            const toDoItem = project[key].find((toDoItem) => toDoItem.id === toDoItemId);
            if (toDoItem) return toDoItem;
        }
    }
};

const getToDoItemIndex = (projectId, toDoItemId) => {
    const project = getProject(projectId);
    for (let key in project) {
        if (key === "toDoItems") {
            const toDoItemIndex = project[key].findIndex((toDoItem) => toDoItem.id === toDoItemId);
            if (toDoItemIndex) return toDoItemIndex;
        }
    }
};

export {
    createToDoItem,
    editToDoItem,
    deleteToDoItem,
    markComplete,
    getToDoItem,
    getToDoItemIndex,
};
