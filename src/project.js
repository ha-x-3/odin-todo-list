import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";

let projects = getFromLocalStorage() || [];

const Project = (name) => {

    incrementId = (function () {
		let id = 0;
		return function () {
			id++;
			return id;
		};
	})();

    let id = incrementId();
    let tasks = [];
    let completed = [];
    return {
        id,
        name,
        tasks,
        completed,
    };

};

const createProject = (name) => {
	// Check if a project with the same name already exists
	const existingProject = projects.find((project) => project.name === name);

	if (existingProject) {
		// If a project with the same name exists, add a number to the end of the name
		let counter = 1;
		let newName = `${name} (${counter})`;

		while (projects.find((project) => project.name === newName)) {
			counter++;
			newName = `${name} (${counter})`;
		}

		const project = Project(newName);
		projects.push(project);
	} else {
		// If no project with the same name exists, create a new project with the given name
		const project = Project(name);
		projects.push(project);
	}

	saveToLocalStorage(projects);
};

const editProjectName = (projectId, newName) => {
    const project = getProject(projectId);
    project.name = newName;
    saveToLocalStorage(projects, projectId);
};

const deleteProject = (projectId) => {
    const projectIndex = getProjectIndex(projectId);
    projects.splice(projectIndex, 1);
    saveToLocalStorage(projects, projectId);
};

const getProject = (projectId) => projects.find((project) => project.id === projectId);

const getProjectIndex = (projectId) => projects.findIndex((project) => project.id === projectId);

export { projects, createProject, editProjectName, deleteProject, getProject, getProjectIndex }