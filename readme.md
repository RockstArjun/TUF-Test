# Code Snippet Submission Web Application

This web application allows users to submit and display code snippets. It consists of two main pages: a submission form and a display table.

## Features

- **Page 1 - Submission Form**: Users can submit their code snippets along with additional information such as username, preferred code language, and standard input.

- **Page 2 - Display Table**: All submitted entries are displayed in a tabular format showing username, code language, standard input, and timestamp of submission. Source code is limited to the initial 100 characters for brevity.

## Tech Stack

- **Frontend**: React
- **Backend**: Express
- **Database**: MySQL
- **State Management and Real-time Updates**: React Query

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RockstArjun/TUF-Test

# Install dependencies:

bash
Copy code
cd frontend
npm install
cd ../server
npm install
Set up MySQL database:

Create a MySQL database and configure the connection in server/.env file.
Start the server:

bash
Copy code
cd server
npm start
Start the frontend:

bash
Copy code
cd ../frontend
npm start
Access the application at http://localhost:3000.

# Bonus Tasks
Bonus Task 1: **Cache with React Query**
Real-time updates and caching are implemented using React Query.

Bonus Task 2: **External API Integration**
Due to issues with external API (Judge0), the implementation of retrieving code outputs and displaying them in the table column (stdout) is pending.

# Hosted Url's
