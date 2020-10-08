import React from 'react'

export const PageHeader = ({title}) => {
    return (
        <div className='hero is-light is-bold'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    )
}
