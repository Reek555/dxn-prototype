import './App.css';
import {useEffect, useState} from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SearchPage from './pages/SearchPage'
import BlogPage from './pages/BlogPage';
import KnowMore from './pages/KnowMore'
import WhereToBuy from './pages/WhereToBuy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "/know-more" element={<KnowMore />} />
          <Route path="*" element={<NoPage />} />
          <Route path="search/:query" element={<SearchPage/>} />
          <Route path = "/where-to-buy" element = {<WhereToBuy/>}/>
          <Route path = "blogs/:blogTitle" element = {<BlogPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
