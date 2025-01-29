
# MERN Project Documentation

FOREVER is a React-based e-commerce application designed to provide a seamless shopping experience for users. It features user authentication, product browsing, a shopping cart, and integration with Razorpay for secure payment processing. FOREVER offers a wide range of clothing items for men, women, and kids. The app also includes a cash-on-delivery option for greater flexibility in payment methods.

Through this project, I have gained a comprehensive understanding of full-stack development, utilizing React for frontend development, Node.js and Express.js for backend services, MongoDB for database management, and various third-party services such as Cloudinary for image hosting and Razorpay for payment gateway integration. The application is deployed using Vercel and Render for easy access and scalability.

## Project Structure

### 1. **Users-Frontend**
- **Purpose**: This folder contains the client-facing dashboard, designed for end-users.
- **Technologies**: ReactJS, Tailwind CSS.
- **Features**:
  - User authentication.
  - Display of shared images.
  - Integration with the backend APIs for image handling and user data.
  - Responsive design using Tailwind CSS.
- **Environment Variables**: Stored in a `.env` file.

### 2. **Backend**
- **Purpose**: This folder contains the server-side logic, common for both the admin and client dashboards.
- **Technologies**: Node.js, Express, MongoDB.
- **Features**:
  - API endpoints for user management, image uploads, and data retrieval.
  - Integration with Cloudinary for image storage.
  - Authentication and authorization using JSON Web Tokens (JWT).
  - MongoDB as the database for storing user and image data.
- **Environment Variables**: Stored in a `.env` file.

### 3. **Admin-Frontend**
- **Purpose**: This folder contains the admin dashboard, used for managing the application.
- **Technologies**: ReactJS, Tailwind CSS.
- **Features**:
  - Admin authentication.
  - Management of users and shared images.
  - Integration with backend APIs.
  - User-friendly admin panel designed with Tailwind CSS.
- **Environment Variables**: Stored in a `.env` file.

## Key Features

1. **Image Sharing**:
   - Upload and share images using Cloudinary integration.
   - Display images dynamically on the admin-frontend.

2. **Authentication**:
   - Secure login and registration for users and admins.
   - JWT-based authentication system.

3. **Responsive Design**:
   - Mobile-friendly interfaces for both the client and admin dashboards.

4. **RESTful API**:
   - Well-structured API endpoints for seamless communication between the admin-frontend and backend.

## Technologies Used

- **Frontend**: ReactJS, Tailwind CSS.
- **Backend**: Node.js, Express.
- **Database**: MongoDB.
- **Image Storage**: Cloudinary.
- **Authentication**: JSON Web Tokens (JWT).

## Folder Structure

```
root
├── users-frontend
│   ├── src
│   ├── public
│   └── .env
├── backend
│   ├── routes
│   ├── models
│   ├── controllers
│   └── .env
├── admin-frontend
│   ├── src
│   ├── public
│   └── .env
└── README.md
```

## Environment Variables

Each folder (`frontend`, `backend`, and `admin`) contains a `.env` file to manage configuration. Ensure that these files include the necessary variables, such as:

- **Users-Frontend**:
  - `REACT_APP_API_URL`: Base URL for API calls.

- **Backend**:
  - `MONGO_URI`: MongoDB connection string.
  - `CLOUDINARY_URL`: Cloudinary configuration string.
  - `JWT_SECRET`: Secret key for JWT authentication.

- **Admin-Frontend**:
  - `REACT_APP_API_URL`: Base URL for API calls.

## Installation

Follow the steps below to set up the project on your local machine:

### Prerequisites
- Node.js installed on your system.
- MongoDB instance running locally or in the cloud.
- Cloudinary account for image storage.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Set up **backend**:
   ```bash
   cd backend
   npm install
   # Create a .env file and configure the necessary environment variables
   npm start
   ```

3. Set up **users-frontend**:
   ```bash
   cd ../users-frontend
   npm install
   # Create a .env file and configure the necessary environment variables
   npm run dev
   ```

4. Set up **admin-frontend**:
   ```bash
   cd ../admin-frontend
   npm install
   # Create a .env file and configure the necessary environment variables
   npm run dev
   ```

5. Open the application in your browser and start exploring!

## Contributions
Feel free to open issues or submit pull requests for improvements or bug fixes. This project welcomes contributions from the community!
