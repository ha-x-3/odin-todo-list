import { projectsData, getProject, getProjectIndex } from "./project";
import { saveToLocalStorage, saveIncrementId, getIncrementId } from "./localStorage";

let incrementId = (function () {
	let id = getIncrementId();
	return function () {
		id++;
		saveIncrementId(id);
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
	const updatedProject = {
		...project,
		toDoItems: [...project.toDoItems, toDoItem],
	};
	const updatedProjects = projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	projectsData.setProjects(updatedProjects);
	saveToLocalStorage(projectsData.projects, projectId);
};

const editToDoItem = (
    projectId,
    toDoItemId,
    newName,
    newDescription,
    newDate,
    newPriority
) => {
    const project = getProject(projectId);
	const updatedToDoItems = project.toDoItems.map((toDoItem) =>
		toDoItem.id === toDoItemId
			? {
					...toDoItem,
					name: newName,
					description: newDescription,
					date: newDate,
					priority: newPriority,
			  }
			: toDoItem
	);
	const updatedProject = { ...project, toDoItems: updatedToDoItems };
	const updatedProjects = projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	projectsData.setProjects(updatedProjects);
	saveToLocalStorage(projectsData.projects, projectId);
};

const deleteToDoItem = (projectId, toDoItemId) => {
    const project = getProject(projectId);
	const updatedToDoItems = project.toDoItems.filter(
		(toDoItem) => toDoItem.id !== toDoItemId
	);
	const updatedProject = { ...project, toDoItems: updatedToDoItems };
	const updatedProjects = projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	projectsData.setProjects(updatedProjects);
	saveToLocalStorage(projectsData.projects, projectId);
};

const markComplete = (projectId, toDoItemId) => {
    const project = getProject(projectId);
	const toDoItem = getToDoItem(projectId, toDoItemId);
	const toDoItemIndex = getToDoItemIndex(projectId, toDoItemId);
	const updatedToDoItems = [...project.toDoItems];
	updatedToDoItems.splice(toDoItemIndex, 1);
	const updatedProject = {
		...project,
		toDoItems: updatedToDoItems,
		completed: [toDoItem, ...project.completed],
	};
	const updatedProjects = projectsData.projects.map((p) =>
		p.id === projectId ? updatedProject : p
	);
	projectsData.setProjects(updatedProjects);
	saveToLocalStorage(projectsData.projects, projectId);
};

const getToDoItem = (projectId, toDoItemId) => {
    const project = getProject(projectId);
	return project.toDoItems.find((toDoItem) => toDoItem.id === toDoItemId);
};

const getToDoItemIndex = (projectId, toDoItemId) => {
    const project = getProject(projectId);
	return project.toDoItems.findIndex(
		(toDoItem) => toDoItem.id === toDoItemId
	);
};

export {
    createToDoItem,
    editToDoItem,
    deleteToDoItem,
    markComplete,
    getToDoItem,
    getToDoItemIndex,
};
