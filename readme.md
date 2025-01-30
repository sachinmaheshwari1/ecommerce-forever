
# MERN Project Documentation

Live Link - ecommerce-forever-user-frontend.vercel.app

FOREVER is a React-based e-commerce application offering a seamless shopping experience with features like user authentication, product browsing, a shopping cart, and secure payment processing via Razorpay. It also includes a cash-on-delivery option and uses Cloudinary for image hosting. The app is deployed on Vercel and Render for scalability.It is divided into three main folders: `users-frontend`, `backend`, and `admin-frontend`. Below is an overview of the project's structure, functionality, and technologies used.

## Project Structure

### 1. **Users-Frontend**
- **Purpose**: This folder contains the client-facing dashboard, designed for end-users.
- **Technologies**: ReactJS, Tailwind CSS.
- **Features**:
  - User authentication and account management.
 - Product browsing and selection.
 - Shopping cart and checkout process.
 - Integration with Razorpay for secure payment processing.
 - Cash on delivery option.
 - Image management using Cloudinary.
 - Notifications using Toastify for user-friendly alerts.
 - Responsive design using Tailwind CSS.
- **Environment Variables**: Stored in a `.env` file.

### 2. **Backend**
- **Purpose**: This folder contains the server-side logic, common for both the admin and client dashboards.
- **Technologies**: Node.js, Express, MongoDB.
- **Features**:
  - API endpoints for product management, user authentication, and order processing.
  - Integration with Razorpay for secure payments.
  - Image uploads to Cloudinary for product images.
  - Authentication and authorization using JSON Web Tokens (JWT).
  - MongoDB as the database for storing user and  product, and order data.
- **Environment Variables**: Stored in a `.env` file.

### 3. **Admin-Frontend**
- **Purpose**: This folder contains the admin dashboard, used for managing the application.
- **Technologies**: ReactJS, Tailwind CSS.
- **Features**:
  - Admin authentication.
  - Adding, updating, and tracking products.
  - Managing user orders and payments.
  - Image management through Cloudinary for product images.
  - Image management through Cloudinary for product images.
  - User-friendly admin panel designed with Tailwind CSS.
- **Environment Variables**: Stored in a `.env` file.

## Key Features

1. **Product Management**:
   - Admin can add, update, and delete clothing products.
   - Products are displayed dynamically on the user frontend.
   - Product images are managed via Cloudinary.

2. **User Shopping Experience**:
   - Browse available clothing products.
   - Add products to the cart and proceed to checkout.

3. **Payment Processing**:
   - Secure checkout process with Razorpay payment gateway.
   - Option for Cash on Delivery (COD) as an alternative payment method.
4. **Order and Payment Processing**:
   - Secure checkout using Razorpay.
   - Order tracking for both users and admins.
   - Notifications for users and admins using Toastify for a seamless experience.

5. **Authentication**:
   - Secure login and registration for users and admins.
   - JWT-based authentication system.

6. **Responsive Design**:
   - Mobile-friendly interfaces for both the client and admin dashboards.

7. **RESTful API**:
   - Well-structured API endpoints for seamless communication between the admin-frontend and backend.

## Technologies Used

- **Frontend**: ReactJS, Tailwind CSS, Toastify.
- **Backend**: Node.js, Express,  Razorpay.
- **Database**: MongoDB.
- **Payment Processing**: Razorpay, Cash on Delivery (COD).
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
  - `PAYMENT_GATEWAY_KEY`: API key for Razorpay.
- **Admin-Frontend**:
  - `REACT_APP_API_URL`: Base URL for API calls.

## Installation

Follow the steps below to set up the project on your local machine:

### Prerequisites
- Node.js installed on your system.
- MongoDB instance running locally or in the cloud.
- Cloudinary account for image storage.
- Razorpay account for handling payments.

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
   npm run server
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
