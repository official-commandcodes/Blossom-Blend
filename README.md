# MERN E-Commerce Project

This is a full-stack e-commerce project built using the MERN stack. It includes a frontend developed with React.js, a backend with Node.js and Express.js, and a MongoDB database.

## Table of Contents

-    [Link to Section](#Getting Started)
     -                                                                                                  Prerequisites
     -    Installation
-                                                                                                    Project Structure
-                                                                                                    Features
-                                                                                                    Technologies Used
-                                                                                                    Usage
-                                                                                                    Contributing

## Getting Started

### Prerequisites

Node.js and npm installed on your machine
MongoDB installed and running locally

### Installation

-    Clone the repository:
     git clone https://github.com/Musa-kabeer/Blossom-Blend.git

-    Install dependencies for the server and client:
     cd Blossom-Blend
     cd client
     npm install
     cd server
     npm install
     Set up environment variables:

-    client

     -    VITE_GOOGLE_CLIENT_ID=Your-google-client-id

-    server
     -                                                        NODE_ENV=development
     -                                                        MONGODB_URL=your-mongodb-uri
     -                                                        EMAIL_FROM=your-email
     -                                                        EMAIL_FROM_PASSWORD=password
     -                                                        HASH_ROUNDS=preferred-hash-rounds
     -                                                        JWT_SECRET=your-jwt-secret
     -                                                        STRIPE_SECRET_KEY=stripe-secret-key
     -                                                        STRIPE_WEBHOOK_SECRET=stripe-webhook-secret

Start the server and client:

#### Start the server (from the root directory)

npm run start(dev mode)

#### Start the client (from the 'client' directory)

npm run dev

The project should now be running locally.

## Features

User authentication and authorization
Product listing, details, and search functionality
Shopping cart and checkout process
Order history and user profiles

## Technologies Used

MongoDB
Express.js
React.js
Node.js
JWT for authentication
Bcrypt for password hashing
react-query for easy fetching of data
@react-oauth/google (client) for google authentication and google-auth-library for fetching user data on the server
@stripe/stripe-js for checkout payment method

## Usage

Create an account or log in.
Browse products, add them to the cart.
Proceed to checkout and complete the order.

## Contributing

Feel free to open issues and pull requests for any improvements or features you'd like to add.
