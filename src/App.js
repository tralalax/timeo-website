import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.scss";
import Header from "./components/Header";

import Navbar from "./components/Navbar";

// import "./Blog.scss"
// import Blog from "./components/Blog";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                {/* <Blog/> */}
            </div>
            
        );
    }
}

{/* <Router>
<Navbar />
<Routes>
    <Route path="/" element={<Header />} />
    <Route path="/home" element={<Header />} />
    <Route path="/blog" element={<Blog />} />
</Routes>
</Router> */}

export default App;