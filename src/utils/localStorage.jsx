const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Project A",
                "taskDescription": "Work on the initial phase of Project A",
                "taskDate": "2024-10-25",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit Report",
                "taskDescription": "Submit the weekly report to the manager",
                "taskDate": "2024-10-20",
                "category": "Administration"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Participate in the sprint planning meeting",
                "taskDate": "2024-10-26",
                "category": "Meetings"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Bug #202",
                "taskDescription": "Fix the login bug reported by QA",
                "taskDate": "2024-10-24",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update the API documentation with the latest changes",
                "taskDate": "2024-10-21",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Review PR #789",
                "taskDescription": "Review the pull request submitted by John",
                "taskDate": "2024-10-24",
                "category": "Code Review"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss requirements with the client for the new project",
                "taskDate": "2024-10-27",
                "category": "Meetings"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy Feature X",
                "taskDescription": "Deploy Feature X to the production environment",
                "taskDate": "2024-10-23",
                "category": "Deployment"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Backend Optimization",
                "taskDescription": "Optimize the backend services for better performance",
                "taskDate": "2024-10-24",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Test Cases",
                "taskDescription": "Develop unit tests for the new API endpoints",
                "taskDate": "2024-10-22",
                "category": "Testing"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design UI for Feature Y",
                "taskDescription": "Work on the UI design for the upcoming feature Y",
                "taskDate": "2024-10-25",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize Budget",
                "taskDescription": "Finalize the budget for the next quarter's operations",
                "taskDate": "2024-10-23",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct Interview",
                "taskDescription": "Conduct interviews for the new QA role",
                "taskDate": "2024-10-26",
                "category": "HR"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    console.log(employees, admin);
    
}