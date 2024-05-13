import {
	createProject,
	projects,
	editProjectName,
	deleteProject,
	getProject,
} from './project';
import {
	createToDoItem,
	editToDoItem,
	deleteToDoItem,
	markComplete,
	getToDoItem,
} from './toDoItem';
import { saveToLocalStorage, getFromLocalStorage, getIdFromLocalStorage } from './localStorage';
import { format, formatDistanceToNow, isPast } from 'date-fns';
import validator from 'validator';

const UIController = (() => {
    let selectedProjectId = getFromLocalStorage();
    saveToLocalStorage(projects, selectedProjectId);
    const updateSelectedProjectId = (projectId) => {
		selectedProjectId = projectId;
		saveToLocalStorage(projects, selectedProjectId);
	};

	const sidePanel = document.querySelector('#side-panel');
	const mainPanel = document.querySelector('#main-panel');
	const mainPanelDesc = document.querySelector('#main-panel-desc');
	const addButton = document.querySelector('button');

    const updateSelectedProjectColor = (projectId) => {
		// Remove the selected-project class from all project items
		sidePanel.querySelectorAll('li').forEach((item) => {
			item.classList.remove('selected-project');
		});
		// Add the selected-project class to the clicked project item
		const selectedProjectItem = sidePanel.querySelector(
			`li[data-id="${projectId}"]`
		);
		if (selectedProjectItem) {
			selectedProjectItem.classList.add('selected-project');
		}
	};

	const renderProjects = () => {
		const projectList = document.createElement('ul');
		projects.forEach((project) => {
			const projectItem = document.createElement('li');
			projectItem.dataset.id = project.id;
			const projectDetails = document.createElement('div');
			projectDetails.classList.add('project-details');

			const name = document.createElement('span');
			name.classList.add('project-name');
			name.textContent = project.name;

			const projectControls = document.createElement('div');
			projectControls.classList.add('project-controls');

			// Edit button
			const editBtn = document.createElement('button');
			editBtn.classList.add('edit-btn');
			editBtn.textContent = 'Edit';
			editBtn.addEventListener('click', () => {
				showEditProjectModal(project.id);
			});

			// Delete button
			const deleteBtn = document.createElement('button');
			deleteBtn.classList.add('delete-btn');
			deleteBtn.textContent = 'X';
			deleteBtn.addEventListener('click', () => {
				showDeleteProjectModal(project.id);
			});

			projectControls.appendChild(editBtn);
			projectControls.appendChild(deleteBtn);

			projectItem.addEventListener('click', () => {
				renderToDos(project.id);
			});
			projectDetails.appendChild(name);
			projectItem.appendChild(projectDetails);
			projectItem.appendChild(projectControls);
			projectList.appendChild(projectItem);
		});
		// Clear the existing content inside the mainPanel, except for the h2 element
		const sidePanelChildren = Array.from(sidePanel.children);
		sidePanelChildren.forEach((child) => {
			if (child.tagName !== 'H2') {
				child.remove();
			}
		});
		sidePanel.appendChild(projectList);

		// Color the selected project on page load
		if (selectedProjectId !== null) {
			updateSelectedProjectColor(selectedProjectId);
		}
	};

	const renderToDos = (projectId) => {
        const formatDate = (dateString) => {
			return format(new Date(dateString), 'MM-dd-yyyy');
		};
        
		const project = getProject(projectId);
		// Clear the existing content inside the mainPanel, except for the h2 element
		const mainPanelChildren = Array.from(mainPanel.children);
		mainPanelChildren.forEach((child) => {
			if (child.tagName !== 'H2') {
				child.remove();
			}
		});

		if (project.toDoItems && project.toDoItems.length > 0) {
			const toDoList = document.createElement('ul');
			project.toDoItems.forEach((toDoItem) => {
				const toDoItemElement = document.createElement('li');
				const checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.checked = toDoItem.complete;
				checkbox.addEventListener('change', () => {
					markComplete(projectId, toDoItem.id);
				});
				// If the to-do item is completed, change its background color
				// if (toDoItem.complete) {
				// 	toDoItemElement.style.backgroundColor = 'grey';
				// }  ...moved to date block so that overdue but complete items are grey

				const todoDetails = document.createElement('div');
				todoDetails.classList.add('todo-details');

				const name = document.createElement('span');
				name.classList.add('todo-name');
				name.textContent = toDoItem.name;

				const description = document.createElement('span');
				description.classList.add('todo-description');
				description.textContent = toDoItem.description;

				const date = document.createElement('span');
				date.classList.add('todo-due-date');
                const isPastDue = isPast(new Date(toDoItem.date));
				if (isPastDue) {
					date.textContent = `Due: ${formatDate(
						toDoItem.date
					)}, which was ${formatDistanceToNow(
						new Date(toDoItem.date)
					)} ago!`;
				} else {
					date.textContent = `Due: ${formatDate(
						toDoItem.date
					)}, which is in ${formatDistanceToNow(
						new Date(toDoItem.date)
					)}!`;
				}
                //If due date in past, set background color to pink
                if (toDoItem.complete) {
                    toDoItemElement.style.backgroundColor = 'grey'
                } else if (isPastDue) {
                    toDoItemElement.style.backgroundColor = 'pink';
                }

				const priorityBlock = document.createElement('div');
				priorityBlock.classList.add('priority-block');
				priorityBlock.classList.add(
					`priority-${toDoItem.priority.toLowerCase()}`
				);

				const todoControls = document.createElement('div');
				todoControls.classList.add('todo-controls');

				const editBtn = document.createElement('button');
				editBtn.classList.add('edit-btn');
				editBtn.textContent = 'Edit';
				editBtn.addEventListener('click', () => {
					showEditModal(projectId, toDoItem.id);
				});

				const deleteBtn = document.createElement('button');
				deleteBtn.classList.add('delete-btn');
				deleteBtn.textContent = 'X';
				deleteBtn.addEventListener('click', () => {
					showDeleteModal(projectId, toDoItem.id);
				});

				todoControls.appendChild(editBtn);
				todoControls.appendChild(deleteBtn);

				todoDetails.appendChild(name);
				todoDetails.appendChild(description);
				todoDetails.appendChild(date);

				toDoItemElement.appendChild(checkbox);
				toDoItemElement.appendChild(todoDetails);
				toDoItemElement.appendChild(todoControls);
                toDoItemElement.appendChild(priorityBlock);

				toDoList.appendChild(toDoItemElement);
			});
			mainPanel.appendChild(toDoList);
		} else {
			const noToDoMessage = document.createElement('p');
			noToDoMessage.textContent = 'No to-do items for this project.';
			mainPanel.appendChild(noToDoMessage);
		}

		mainPanelDesc.style.display = 'none';

        updateSelectedProjectColor(projectId);
	};

	const showModal = () => {
		const modal = document.createElement('div');
		modal.classList.add('modal');
		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const projectTab = document.createElement('div');
		projectTab.classList.add('tab');
		const projectInput = document.createElement('input');
		projectInput.type = 'text';
		projectInput.placeholder = 'Project Name';
		const projectSubmitButton = document.createElement('button');
		projectSubmitButton.classList.add('submit-button');
		projectSubmitButton.textContent = 'Add Project';
		projectSubmitButton.addEventListener('click', () => {
            const projectName = projectInput.value.trim(); // Trim whitespace

			// Validate project name using validator.js
			const errors = validator.isEmpty(projectName)
				? ['Project name is required.']
				: [];

			if (errors.length > 0) {
				alert(errors.join('\n')); // Display validation errors
				return; // Prevent form submission if there are errors
			}
			createProject(projectInput.value);
			renderProjects();
			modal.remove();
		});
		projectTab.appendChild(projectInput);
		projectTab.appendChild(projectSubmitButton);

		const toDoTab = document.createElement('div');
		toDoTab.classList.add('tab');
		const toDoNameInput = document.createElement('input');
		toDoNameInput.type = 'text';
		toDoNameInput.placeholder = 'ToDo Name';
		const toDoDescInput = document.createElement('input');
		toDoDescInput.type = 'text';
		toDoDescInput.placeholder = 'ToDo Description';
		const toDoDateInput = document.createElement('input');
		toDoDateInput.type = 'date';
		const toDoPriorityInput = document.createElement('select');
		const priorityOptions = ['Low', 'Medium', 'High'];
		priorityOptions.forEach((option) => {
			const priorityOption = document.createElement('option');
			priorityOption.value = option.toLowerCase();
			priorityOption.textContent = option;
			toDoPriorityInput.appendChild(priorityOption);
		});
		const projectSelect = document.createElement('select');
        const defaultOption = document.createElement('option');
		defaultOption.value = '';
		defaultOption.textContent = 'Pick a Project';
        projectSelect.appendChild(defaultOption);
		projects.forEach((project) => {
			const projectOption = document.createElement('option');
			projectOption.value = project.id;
			projectOption.textContent = project.name;
			projectSelect.appendChild(projectOption);
		});
        projectSelect.addEventListener('change', () => {
			selectedProjectId = parseInt(projectSelect.value);
			updateSelectedProjectId(selectedProjectId);
		});
		const toDoSubmitButton = document.createElement('button');
		toDoSubmitButton.classList.add('submit-button');
		toDoSubmitButton.textContent = 'Add ToDo';
		toDoSubmitButton.addEventListener('click', () => {
            const toDoName = toDoNameInput.value.trim();
            const toDoDescription = toDoDescInput.value.trim();
            const toDoDate = toDoDateInput.value;
            const selectedProject = projectSelect.value;

            // Validate to-do item details
            const errors = [];
            if (validator.isEmpty(toDoName)) {
                errors.push('To-do name is required.');
            }
            if (validator.isEmpty(toDoDescription)) {
				errors.push('To-do description is required.');
			}
            if (validator.isEmpty(toDoDate)) {
				errors.push('To-do date is required.');
			}
            if (selectedProject === '') {
                errors.push('Please select a project.');
            }
            if (errors.length > 0) {
                alert(errors.join('\n')); // Display validation errors
                return; // Prevent form submission if there are errors
            }
			createToDoItem(
				selectedProjectId,
				toDoNameInput.value,
				toDoDescInput.value,
				toDoDateInput.value,
				toDoPriorityInput.value
			);
			const project = getProject(selectedProjectId);
			if (project.toDoItems.length > 0) {
				renderToDos(selectedProjectId);
			} else {
				mainPanel.innerHTML = '';
				const noToDoMessage = document.createElement('p');
				noToDoMessage.textContent = 'No to-do items for this project.';
				mainPanel.appendChild(noToDoMessage);
				mainPanelDesc.style.display = 'none';
			}
			modal.remove();
		});
		toDoTab.appendChild(toDoNameInput);
		toDoTab.appendChild(toDoDescInput);
		toDoTab.appendChild(toDoDateInput);
		toDoTab.appendChild(toDoPriorityInput);
		toDoTab.appendChild(projectSelect);
		toDoTab.appendChild(toDoSubmitButton);

		const tabButtons = document.createElement('div');
		tabButtons.classList.add('tab-buttons');
		const projectTabButton = document.createElement('button');
		projectTabButton.textContent = 'Project';
		projectTabButton.classList.add('active');
		projectTabButton.addEventListener('click', () => {
			projectTab.style.display = 'block';
			toDoTab.style.display = 'none';
			projectTabButton.classList.add('active');
			toDoTabButton.classList.remove('active');
		});
		const toDoTabButton = document.createElement('button');
		toDoTabButton.textContent = 'ToDo';
		toDoTabButton.addEventListener('click', () => {
			projectTab.style.display = 'none';
			toDoTab.style.display = 'block';
			toDoTabButton.classList.add('active');
			projectTabButton.classList.remove('active');
		});
		// Create close button (X)
		const closeButton = document.createElement('button');
		closeButton.textContent = 'X';
		closeButton.addEventListener('click', () => {
			modal.remove();
		});
		tabButtons.appendChild(projectTabButton);
		tabButtons.appendChild(toDoTabButton);
        tabButtons.appendChild(closeButton);

		modalContent.appendChild(tabButtons);
		modalContent.appendChild(projectTab);
		modalContent.appendChild(toDoTab);
		modal.appendChild(modalContent);
		document.body.appendChild(modal);
	};

	const showEditModal = (projectId, toDoItemId) => {
		const toDoItem = getToDoItem(projectId, toDoItemId);

		const editModal = document.createElement('div');
		editModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = 'Name';
		nameInput.value = toDoItem.name;

		const descriptionInput = document.createElement('input');
		descriptionInput.type = 'text';
		descriptionInput.placeholder = 'Description';
		descriptionInput.value = toDoItem.description;

		const dateInput = document.createElement('input');
		dateInput.type = 'date';
		dateInput.value = toDoItem.date;

		const priorityInput = document.createElement('select');
		const priorityOptions = ['Low', 'Medium', 'High'];
		priorityOptions.forEach((option) => {
			const priorityOption = document.createElement('option');
			priorityOption.value = option.toLowerCase();
			priorityOption.textContent = option;
			if (option.toLowerCase() === toDoItem.priority.toLowerCase()) {
				priorityOption.selected = true;
			}
			priorityInput.appendChild(priorityOption);
		});

        const projectSelect = document.createElement('select');
        const defaultOption = document.createElement('option');
		defaultOption.value = '';
		defaultOption.textContent = 'Pick a Project';
        projectSelect.appendChild(defaultOption);
        projects.forEach((project) => {
			const projectOption = document.createElement('option');
			projectOption.value = project.id;
			projectOption.textContent = project.name;
			projectSelect.appendChild(projectOption);
		});
        projectSelect.addEventListener('change', () => {
			selectedProjectId = parseInt(projectSelect.value);
			updateSelectedProjectId(selectedProjectId);
		});
		const saveButton = document.createElement('button');
		saveButton.textContent = 'Save Changes';
		saveButton.addEventListener('click', () => {
            const newProjectId = parseInt(projectSelect.value);
			editToDoItem(
				projectId,
				toDoItemId,
				nameInput.value,
				descriptionInput.value,
				dateInput.value,
				priorityInput.value,
                newProjectId
			);
			editModal.remove();
			renderToDos(newProjectId);
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			editModal.remove();
		});

		modalContent.appendChild(nameInput);
		modalContent.appendChild(descriptionInput);
		modalContent.appendChild(dateInput);
		modalContent.appendChild(priorityInput);
        modalContent.appendChild(projectSelect);
		modalContent.appendChild(saveButton);
		modalContent.appendChild(cancelButton);

		editModal.appendChild(modalContent);
		document.body.appendChild(editModal);
	};

	const showDeleteModal = (projectId, toDoItemId) => {
		const deleteModal = document.createElement('div');
		deleteModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const message = document.createElement('p');
		message.textContent =
			'Are you sure you want to delete this to-do item?';

		const confirmButton = document.createElement('button');
		confirmButton.textContent = 'Confirm';
		confirmButton.addEventListener('click', () => {
			deleteToDoItem(projectId, toDoItemId);
			renderToDos(projectId);
			deleteModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			deleteModal.remove();
		});

		modalContent.appendChild(message);
		modalContent.appendChild(confirmButton);
		modalContent.appendChild(cancelButton);

		deleteModal.appendChild(modalContent);
		document.body.appendChild(deleteModal);
	};

	const showEditProjectModal = (projectId) => {
		const project = getProject(projectId);

		const editModal = document.createElement('div');
		editModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const nameInput = document.createElement('input');
		nameInput.type = 'text';
		nameInput.placeholder = 'Project Name';
		nameInput.value = project.name || '';

		const saveButton = document.createElement('button');
		saveButton.textContent = 'Save Changes';
		saveButton.addEventListener('click', () => {
			const newName = nameInput.value;
			editProjectName(projectId, newName);
			// Clear the existing content inside the sidePanel, except for the h2 element
			const sidePanelChildren = Array.from(sidePanel.children);
			sidePanelChildren.forEach((child) => {
				if (child.tagName !== 'H2') {
					child.remove();
				}
			});
			renderProjects();
			editModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			editModal.remove();
		});

		modalContent.appendChild(nameInput);
		modalContent.appendChild(saveButton);
		modalContent.appendChild(cancelButton);

		editModal.appendChild(modalContent);
		document.body.appendChild(editModal);
	};

	const showDeleteProjectModal = (projectId) => {
		const deleteModal = document.createElement('div');
		deleteModal.classList.add('modal');

		const modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');

		const message = document.createElement('p');
		message.textContent = 'Are you sure you want to delete this project?';

		const confirmButton = document.createElement('button');
		confirmButton.textContent = 'Confirm';
		confirmButton.addEventListener('click', () => {
			deleteProject(projectId);
			renderProjects();
			deleteModal.remove();
		});

		const cancelButton = document.createElement('button');
		cancelButton.textContent = 'Cancel';
		cancelButton.addEventListener('click', () => {
			deleteModal.remove();
		});

		modalContent.appendChild(message);
		modalContent.appendChild(confirmButton);
		modalContent.appendChild(cancelButton);

		deleteModal.appendChild(modalContent);
		document.body.appendChild(deleteModal);
	};

	// Render projects and to-do items on initial load
	const initialize = () => {
		selectedProjectId = getIdFromLocalStorage() || null;
		renderProjects();
		if (selectedProjectId !== null) {
			renderToDos(selectedProjectId);
		}
	};

	initialize();

	addButton.addEventListener('click', showModal);

	return {
		renderProjects,
		renderToDos,
	};
})();

export default UIController;
