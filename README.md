# Fitness Buddy

## Introduction
Fitness Buddy is a frontend web application designed to help users achieve their fitness goals by connecting them with like-minded workout partners. The application provides a seamless interface for user authentication, profile creation, buddy matching, workout tracking, and real-time messaging.

## Project Type
✅ Frontend

## Deployed App
Frontend: https://fitnessbuddy-frontend.whatever

## Directory Structure
```
fitnessbuddy/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ chatBox/
│  │  ├─ Login/
│  │  ├─ Register/
│  │  ├─ Messaging/
│  │  └─ Workout/
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ BuddiesPage.jsx
│  │  ├─ BuddyChat.jsx
│  │  ├─ PrivateRoute.jsx
│  │  └─ Profile.jsx
│  │  └─ WorkouPage.jsx
│  ├─ firebase/
│  │  └─ firebaseConfig.jsx
│  ├─ utils/
│  ├─ App.js
│  └─ index.js
└─ README.md
```

## Video Walkthrough of the Project
📹 [Project Demo](https://drive.google.com/file/d/1aMvhA195kfbFQv2RW14RcLY3ly6RAWww/view?usp=drive_link)) (1-3 mins)

## Video Walkthrough of the Codebase
📹 [Codebase Overview](link-to-video) (1-5 mins)

## Features
- **User Authentication**: Google/Email-based login and sign-up with Firebase
- **Profile Creation**: Users can set name, location, fitness goals, and workout preferences
- **Buddy Matching**: Match users based on similar fitness goals and display matched buddies
- **Workout Tracking**: Log workouts (type, duration, progress) and visualize with Recharts
- **Real-Time Messaging**: Send and receive messages with workout buddies using Firestore
- **Progress Reports**: Weekly progress analysis displayed using visual charts
- **Dark Mode Toggle**: Switch between light and dark themes
- **Find Nearby Gyms**: Suggest workout spots using Google Maps API
- **Social Sharing**: Share workout progress via social media

## Design Decisions & Assumptions
- **UI Framework**: TailwindCSS for fast and responsive styling
- **State Management**: Component-level state with React hooks
- **Routing**: React Router for seamless navigation
- **Authentication**: Firebase Authentication for secure login
- **Data Management**: Firestore for real-time storage and syncing
- **API Integration**: Google Maps API for location-based gym suggestions

## Installation & Getting Started
Follow these steps to set up and run the frontend locally:

1. Clone the Repository
```bash
git clone https://github.com/username/fitnessbuddy.git
cd fitnessbuddy/frontend
```

2. Install Dependencies
```bash
npm install
```

3. Run the Application
```bash
npm start
```

## Usage
1. **Sign Up/Login**: Sign up using Google/Email and log in securely
2. **Set Profile**: Enter name, location, fitness goals, and workout preferences
3. **Find Buddies**: Match with workout buddies and view matched users
4. **Track Workouts**: Log workout details and view progress through charts
5. **Chat with Buddies**: Send and receive messages with matched buddies
6. **Check Insights**: Generate and view weekly progress reports

## Credentials
Use the following test credentials to explore authenticated pages:
```
Email: testuser@example.com
Password: Test@123
```

## APIs Used
- **Firebase Authentication**: Google/Email-based login and sign-up
- **Firestore Database**: Storing user profiles, workout logs, and chat data
- **Google Maps API**: Gym suggestions based on user location

## Technology Stack
- **React.js**: Frontend framework for building the user interface
- **TailwindCSS**: CSS utility library for responsive and modern design
- **Firebase Authentication**: Handling secure login and sign-up
- **Firestore**: Real-time NoSQL database for storing app data
- **Recharts**: Visualizing workout progress using charts
- **Google Maps API**: Integrating location-based services
- **Framer Motion**: Adding smooth animations to enhance UI/UX
