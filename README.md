# Fullstack Challenge KenzieAcademy-Brazil: HarmonyHub

# Backend

## Project Setup Instructions:

- Clone the Repository:
    - Clone the repository using the "main" branch.

- Install Dependencies:
    - Execute either `npm i` or `yarn` to install project dependencies.

- Configure Environment:
    - Create an `.env` file at the root of the project based on the provided `.env.example` file.
    - Configure your PostgreSQL database with the same name as specified in the `.env` file.

- Database Migration:
    - Migrate TypeORM tables to your database using the command:
        - `npm run typeorm migration:run -- -d ./src/data-source.ts`
        - or
        - `yarn typeorm migration:run -d ./src/data-source.ts`

- Start the Project Locally:
    - Initiate the project locally with either:
        - `npm run dev`
        - or
        - `yarn dev`

## Service Requirements

This backend service provides a REST API for creating, listing, updating, and deleting data from the database.

- Database: PostgreSQL
- Technologies: TypeScript, TypeORM, Node.js, Express, and other libraries.

| Method | Endpoint     | Usage Outcome              | Permission         |
|--------|--------------|----------------------------|--------------------|
| POST   | /login       | User login                 | N/A                |
| POST   | /users       | Create a new user          | N/A                |
| GET    | /users       | List all users             | Authenticated user |
| GET    | /users/id    | Read a user based on ID    | Authenticated user |
| PATCH  | /users/id    | Update a user              | Account owner      |
| DELETE | /users/id    | Delete a user              | Account owner      |
| POST   | /contacts    | Create a contact           | Authenticated user |
| GET    | /contacts    | List all contacts          | Authenticated user |
| GET    | /contacts/id | Read a contact based on ID | Authenticated user |
| PATCH  | /contacts/id | Update a contact           | Owner and Manager  |
| DELETE | /contacts/id | Delete a contact           | Owner and Manager  |

/**
# Fullstack Challenge -- Frontend

## Project Setup Instructions:

- Clone the Repository:
    Begin by cloning the repository using the "main" branch.

- Install Dependencies:
    Use either `npm i` or `yarn` to install the necessary project dependencies.

- Run the Application Locally:
    For a seamless local experience, ensure the local API for this project is running on your machine.
    Execute the following command to run the frontend application locally:
    ```
    npm run dev
    ```
    or
    ```
    yarn dev
    ```

## Service Requirements

This frontend service utilizes a REST API (Backend) for creating, listing, updating, and deleting data from the database.

### Technologies Used:

- TypeScript
- React
- Zod
- Styled-components
- Axios
- React-router-dom
- React-hook-form
- React-hook-form
- other relevant libraries

### Local API Dependency:

Ensure the local API is running before starting the frontend project.
