# 🚖 QuickCab  

![Expo](https://img.shields.io/badge/Expo-000?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-2C3E50?logo=clerk&logoColor=white)


A modern full-stack ride-hailing application built with **Expo, React Native, Clerk, PostgreSQL, Stripe, and Google Maps**.  
QuickCab provides a seamless booking experience, real-time location tracking, and secure payments—making it a powerful Uber-style clone to showcase your skills.  

---

## 📋 Table of Contents  
- [🤖 Introduction](#-introduction)  
- [⚙️ Tech Stack](#️-tech-stack)  
- [🔋 Features](#-features)  
- [🤸 Quick Start](#-quick-start)  

---

## 🤖 Introduction  
QuickCab is a full-stack mobile app that allows users to:  
- Register & authenticate with **Clerk**  
- Browse available rides on a **live Google Map**  
- Book trips using **real-time location services**  
- Pay securely via **Stripe integration**  
- Store rides & user data in a **serverless PostgreSQL database**  

This project demonstrates **end-to-end mobile development** using Expo and modern tools.  

---

## ⚙️ Tech Stack  

![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB)  
![Expo](https://img.shields.io/badge/Expo-000000?logo=expo&logoColor=white)  
![Clerk](https://img.shields.io/badge/Clerk-2C3E50?logo=clerk&logoColor=white)  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)  
![Google Maps](https://img.shields.io/badge/Google%20Maps-4285F4?logo=googlemaps&logoColor=white)  
![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)   

---

## 🔋 Features  
- 🚀 **Onboarding Flow** – Smooth sign-up/login experience  
- 🔑 **Clerk Authentication** – Email/password + Google OAuth  
- 🔒 **Role-based Authorization** – Secure access control  
- 🗺️ **Live Location with Google Maps** – Track rides in real time  
- 🔍 **Places Autocomplete** – Search pickup/drop locations  
- 🚗 **Book Rides from Map** – Choose cars near you  
- 📄 **Ride Confirmation** – See price, ETA & driver details  
- 💳 **Payments via Stripe** – Multiple methods supported  
- 📜 **Ride History** – View all past bookings  
- 👤 **Profile Management** – Edit user details  
- 📱 **Cross-platform UI** – Responsive on iOS & Android  

---

## 🤸 Quick Start  

### Prerequisites  
Make sure you have installed:  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/)  
- [Expo CLI](https://docs.expo.dev/get-started/installation/)  

### Clone the Repository  
```bash
git clone https://github.com/txm19/QuickCab.git
cd QuickCab
```

**Install Dependencies**
```bash
npm install
```

**Set Up Environment Variables**
Create a .env file in the root with:

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
DATABASE_URL=your-database-url
EXPO_PUBLIC_SERVER_URL=http://localhost:3000/
EXPO_PUBLIC_GEOAPIFY_API_KEY=your-geoapify-key
EXPO_PUBLIC_GOOGLE_API_KEY=your-google-api-key
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key

Replace placeholders with your credentials.

**Run the Project**
```bash
npx expo start --clear --tunnel
```
Open on your device with the Expo Go app or run in an iOS/Android simulator.




