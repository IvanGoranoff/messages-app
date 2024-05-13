# Messages App

## Overview

This Messages App is a simple React application designed to display threaded messages from a JSON data source using a JSON Server. It showcases threads that can be expanded or collapsed to view detailed messages.

## Features

- **Dynamic Data Rendering**: Messages are fetched from a local JSON Server and rendered dynamically.
- **Expand/Collapse Functionality**: Users can expand a message thread to see detailed messages or collapse it.
- **Responsive Design**: Implements Flexbox for layout adjustments across different screen sizes.

## Technologies Used

- **React**: Used for building the user interface.
- **JSON Server**: Provides a full fake REST API with zero coding in less than 30 seconds (great for prototyping).
- **SCSS**: For styling components.

## Project Structure

- `src/components`: Contains all React components like `Thread.js`, `ThreadsList.js`, `HeaderComponent.js`, and `FooterComponent.js`.
- `src/services`: Contains data services including `data.json` which is used by JSON Server.
- `public`: Contains static files like HTML and images.

## Setup and Installation

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager) installed on your machine.

### Starting JSON Server

- To start the JSON Server which provides the backend API, run:


- npm run start-server

- The server will start at http://localhost:3000, serving the data stored in src/services/data.json.

### Installing Dependencies

After cloning the repository, run the following command in the project directory to install the necessary dependencies:

```bash
npm install
