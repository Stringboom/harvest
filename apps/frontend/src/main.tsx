import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import { LanguageProvider } from "./contexts/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
