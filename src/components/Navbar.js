import React from 'react'
import 'tailwindcss/base.css';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/main logo.svg';

function Navbar() {
    return (
        <div id="navbar" className='w-full flex mt-8 items-center'>
            <span id="logo" className='inline-block ml-24'>
                <img src={Logo} alt="" />
            </span>
            <div id="navLinks" className='flex items-center ml-auto mr-8 gap-10'>
                <Link to="/">Home</Link>
                <Link to="/flashcard">Flashcard</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/login" className='bg-login-gradient p-3 text-white rounded-full'>Login</Link>
            </div>
        </div>
    );
}

export default Navbar;