# Personal Portfolio Website

This repository contains the source code for my personal portfolio website. It's a modern, single-page application built with React and Vite, designed to showcase my projects, skills, and a little bit about myself. The site is fully responsive and features a clean, dual-theme interface.

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
- [Code Structure](#code-structure)
- [Contact](#contact)
- [License](#license)

## About The Project

This portfolio is more than just a list of projects; it's a reflection of my journey from civil engineering to software development. It highlights my focus on bridging the gap between technical teams and client visions. The design is clean and content-focused, with interactive elements designed to create an engaging user experience.

The project is built from the ground up using modern web technologies, demonstrating proficiency in React, component-based architecture, and responsive CSS.

## Features

- **Responsive Design**: A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
- **Dual Theme (Light/Dark Mode)**: A sleek theme toggle that respects the user's system preference (`prefers-color-scheme`) on the first visit and saves their choice in `localStorage` for future visits.
- **Component-Based Architecture**: Built with React, the UI is organized into logical, reusable components.
- **SPA with Client-Side Routing**: Uses `react-router-dom` to create a fast, multi-page feel without page reloads. Includes dedicated routes for the homepage and a "Cafe" section.
- **Interactive Project Showcase**: Projects are displayed in a grid and open in a detailed pop-up modal, allowing for rich content like descriptions, images, and code snippets.
- **Live API Integration**: Features a real-time Weather Widget that fetches and displays current weather data for Sydney, AU from the OpenWeatherMap API.
- **Smooth Scrolling**: Anchor links for "About" and "Projects" sections provide smooth, animated scrolling for a better user experience.
- **CSS Custom Properties**: A robust set of CSS variables allows for easy theming and consistent styling across the entire application.

## Tech Stack

- **Frontend**: React, Vite
- **Routing**: React Router
- **Styling**:
  - CSS3 with Custom Properties (Variables) for theming.
  - Responsive design implemented with Media Queries.
- **APIs**: OpenWeatherMap API
- **Icons**: Font Awesome

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/atoll101/portfolio-website.git](https://github.com/atoll101/portfolio-website.git)
    cd portfolio-website
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

- Create a `.env` file in the root of the project:
  ```sh
  touch .env
  ```

````

  - Add your API key to the `.env` file. You can get a free key by signing up on the [OpenWeatherMap website](https://openweathermap.org/appid).
    ```
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

### Run the Development Server

```sh
npm run dev
```

or with yarn:

```sh
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

## Code Structure

The source code is organized within the `src/` directory, following a standard React project structure.

```
/src
├── App.css           # Main stylesheet with variables and responsive design
├── App.jsx           # Root component, handles routing and global state (theme, popup)
├── Cafe.jsx          # Component for the "/cafe" page
├── HomePage.jsx      # Component for the "About" section on the main page
├── Layout.jsx        # Main layout component with sidebar, header, and footer
├── ScrollToAnchor.jsx # Utility component for smooth scrolling to hash links
├── WeatherWidget.jsx # Component for the live weather display
├── index.css         # Global CSS resets and base styles
└── main.jsx          # The entry point of the React application
```

## Contact

Yamin M - [reverb-saber.4b@icloud.com](mailto:reverb-saber.4b@icloud.com)

Project Link: [https://github.com/atoll101/portfolio](https://github.com/atoll101/portfolio)

## License

This project is open-sourced under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for more information.
````
