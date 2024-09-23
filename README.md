# Ticket Management System

A simple ticket management system built with Node.js and MongoDB. This application allows users to create, read, update, and delete tickets, with support for managing ticket statuses.

## Features

- Create new tickets
- Retrieve all tickets
- Get a ticket by ID
- Update existing tickets
- Delete tickets
- Supports basic ticket status management (open, in progress, closed)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (installed locally or using MongoDB Atlas)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/lekhrajtank/Ticket-Management-System.git
   ```
   ```bash
   cd ticket-management
   ```
 2. Install dependencies:
    ```bash
    npm install
     ```
 3. Configure Environment:
    + Create a .env file in the root directory and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb://localhost:27017/ticket-management
    ```
 4. Run the Application:
    + Start the server:
       ```bash
       npm start
       ```
   The server will be available at http://localhost:5000.            


## API Documentation
Base URL
http://localhost:5000/api/tickets
### Endpoints
1. Get all tickets
+ URL: /
+ Method: GET
+ Response:
  - 200 OK: Returns an array of all tickets.
  
  ```json
  {
    "id": "60c72b2f9b1d4a001f647c14",
    "title": "Test Ticket",
    "description": "This is a test ticket.",
    "status": "open",
    "createdAt": "2024-09-22T10:00:00.000Z"
  }
  ```
  
2. Create a new ticket
+ URL: /
+ Method: POST
+ Request Body:
  ```json
  {
  "title": "Sample Ticket",
  "description": "This is a sample ticket."
  }
  ```

+ Response:201 Created: Returns the created ticket.
- Example Response:
    
 ```json
{
  "id": "60c72b2f9b1d4a001f647c16",
  "title": "Sample Ticket",
  "description": "This is a sample ticket.",
  "status": "open",
  "createdAt": "2024-09-22T10:10:00.000Z"
}
```

3. Get a ticket by ID
+ URL: /:id
+ Method: GET
+ Response:
  - 200 OK: Returns the ticket with the specified ID.
  - 404 Not Found: If the ticket does not exist.
- Example Response :
```json
{
  "id": "60c72b2f9b1d4a001f647c16",
  "title": "Sample Ticket",
  "description": "This is a sample ticket.",
  "status": "open",
  "createdAt": "2024-09-22T10:10:00.000Z"
}
```
4. Update a ticket
+ URL: /:id
+ Method: PUT
+ Request Body:
```json
{
  "title": "Updated Ticket Title",
  "description": "Updated description.",
  "status": "in progress"
}
```
+ Response:
  - 200 OK: Returns the updated ticket.
  - 400 Bad Request: If invalid data is provided.
  - 404 Not Found: If the ticket does not exist.
    - Example Response:
  ```json
  {
  "id": "60c72b2f9b1d4a001f647c16",
  "title": "Updated Ticket Title",
  "description": "Updated description.",
  "status": "in progress",
  "createdAt": "2024-09-22T10:10:00.000Z"
  }
  ```
 
5. Delete a ticket
+ URL: /:id
+ Method: DELETE
+ Response:
  - 200 OK: Returns a message confirming deletion.
  - 404 Not Found: If the ticket does not exist.
    + Example Response:

```json
{
  "message": "Ticket deleted"
}
```
## Testing with Postman
 You can test the API using Postman. Here are some sample requests you can try:

### Create a new ticket

+ Method: POST
+ URL: http://localhost:5000/api/tickets
+ Body:
```json
{
  "title": "Test Ticket",
  "description": "This is a test ticket."
}
```
### Get all tickets

+ Method: GET
+ URL: http://localhost:5000/api/tickets
  
### Get a ticket by ID
+ Method: GET
+ URL: http://localhost:5000/api/tickets/{id}

### Update a ticket
+ Method: PUT
+ URL: http://localhost:5000/api/tickets/{id}
+ Body:
```json
{
  "title": "Updated Title",
  "description": "Updated Description",
  "status": "closed"
}
```
### Delete a ticket
+ Method: DELETE
+ URL: http://localhost:5000/api/tickets/{id}
  
## Acknowledgments
+ Express.js - Fast, unopinionated, minimalist web framework for Node.js.
+ MongoDB - NoSQL database for storing ticket data.
+ Mongoose - MongoDB object modeling for Node.js.

## Contact
For any queries or issues, feel free to reach out at:

+ Email: lekhrajtak229@gmail.com
