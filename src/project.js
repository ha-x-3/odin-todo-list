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

export { projects, createProject }