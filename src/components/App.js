import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactRouter from './R089_reactRouter';
import ReactRouter2 from './R089_reactRouter2';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <HeaderAdmin />
                <Routes>
                    <Route path="/" element={<ReactRouter />} />
                    <Route path="/reactRouter2" element={<ReactRouter2 />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;