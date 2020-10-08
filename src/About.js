import React from 'react'
import { AboutBody } from './components/AboutBody'
import {PageHeader} from './components/PageHeader'

export const About = () => {
    return (
        <div>
            <PageHeader title='About us' />
            <AboutBody />
        </div>
    )
}
