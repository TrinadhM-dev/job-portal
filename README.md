# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


how to run the json-server API into local Machine

npm install -D json-server

Insert this into package.json
    "server":"json-server --watch src/jobs.json --port 8000"

npm run server


1. Use Effect does allow the component to have a side effects i..e., fetching data whenever the component renders and whenever we are fetching the data we are gonna keep the thoz jobs in the state