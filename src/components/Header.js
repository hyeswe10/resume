import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    return (
        <div id='header'>
            <div className='left'>
                <div className='img'></div>
                <div className='info'>
                    <div className='top'>
                        <h1>문정우</h1>
                        <p className='bold'>FRONTEND DEVELOPER</p>
                        <p>근본 원인을 찾아 개선하는 프론트엔드 개발자</p>
                    </div>
                    <div className='bottom'>
                        <div className='email'>
                            <MdOutlineEmail />
                            <p>krihel1107@gmail.com</p>
                        </div>
                        <div className='github'>
                            <IoIosLink />
                            <p>github.com/hyeswe10</p>
                        </div>
                        <div className='phone'>
                            <CiPhone />
                            <p>010-7365-1605</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <a href='https://hyeswe10.github.io/mportfolio' target='_blank' rel='noopener noreferrer' className='portfolio'>포트폴리오<GoArrowUpRight /></a>
                <a href='https://hyeswe10.github.io/cover-letter/' target='_blank' rel='noopener noreferrer' className='cover'>자기소개서<GoArrowUpRight /></a>
            </div>
        </div>
    );
};

export default Header;