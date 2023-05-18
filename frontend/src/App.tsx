import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";

import React from 'react';
import {ReactComponent as GithubIcon} from 'Vector.svg';
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from 'components/Navbar';
import './index.css';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route path="/form">
        <Route path=":movieId" element={<Form />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )

}
export default App;
