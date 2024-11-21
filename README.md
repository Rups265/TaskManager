Implementation of an agenda
consider
This To-Do List application allows users to manage their tasks more efficiently. Users can add, update, and set due dates for each task. The system ensures that due dates are not set in advance, and encourages a more manageable work environment. The backend is created using Node.js and Express, using MongoDB to store business data.

features
Add tasks: Users can create tasks that offer titles, descriptions, and categories.
Set a due date: Each task can have a due date, which can be updated as needed.
Date validation: The system validates that the due date is not the first.
Job Modification: Users can change the job description, including the due date.
Use of technology
Node.js: A JavaScript runtime for developing a server-side application.
Express.js: A web framework for processing HTTP requests and managing routes.
MongoDB: NoSQL database for storing transactions and associated.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, which makes it easier to interact with the database.


CRUD implementation description
1. Create the project
The Create action requires you to add a new job to the database with the required information. Here's how it works:

The user submits a request to perform a task, including title, description, and category.
The backend processes the request and validates the data.
If the data is correct, a new worksheet is created in the database with the information provided.
The task will have a unique taskId assigned to itself by the database (usually generated by MongoDB or specified in the API).
If the created task succeeds, a response containing the list of tasks is returned to the client.
2. Reading Activity
Read the function enables the user to obtain information about a specific task. Here is the process:

The user sends a request with a taskId to send the task information.
The backend queries the database using the given taskId.
When the job is found, the job description is sent back to the applicant.
If no job exists, a 404 Not Found response is returned.
3. Update the project
The Update action allows users to change the details of a task, such as changing the isCompleted status or changing the due date.

Update job status ( isCompleted ) .
The isCompleted field is a Boolean value indicating whether the job is completed or not. Here is how updating the isCompleted field works.

The user sends a request to update the status of the task, usually with a taskId and a new value of isCompleted.
The background verifies the data provided and checks if the job exists in the database.
If the task exists, the background updates the task's isCompleted status (true/false) and saves it back to the database.
Once the project is updated, the updated project information is sent back to the customer.
4. Delete the Work
The Delete action allows users to remove a task from the system. Here's how it works:

The user sends a request including the taskId of the task he wants to delete.
The backend finds a task with a given taskId and deletes it from the database.
If the task is found and deleted, a success response is returned to the client. Otherwise, a failure response is returned.
