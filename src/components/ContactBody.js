import React from 'react'
import { AddressCard } from './AddressCard'
import { SingleCards } from './SingleCards'
import { SocialMediaCard } from './SocialMediaCard'

export const ContactBody = () => {
    return (
        <div className='section'>
            <div className='container'>
                <div className='columns is-multiline'>
                    <div className='column is-3'>
                        <SingleCards 
                            title='Mobile'
                            content='+91 9160121943'
                        />
                        <br/>
                        <SingleCards 
                            title='Email address'
                            content='concentric.group007@gmail.com'
                        />
                    </div>
                    <div className='column is-6'>
                        <AddressCard addressTitle='Address' />
                    </div>
                    <div className='column is-3'>
                        <SocialMediaCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
