Project README
================

**Overview**
This project is a full-stack application built with React, Vite, and Django. It provides a minimal setup for a production-ready application with authentication and authorization.

**Frontend**
The frontend is built with React and Vite. It uses the @vitejs/plugin-react plugin for Fast Refresh.

**Dependencies**
-react
-react-dom
-vite
-@vitejs/plugin-react
**Components**
-App: The main application component
-Home: The homepage component
-Login: The login component
-Register: The registration component
-ProtectedRoute: A protected route component that handles authentication and redirection
**Routing**
The application uses the react-router-dom library for client-side routing.

**Authentication**
The application uses a token-based authentication system. When a user logs in, a token is generated and stored in local storage. The token is then used to authenticate subsequent requests to the API.

**Backend**
The backend is built with Django. It uses the rest_framework library to provide a RESTful API.

**Dependencies**
django
rest_framework
rest_framework_simplejwt
corsheaders

**API Endpoints**
/api/token/: Generates a token for authentication
/api/token/refresh/: Refreshes an existing token
/api/users/register/: Creates a new user
/api/auth/: Handles authentication and authorization

**Models**
User: A model for users
Note: A model for notes (currently unused)

**Serializers**

UserSerializer: A serializer for users
NoteSerializer: A serializer for notes (currently unused)
Views
CreateUserView: A view for creating new users
TokenObtainPairView: A view for generating tokens
TokenRefreshView: A view for refreshing tokens

**Installation**
**To install the project, run the following commands:**
bash
CopyInsert
# Install dependencies
```npm install```

# Install backend dependencies
```uv add -r backend/requirements.txt```

# Start the frontend development server
```npm run dev```

# Start the backend development server
```uv run backend/manage.py runserver```
**Usage**
To use the application, navigate to http://localhost:3000 in your web browser. You can log in or register a new user to access the protected routes.

**Contributing**
Contributions are welcome! Please submit a pull request with your changes.

**License**
This project is licensed under the MIT License.
