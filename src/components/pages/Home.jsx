import React from "react";
import "./Home.css";
import Navigation from "../Navigation";
import LandingPage from "./LandingPage";
import Chat from "./Chat";
import Alumni from "./Alumni";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Upload from "./Upload";

export default function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Routes>
        <Route path="/app" element={<LandingPage />} />
        <Route path="/app/chat" element={<Chat />} />
        <Route path="/app/alumni" element={<Alumni />} />
        <Route path="/app/todo" element={<Todo />} />
        <Route path="/app/file-upload" element={<Upload />} />
      </Routes>
    </div>
  );
}
