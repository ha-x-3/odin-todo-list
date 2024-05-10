import { projects, getProject } from "./project";
import { saveToLocalStorage } from "./localStorage";
import UIController from "./uIController";

const ToDoItem = (projectId, name, description, date, priority) => {

	const project = getProject(projectId);
	let projectTodoCount = project.toDoItems.length;
	let id = `${projectId}-${projectTodoCount + 1}`;
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
    console.log('Project:', project);
    if (!project) {
		console.error('Project not found.');
		return; // Exit the function if project is not found
	}
	const toDoItem = ToDoItem(projectId, name, description, date, priority);
    console.log('New ToDo Item:', toDoItem); // Check the newly created ToDo item

	if (!toDoItem) {
		console.error('Failed to create ToDo item.');
		return; // Exit the function if ToDo item creation fails
	}
	project.toDoItems.push(toDoItem);
	saveToLocalStorage(projects, projectId);
    console.log('ToDo item added successfully.');

	// Optionally, you can also log the updated project to see if the ToDo item was added correctly
	console.log('Updated Project:', project);
};

const editToDoItem = (
    projectId,
    toDoItemId,
    newName,
    newDescription,
    newDate,
    newPriority, 
    newProjectId
) => {
	const oldProject = getProject(projectId);
	const toDoItem = getToDoItem(projectId, toDoItemId);

	// Remove the to-do item from the old project
	const toDoItemIndex = getToDoItemIndex(projectId, toDoItemId);
	oldProject.toDoItems.splice(toDoItemIndex, 1);

	// Update the projectId to the new one
	toDoItem.projectId = newProjectId;

	// Add the to-do item to the new project
	const newProject = getProject(newProjectId);
	newProject.toDoItems.push(toDoItem);

	toDoItem.name = newName;
	toDoItem.description = newDescription;
	toDoItem.date = newDate;
	toDoItem.priority = newPriority;

	saveToLocalStorage(projects, projectId);
};

const deleteToDoItem = (projectId, toDoItemId) => {
    const project = getProject(projectId);
	const toDoItemIndex = getToDoItemIndex(projectId, toDoItemId);
    project.toDoItems.splice(toDoItemIndex, 1);
	saveToLocalStorage(projects, projectId);
};

const markComplete = (projectId, toDoItemId) => {
	const project = getProject(projectId);
	const toDoItem = getToDoItem(projectId, toDoItemId);
	// Toggle the complete status of the to-do item
	toDoItem.complete = !toDoItem.complete;

	if (toDoItem.complete) {
		// Add the to-do item to the completed array of the project
		project.completed.push(toDoItem);
	} else {
		// Remove the to-do item from the completed array of the project
		const completedIndex = project.completed.findIndex(
			(item) => item.id === toDoItemId
		);
		if (completedIndex !== -1) {
			project.completed.splice(completedIndex, 1);
		}
	}
	saveToLocalStorage(projects, projectId);
    UIController.renderToDos(projectId);
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
        if ( key === "todoItems") {
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
