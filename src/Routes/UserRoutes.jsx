import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import LocalNews from '../Components/LocalNews'
import Weather from '../Components/Weather'
import UserContext from '../Context/UserContext'
import LandingPage from '../Pages/LandingPage'
import LandingPageContent from '../Components/LandingPageContent/LandingPageContent'

function UserRoutes() {
    return (
        <>
            <UserContext>
                <Routes>
                    <Route path='/' element={<LandingPage />}>
                        <Route path='/' element={<LandingPageContent />}></Route>
                        <Route path='home' element={<Home />}>
                            <Route path='localnews' element={<LocalNews />}></Route>
                            <Route path='weather' element={<Weather />}></Route>
                        </Route>
                    </Route>
                </Routes>
            </UserContext>
        </>
    )
}

export default UserRoutes