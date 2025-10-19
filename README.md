# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. It's a modern, single-page application built with Next.js 15, designed to showcase my projects, skills, and a little bit about myself. The site is fully responsive and features a clean, dark-themed interface.

**Live Demo:** [**www.yamin.com.au**](https://www.yamin.com.au)

![Portfolio Screenshot](./public/images/portfolio-1.avif)

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
  - [Environment Variables](#environment-variables)
  - [Run the Development Server](#run-the-development-server)
- [Deployment](#deployment)
- [Code Structure](#code-structure)
- [Contact](#contact)
- [License](#license)

## About The Project

This portfolio is more than just a list of projects; it's a reflection of my journey from civil engineering to software development. It highlights my focus on bridging the gap between technical teams and client visions. The design is clean and content-focused, with interactive elements designed to create an engaging user experience.

The project is built from the ground up using modern web technologies, demonstrating proficiency in React, Next.js, TypeScript, and responsive CSS. Recently migrated from Vite to Next.js 15 for improved SEO, performance, and deployment flexibility.

## Features

- **Responsive Design**: A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
- **Dark Theme**: Clean dark mode design optimized for readability and reduced eye strain.
- **Component-Based Architecture**: Built with React and Next.js, the UI is organized into logical, reusable components.
- **App Router with Client-Side Navigation**: Uses Next.js 15 App Router for fast, optimized routing. Includes dedicated routes for the homepage and a "Cafe" section.
- **Interactive Project Showcase**: Projects are displayed in a grid and open in a detailed pop-up modal, allowing for rich content like descriptions, images, and code snippets.
- **Live API Integration**: Features a real-time Weather Widget that fetches and displays current weather data for Sydney, AU from the OpenWeatherMap API.
- **Smooth Scrolling**: Anchor links for "About" and "Projects" sections provide smooth, animated scrolling for a better user experience.
- **CSS Custom Properties**: A robust set of CSS variables allows for easy theming and consistent styling across the entire application.
- **SEO Optimized**: Meta tags and Open Graph support for better social media sharing and search engine visibility.
- **TypeScript**: Full type safety throughout the application.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: CSS3 with Custom Properties (Variables) for theming, Media Queries for responsive design
- **APIs**: OpenWeatherMap API
- **Icons**: Font Awesome

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) 18+ and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/atoll101/portfolio.git
    cd portfolio
    ```

2.  **Install NPM packages:**

    ```sh
    npm install
    ```

    or if you use yarn:

    ```sh
    yarn install
    ```

### Environment Variables

This project requires an API key from OpenWeatherMap to fetch weather data.

- Create a `.env.local` file in the root of the project:

  ```sh
  cp .env.local.example .env.local
  ```

- Add your API key to the `.env.local` file. You can get a free key by signing up on the [OpenWeatherMap website](https://openweathermap.org/appid).
  ```
  NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
  ```

### Run the Development Server

```sh
npm run dev
```

or with yarn:

```sh
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```sh
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variable: `NEXT_PUBLIC_OPENWEATHER_API_KEY`
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

### Other Platforms

For other platforms, use:
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Node version: 18+

## Code Structure

The source code follows Next.js 15 App Router conventions:

```
/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Home page (about + projects)
│   ├── cafe/
│   │   └── page.tsx        # Cafe page
│   └── globals.css         # Global styles (CSS variables, responsive design)
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar with mobile menu
│   ├── WeatherWidget.tsx   # Live weather display component
│   ├── ProjectPopup.tsx    # Project modal component
│   └── ScrollToAnchor.tsx  # Hash navigation handler
├── lib/
│   └── projectsData.ts     # Projects and drinks data
├── public/
│   └── images/             # All images (.avif format)
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Contact

Yamin M - [reverb-saber.4b@icloud.com](mailto:reverb-saber.4b@icloud.com)

Project Link: [https://github.com/atoll101/portfolio](https://github.com/atoll101/portfolio)

## License

This project is open-sourced under the ISC License.
