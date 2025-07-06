# Retro Portfolio with Vite + React

A modern, retro-themed portfolio built with React and Vite. Features:
- Dynamic GitHub project fetching
- Retro arcade design
- Responsive, single-page layout
- Two built-in mini-games: Tic Tac Toe (You vs Computer) and Rock Paper Scissors

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The static site will be in the `dist/` folder.

## 🎮 Games Included
- **Tic Tac Toe:** Play against a smart computer opponent.
- **Rock Paper Scissors:** Classic game, player vs computer.

## 🕹️ Features
- Retro pixel/arcade UI
- Dynamic GitHub project list (edit your GitHub username in `App.jsx`)
- Responsive design
- Custom favicon (logo.png)

## 🌐 Deployment

### Netlify (Recommended)
This project is configured for easy Netlify deployment:

1. **Push your code to GitHub**
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose your GitHub repository
   - Build settings are auto-configured:
     - Build command: `npm run build`
     - Publish directory: `dist`
3. **Deploy!** Your site will be live at a Netlify URL

### Other Options
You can also deploy the `dist/` folder to any static host:
- **GitHub Pages** ([guide](https://vitejs.dev/guide/static-deploy.html#github-pages))
- **Vercel** ([guide](https://vercel.com/docs))

## 📁 Project Structure
- `src/` — React source code
- `src/assets/` — Images and icons
- `public/` — Static files (favicon/logo)
- `src/TicTacToe.jsx` — Tic Tac Toe game
- `src/RockPaperScissors.jsx` — Rock Paper Scissors game

## 📝 Customization
- Update your GitHub username in `App.jsx` to fetch your own projects.
- Replace `logo.png` in `public/` for your own favicon.
- Edit sections and styles in `App.jsx` and `App.css`.

---
Built with ❤️ using [Vite](https://vitejs.dev/) and [React](https://react.dev/).
