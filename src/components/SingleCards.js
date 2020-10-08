import React from 'react'

export const SingleCards = ({title,content}) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <p className='card-header-title'>
                    {title}
                </p>
            </div>
            <div className='card-content'>
                <div className='content'>
                    {content}
                </div>
            </div>
        </div>
    )
}
