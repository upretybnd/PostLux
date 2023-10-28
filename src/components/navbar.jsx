import React from 'react';
import logo from '../imgs/logo_name.png';
import Btn from './buttons';

const Nav = (props) => {
    return (
        <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-[#fffff] py-2 text-neutral-500 shadow-lg lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div className="ml-2">
                    <a className="text-xl text-neutral-800 dark:text-neutral-200" href="/">
                        <img
                            src={logo}
                            height="35"
                            width="35"
                            alt="PostLux Logo"
                            loading="lazy" />
                    </a>
                </div>
                { props.page === "landing" ? 
                (
                <div className="mr-10 float-right flex gap-5">
                    <a href="/contact" className="text-xl text-[#000]">Contact</a>
                    <a href="/login" className="text-xl text-[#000]">Login</a>
                    <Btn bg='[#000]' color='[#fff]' name='Get Started' />
                </div>
                ) :
                <div></div>}
            </div>
        </nav>
    );
}

export default Nav; 