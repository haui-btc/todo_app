# To-Do List App

A simple, yet functional To-Do List application built with HTML, CSS, and JavaScript. This app allows users to add, delete, and manage their tasks efficiently.

## Features

- **Add Tasks**: Easily add new tasks by typing in the input field and pressing "Enter" or clicking the "ADD" button.
- **Delete Tasks**: Remove tasks that are no longer needed by clicking the delete button next to each task.
- **Task Completion**: Mark tasks as completed by checking the checkbox.
- **Persistent Storage**: All tasks are saved in the browser's local storage, so your tasks remain even after refreshing the page.

## Technologies Used

- **HTML**: For creating the structure of the app.
- **CSS**: For styling the user interface.
- **JavaScript**: For adding interactivity and functionality to the app.
- **Local Storage**: To store tasks locally in the user's browser.

## Screenshots

![screenshot](todo_app.png)

## Installation

### Running the Application with Docker

You can run this To-Do List application in a Docker container using the provided `Dockerfile` and `docker-compose.yaml` file. Follow the steps below to set up and run the application:

### Prerequisites

Make sure you have Docker and Docker Compose installed on your system. You can download and install Docker from the [official Docker website](https://www.docker.com/get-started).

### Steps

1. **Clone the repository:**

```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
```

2. Build and start the application

```bash
docker-compose up --build -d
```

> Access the application: <br>Open your web browser and go to http://localhost:8080 to see the To-Do List app in action. 3. Stopping the Application

```bash
docker-compose down
```

4. Customizing the Docker Setup

- Dockerfile: Defines how the application is built into a Docker image.
- docker-compose.yaml: Defines the services, volumes, and networks required to run the application.

You can modify these files to suit your specific needs.
