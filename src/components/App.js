import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ReactRouter from './R089_reactRouter';
// import ReactRouter2 from './R089_reactRouter2';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <HeaderAdmin />
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;