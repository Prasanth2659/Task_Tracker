React Task Tracker
A simple, responsive Task Tracker application built with React that allows users to manage daily tasks. The app includes functionalities for adding, editing, deleting, and viewing tasks with local data persistence using browser's local storage.

Features
Add Task: Create tasks with a title, description, due date, and status (Pending, In Progress, Completed).

View Tasks: Display tasks in a responsive table format.

Edit Task: Update task details using inline or modal-based editing.

Delete Task: Remove tasks with a confirmation prompt.

Local Data Persistence: Tasks are saved to the browser's local storage.

Responsive Design: Optimized for mobile, tablet, and desktop screens.

Advanced state management using useContext or Redux.

Technologies Used
Frontend: React, React Hooks (useState, useEffect)

Styling: Bootstrap, Plain CSS
Persistence: Browser's local storage

File Structure

    src/
    │
    ├── components/
    │   ├── TaskForm.js       // Component for adding and editing tasks
    │   ├── TaskList.js       // Component for displaying tasks
    │
    ├── App.js                 // Main application component
    ├── App.css                 // Global styles
    ├── index.js                // Entry point for the app
    └── index.css               // Optional global CSS
