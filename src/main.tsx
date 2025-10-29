import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';

createRoot(document.getElementById("root")!).render(<App />);