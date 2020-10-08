import React from 'react'

export const TitleDialogue = () => {
    return (
        <div>
            <h1 className='title'>
                Come join us to the journey of success!
            </h1>
            <hr/>
            <h3>
                Courses offered :
                <div className='tags are-normal'>
                    <span className='tag is-info'>JEE Main</span>
                    <span className='tag is-link'>JEE Advance</span>
                    <span className='tag is-danger'>AIIMS / NEET</span>
                    <span className='tag is-primary'>KVPY</span>
                    <span className='tag is-success'>NDA</span>
                    <span className='tag is-warning'>11th, 12th Foundation</span>
                </div>
            </h3>
            <br/>
            <h2 className='subtitle'>
                ADMISSIONS ARE OPEN!
            </h2>
            <hr className='dark-hr' />
            <p className='has-text-dark'>For more information</p>
            <p className='has-text-dark'>Call us : +91 9160121943</p>
            <p className='has-text-dark'>Email us : concentric.group007@gmail.com</p>
        </div>
    )
}
