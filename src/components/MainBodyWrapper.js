import React from 'react';
import { TitleDialogue } from './TitleDialogue';
import banner from '../img/banner.png';
import { MainFooter } from './MainFooter';

export const MainBodyWrapper = () => {
    return (
        <div className='hero is-black is-bold is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns is-multiline'>
                        <div className='column is-4'>
                            <TitleDialogue />
                        </div>
                        <div className='column is-4 is-offset-4'>
                            <img src={banner} alt='banner' />
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}
