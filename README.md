# Basketball Team Management Web Application

## 1. Introduction

This project details the development of a web application for managing a basketball team, using Angular as the main framework for the frontend and Bootstrap for the interface design. The primary goal of this project is to apply the core concepts of Angular, creating a Single Page Application (SPA) that includes various components interacting with each other to provide an intuitive and engaging user experience.

The application allows users to view a list of players, check specific player details, and see related multimedia content, such as highlight videos. Additionally, filtering functionalities are implemented using Angular pipes to enhance navigation and information retrieval within the system.

This project was carried out in a collaborative development environment, utilizing tools like Trello for planning and GitHub for version control. The report outlines the project's structure, the components developed, communication techniques between components, and the main features implemented.

## 2. Development Environment and Setup

### 2.1 Tools Used
- **Node.js**: Required for Angular CLI to manage dependencies and run development scripts.
- **Angular CLI**: Used for creating the project, generating components and services, and managing routes and dependencies.
- **Git**: Employed for version control, with a remote repository hosted on GitHub for collaboration and code tracking.
- **Visual Studio Code (VS Code)**: The Integrated Development Environment (IDE) used for development, chosen for its extensive support for Angular-related extensions.

### 2.2 Project Planning
Project planning was conducted using Trello, where tasks were divided into clear stages with responsibilities assigned to different team members. Key milestones were marked, ensuring an organized and efficient development process.

### 2.3 Repository Setup
The project repository was hosted on GitHub, with code uploaded in different branches corresponding to the functionalities being developed. Tagged commits were made at the end of each stage to allow easy code reviews and testing.

### 2.4 Angular Environment Setup
The environment was prepared by installing necessary dependencies using npm. A base project was generated with `ng new equipo-basket`, creating the folder structure for components, services, and assets.

## 3. Project Structure

The project follows Angular's best practices, ensuring modularity, scalability, and ease of maintenance. The structure is organized into specific folders for components, services, models, and pipes.

### 3.1 Folder Structure
- **/app/components**: Contains the main components of the project.
  - **/players**: Houses `PlayersComponent`, responsible for displaying the list of players.
  - **/detail**: Contains `DetailComponent`, which shows detailed information about a selected player.
  - **/media**: Includes `MediaComponent`, responsible for managing video playback.
- **/app/model**: Contains the data models used by the components, such as `players.ts` for player information.
- **/app/pipes**: Custom pipes for filtering and sorting data. In this project, `filter-name.pipe.ts` and `filter-position.pipe.ts` allow filtering players by name and position.
- **/app/service**: Contains `players.service.ts`, which handles the business logic and data management for players.
- **/public**: Stores static assets like player images and videos.

### 3.2 Components and Communication
Three main components manage different aspects of the application and communicate through routing and services.
- **PlayersComponent**: Displays the list of players, supports filtering via Angular pipes, and redirects to a player's details.
- **DetailComponent**: Shows detailed player information and uses routing to fetch data from the URL parameter.
- **MediaComponent**: Manages video playback associated with the selected player, offering controls such as play, pause, and skip.

### 3.3 Services and Models
- **PlayersService**: Centralizes business logic for managing player data, facilitating communication between the backend (or simulated data) and components.
- **Players Model**: Defines data structures for players, ensuring consistent typing throughout the application.

### 3.4 Filters and Pipes
Custom pipes (`filter-name.pipe.ts`, `filter-position.pipe.ts`) have been implemented to allow users to filter the player list by name or position, enhancing user experience and navigation.

### 3.5 Static File Management
With Angular version 18, static files like images and videos are placed in the `public` folder, ensuring proper access and sharing with components.

