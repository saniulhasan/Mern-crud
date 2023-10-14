
# MERN Stack CRUD Application

This is a MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to perform CRUD (Create, Read, Update, Delete) operations on posts. Users can add a post with a photo, first name, last name, phone number, and location. The application includes validation for each input field, the ability to edit and delete posts, view post details, and search for posts by username.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Create Post**: Users can add a post with the following fields:
   - Photo
   - First Name
   - Last Name
   - Phone Number
   - Location

2. **Validation**: Input fields are validated to ensure data integrity and quality.

3. **Edit and Delete Posts**: Users can edit and delete existing posts.

4. **View Post Details**: Users can view the details of each post.

5. **Search by Username**: Users can search for posts by username, making it easy to find specific posts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- MongoDB database up and running.

## Installation

1. Clone this repository to your local machine:

   ```shell
  https://github.com/saniulhasan/Mern-crud.git
   ```

2. Navigate to the project directory:

   ```shell
   cd Mern-crud
   ```

3. Install the required Node.js packages for both the client and server:

   ```shell
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create a `.env` file in the `server` directory and add your MongoDB connection string. You can use the `.env.example` file as a reference.

5. Run the server:

   ```shell
   cd server
   npm start
   ```

6. Start the React client application:

   ```shell
   cd ../client
   npm start
   ```

## Usage

1. Access the application in your web browser:

   ```shell
   http://localhost:3000
   ```

2. Use the web interface to create, read, update, and delete posts. You can also search for posts by username.

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

Please be sure to follow the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md) in your interactions with the project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Customize this `README.md` with specific information about your application, including screenshots or additional details as needed. Additionally, include a license file (usually named `LICENSE.md`) if you choose to use a different license.
