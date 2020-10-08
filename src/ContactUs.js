import React from 'react'
import { ContactBody } from './components/ContactBody'
import { PageHeader } from './components/PageHeader'

export const ContactUs = () => {
    return (
        <div>
            <PageHeader title='Contact us' />
            <ContactBody />
        </div>
    )
}
