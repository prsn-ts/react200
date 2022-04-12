import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDebounce from './R094_reactDebounce';

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
                    <Route path='/Debounce' element={<ReactDebounce />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;