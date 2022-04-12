import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContactPage, HomePage } from '../../pages'
const MainRouter = () => {
    return (
        <Routes>
            <Route activeClassName="active" path='/' element={<HomePage />} />
            <Route activeClassName="active" path='/contact' element={<ContactPage />} />
        </Routes>
    )
}

export default MainRouter