import { getFromLocalStorage, saveToLocalStorage, getIdFromLocalStorage, saveIncrementId, getIncrementId } from "./localStorage";

const projectsData = {
	projects: getFromLocalStorage() || [],
	setProjects: function (newProjects) {
		this.projects = newProjects;
	},
};
let selectedProjectId = getIdFromLocalStorage();

let incrementId = (function () {
	let id = getIncrementId();
	return function () {
		id++;
		saveIncrementId(id);
		return id;
	};
})();


const Project = (name) => {

    let id = incrementId();
    let toDoItems = [];
    let completed = [];
    return {
        id,
        name,
        toDoItems,
        completed,
    };

};

const createProject = (name) => {
	// Check if a project with the same name already exists
	const existingProject = projectsData.projects.find((project) => project.name === name);

	if (existingProject) {
		// If a project with the same name exists, add a number to the end of the name
		let counter = 1;
		let newName = `${name} (${counter})`;

		while (projectsData.projects.find((project) => project.name === newName)) {
			counter++;
			newName = `${name} (${counter})`;
		}

		const project = Project(newName);
		const updatedProjects = [...projectsData.projects, project];
		projectsData.setProjects(updatedProjects);
		selectedProjectId = project.id;
	} else {
		// If no project with the same name exists, create a new project with the given name
		const project = Project(name);
		const updatedProjects = [...projectsData.projects, project];
		projectsData.setProjects(updatedProjects);
		selectedProjectId = project.id;
	}

	saveToLocalStorage(projectsData.projects, selectedProjectId);
};

const editProjectName = (projectId, newName) => {
    const project = getProject(projectId);
    project.name = newName;
    saveToLocalStorage(projectsData.projects, projectId);
};

const deleteProject = (projectId) => {
    const projectIndex = getProjectIndex(projectId);
	const updatedProjects = [...projectsData.projects];
	updatedProjects.splice(projectIndex, 1);
	projectsData.setProjects(updatedProjects);
	saveToLocalStorage(projectsData.projects, projectId);
};

const getProject = (projectId) => projectsData.projects.find((project) => project.id === projectId);

const getProjectIndex = (projectId) => projectsData.projects.findIndex((project) => project.id === projectId);

export { projectsData, createProject, editProjectName, deleteProject, getProject, getProjectIndex, selectedProjectId };
