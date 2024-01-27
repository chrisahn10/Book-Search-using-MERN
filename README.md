# Book-Search-using-MERN

The Book Search application is a React-based web platform that allows users to search for books and save their favorites. It leverages GraphQL with Apollo Client for efficient data handling and Bootstrap for a responsive, user-friendly interface.

## Features

- **Search Books**: Users can search for books using the Google Books API.
- **Save Books**: Users have the option to save books to their personal list.
- **User Authentication**: The application includes user authentication for secure access to personal saved books.
- **Responsive Design**: Implemented using Bootstrap, ensuring a seamless experience across different devices.

## Technologies Used

- React.js
- Apollo Client
- Bootstrap
- GraphQL

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm

### Installation


1. **Clone the repository**
   ```bash
   git clone [repository-url]

2. **Install dependencies**
- For the server:
cd server
npm install
- For the client:
cd ../client
npm install

## Running the Application
- Use the following command to run both the client and the server concurrently:

## File Structure

- `App.jsx`: Root component that sets up the Apollo Client and routing.
- `main.jsx`: Entry point for the React application.
- `SavedBooks.jsx`: Component for displaying and managing saved books.
- `SearchBooks.jsx`: Component for searching books.
- `LoginForm.jsx` & `SignupForm.jsx`: Components for user authentication.
- `Navbar.jsx`: Navigation component.
- `App.css`: Stylesheet for the application.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
