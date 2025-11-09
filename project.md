# 🎧 Eternal Delusion Records --- React Website & AWS Deployment Guide

## 🩶 Project Overview

You are to create a **React single-page website** for a **hip-hop
recording label called Eternal Delusion Records**.\
Use the **attached logo** as the main inspiration: - Background: **black
(#000000)** - Foreground: **white (#FFFFFF)** - Font: **bold, geometric
sans-serif** (similar to *Montserrat ExtraBold* or *Poppins Black*)

------------------------------------------------------------------------

## ⚙️ 1. Initialize Project

``` bash
# Step 1: Create project
npx create-react-app eternal-delusion-records
cd eternal-delusion-records

# Step 2: Install TailwindCSS for styling
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 3: Configure Tailwind
# In tailwind.config.js set content to:
content: ["./src/**/*.{js,jsx,ts,tsx}"]

# Step 4: In ./src/index.css add:
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  background-color: #000;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
```

------------------------------------------------------------------------

## 🎨 2. Build the React Structure

Create the following folders and files:

    src/
     ├── components/
     │    ├── Hero.jsx
     │    ├── AboutLabel.jsx
     │    ├── ArtistSection.jsx
     │    ├── Footer.jsx
     ├── assets/
     │    └── logo.png  # use uploaded logo
     ├── App.jsx
     ├── index.css
     └── index.js

### Hero.jsx

A centered hero section showing the logo and tagline ("Reach Beyond the
Clouds") with smooth fade-in animation.

### AboutLabel.jsx

Short paragraph introducing Eternal Delusion Records: \> Eternal
Delusion Records is an independent hip-hop label built on dreams that
never die. Founded in Harding, KwaZulu-Natal, the label represents
voices reaching for higher meaning through music and storytelling.

### ArtistSection.jsx

Highlight the artist **ASSIGN**: \> Eternal Delusion Records recently
signed its first artist, *ASSIGN*, a rapper from Harding who began at 13
and now releases his introspective mixtape *"There's a Right Time for
Everything,"* executive-produced by Sam.

Include social media icons (Instagram, YouTube, X/Twitter) linked to
placeholder URLs.

### Footer.jsx

Include copyright line:

    © 2025 Eternal Delusion Records — Reach Beyond the Clouds.

------------------------------------------------------------------------

## 🌐 3. Styling Guidelines

-   Background: `#000000`
-   Primary text: `#FFFFFF`
-   Accent hover color: `#cccccc`
-   Font: `'Montserrat', sans-serif; font-weight: 700–900`
-   Center content vertically & horizontally.
-   Smooth scroll for navigation links.

------------------------------------------------------------------------

## 📦 4. Optimize + Build Static Site

``` bash
npm run build
```

This produces a `/build` folder with all static assets.

------------------------------------------------------------------------

## ☁️ AWS Deployment Steps (S3 + CloudFront)

### 1️⃣ Create an S3 Bucket

-   Name: `eternal-delusion-records`
-   Enable **Static Website Hosting**
    -   Index document: `index.html`
-   Upload contents of `/build`

### 2️⃣ Make Files Public

In the **Permissions** tab → *Bucket Policy*:

``` json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::eternal-delusion-records/*"
  }]
}
```

### 3️⃣ Create a CloudFront Distribution

-   **Origin Domain:** your S3 website endpoint\
-   **Default Root Object:** `index.html`
-   Enable **Compress objects automatically**
-   Optional: add your **custom domain** via Route 53 + ACM SSL
    certificate.

### 4️⃣ Deploy + Test

Once CloudFront finishes deploying, open the **Distribution Domain
Name** link --- your site should display the Eternal Delusion Records
homepage.

------------------------------------------------------------------------

## 🧩 Optional Enhancements

-   Add a **"Listen Now"** button linking to Spotify or YouTube.
-   Animate hero logo using **Framer Motion**.
-   Add a "Contact Us" form that sends emails via AWS SES or Formspree.
