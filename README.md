# Quickbill

## Overview
Quickbill is designed to help users log in using Google OAuth, view details of due invoices on a SaaS platform, 
and automate the process of sending past-due invoice reminders and follow-up sequences. 
This system integrates with Zapier to trigger automation actions, demonstrating the use of third-party services, OAuth authentication, and a microservices architecture.

## Features
- **Google OAuth Login**: Secure user authentication through Google.
- **Invoice Viewing**: Display details of due invoices.
- **Automated Reminders**: Use Zapier to send reminders and follow-up emails for past-due invoices.

## Requirements
- Node.js (v14 or later)
- MongoDB
- Zapier account
- Google Developer account for OAuth 2.0 setup

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/quickbill.git
cd quickbill
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Google OAuth Setup
1. Go to the [Google Developer Console](https://console.developers.google.com/).
2. Create a new project.
3. Navigate to "OAuth consent screen" and configure your application.
4. Go to "Credentials" and create OAuth 2.0 Client IDs.
5. Add the redirect URI (e.g., `http://localhost:3000/auth/google/callback`).
6. Note the `Client ID` and `Client Secret`.

### 4. Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/quickbill
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret
ZAPIER_WEBHOOK_URL=your_zapier_webhook_url
```

### 5. MongoDB Setup
Ensure MongoDB is running on your local machine or update the `MONGODB_URI` in the `.env` file to point to your MongoDB instance.

### 6. Start the Application
```bash
npm start
```
The application will be available at `http://localhost:3000`.

## Demonstration of End-to-End Flow

### 1. Google OAuth Login
- Open your browser and navigate to `http://localhost:3000`.
- Click on "Login with Google".
- Authenticate using your Google account.

### 2. Viewing Due Invoices
- Once logged in, you will be redirected to the dashboard where you can see the list of due invoices.
- The invoice data is fetched from the database and displayed in a user-friendly format.

### 3. Triggering Automation Actions through Zapier
- When an invoice is past due, the system will automatically trigger a Zapier webhook.
- Ensure the Zapier webhook URL is configured in the `.env` file.
- The Zapier workflow will handle sending reminders and follow-up sequences.

## Microservices Architecture

### Services

1. **Auth Service**: Handles Google OAuth login and user sessions.
2. **Invoice Service**: Manages invoice data and interactions with the database.
3. **Notification Service**: Integrates with Zapier to automate reminders and follow-ups.

```

## Conclusion
This system provides a comprehensive solution for managing due invoices and automating reminders using Google OAuth and Zapier. Follow the setup instructions to get the application running locally and explore its features. For further customization and enhancements, refer to the individual service files in the `src` directory.

## Contact
For any questions or issues, please contact sranjan.education@gmail.com.
```
