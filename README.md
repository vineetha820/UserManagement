# User Management App

A simple React app to view, search, create, and check user details. User data is loaded from the JSONPlaceholder API. New users are added to the app list after submitting the form.

## Features

- View users in cards
- Search users by name
- View full user details
- Create a user with company, address, and location details
- Basic form validation

## Tech Stack

- React
- React Router
- Tailwind CSS
- Axios
- Lucide React icons
- Create React App

## Setup Instructions

1. Clone or download this project.

2. Open the project folder:

```bash
cd UserManagement
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Creates the build files inside the `build` folder.

### `npm test`

Runs the test runner in watch mode.

## Screenshots

Screenshots are added inside `docs/screenshots/`.

### Dashboard

![Dashboard Desktop Screenshot](docs/screenshots/Dashboard.png)

![Dashboard Mobile Screenshot](docs/screenshots/Mobile-based-DashboardScreen.png)

### Search

![Search Mobile Screenshot](docs/screenshots/Mobile-SearchScreen.png)

![Search Filter With Added User Screenshot](docs/screenshots/Search%20Filter%20with%20Added%20User%20Screen.png)

### Create User Modal

![Create User Desktop Screenshot 1](docs/screenshots/createUserScreen1.png)

![Create User Desktop Screenshot 2](docs/screenshots/CreateUserScreen2.png)

![Create User Mobile Screenshot 1](docs/screenshots/Mobile-CreateUserScreen1.png)

![Create User Mobile Screenshot 2](docs/screenshots/Mobile-CreateuserScreen2.png)

### User Details Page

![User Details Desktop Screenshot](docs/screenshots/userDetails.png)

![User Details Mobile Screenshot 1](docs/screenshots/Mobie-UserDetailsScreen1.png)

![User Details Mobile Screenshot 2](docs/screenshots/Mobile-UserDetailsScreen2.png)

## Project Structure

```text
src/
  api/
    userapi.js
  Components/
    CreateUser.jsx
    Searchbar.jsx
    UserCard.jsx
    Navbar.jsx
  context/
    DataContext.jsx
  Pages/
    Dashboard.jsx
    UserDetails.jsx
  App.js
  index.js
```

## API

The app fetches user data from:

```text
https://jsonplaceholder.typicode.com/users
```

Created users are stored in state only. They will not be saved in the API.
