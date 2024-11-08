
# AI SaaS Agency Landing Page

This repository contains the codebase for an AI SaaS agency landing page. The website includes dynamic features like service highlights, customer reviews, pricing, and integrated solutions for Calendly scheduling, Stripe payments, and a Nodemailer-based contact form. Built with **Next.js** and **TailwindCSS**, this site provides a modern, responsive layout with an engaging user experience.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Components](#components)
6. [Environment Variables](#environment-variables)
7. [License](#license)

---

## Project Overview

This AI SaaS agency landing page is designed to showcase the company’s AI solutions, services, and client testimonials. Key features include integration with Calendly for appointment scheduling, Stripe for secure payment processing, and Nodemailer for contact form submissions.

## Features

- **Responsive Design**: Built with TailwindCSS, ensuring adaptability across devices.
- **Dynamic Content**: Includes a slider, carousels, and interactive sections.
- **Calendly Integration**: Schedule appointments directly from the website.
- **Stripe Integration**: Supports various pricing packages and payment processing.
- **Nodemailer Contact Form**: Users can submit inquiries directly from the website.
- **Reusable Components**: Modular design with optimized, reusable components for scalability.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-saas-agency.git
   cd ai-saas-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory for environment variables (see [Environment Variables](#environment-variables) below).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` in your browser.

## Usage

### Running in Development Mode

```bash
npm run dev
```

### Building for Production

To generate an optimized production build:

```bash
npm run build
npm start
```

## Components

### Main Sections

- **Navbar**: The top navigation bar with links to sections of the website.
- **Hero Section**: A bold introduction to the agency with call-to-action buttons.
- **SliderOne**: Carousel showcasing top services or case studies.
