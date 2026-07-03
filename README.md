# Bright Life Educational Institute

A premium, fast, and modern web application for **Bright Life Educational Institute** based in Mahendranagar, Nepal. Built using Next.js 16, React, and Tailwind CSS.

## 🚀 Features

* **High Performance**: Optimized using Next.js Turbopack compiler.
* **Premium Design**: Modern typographic layout, custom floating background animations, and interactive mouse parallax details.
* **Online Admission Form**: A comprehensive registration form with validation, submitting directly to your administrative email.
* **Contact Form**: Direct email delivery via Resend API integration.
* **Interactive Course Guide**: Explore tuition levels (Basic, SEE, +2, Bachelors, Masters) and Language & Career courses (TSC/Loksewa, Programming, Video Editing, etc.) with active category filtering.
* **Mobile Friendly**: Designed to look stunning on any screen width (mobile, tablet, desktop).

## 🛠️ Technology Stack

* **Framework**: [Next.js](https://nextjs.org/) (v16 App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styles**: Vanilla CSS + Tailwind CSS (v4)
* **Icons**: Iconify React Framework
* **Email Client**: [Resend API](https://resend.com)

## 📦 Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pwnjoshi/Bright-Life-Institute.git
   cd Bright-Life-Institute
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root folder and add your Resend API credentials:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_RECEIVER_EMAIL=info@brightlife.edu.np
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📐 Vercel Deployment Configuration

This project is fully configured and optimized for deployment on [Vercel](https://vercel.com).

### Quick Deploy

1. Import your repository into Vercel.
2. In the **Environment Variables** configuration section on Vercel, add:
   * Name: `RESEND_API_KEY`
   * Value: `your_resend_api_key_here` (Your Resend Key)
   * Name: `CONTACT_RECEIVER_EMAIL`
   * Value: `info@brightlife.edu.np`
3. Click **Deploy**. Vercel will automatically detect the Next.js setup, build, and optimize the bundle for production edge servers.
