import { getUser } from "react";
import { Routes, Route, redirect, useLocation } from "react-router-dom";
import Component from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  //   const loader = async () => {
  //     const user = await getUser();
  //     if (!user) {
  //       return redirect("/not-found");
  //     }
  //   };

  const location = useLocation();

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="not-found" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
