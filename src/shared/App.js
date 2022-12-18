import React, { useState } from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import {Route, Router, Routes} from 'react-router-dom'
import routes from './routes'
import './styles.css'
function App() {
  return (
    <div className="px-32 text-center">
      <Header />
      <Routes>
          {routes.map(({ path, component: C }) => (
            <Route
              key={path}
              path={path}
              element={<C />}
            />
          ))}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
