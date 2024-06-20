import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import LocalNews from '../Components/LocalNews'
import Weather from '../Components/Weather'
import UserContext from '../Context/UserContext'

function UserRoutes() {
    return (
        <>
            <UserContext>
                <Routes>
                    <Route path='/' element={<Home />}>
                        <Route path='/' element={<Weather />}></Route>
                        <Route path='localnews' element={<LocalNews />}></Route>
                    </Route>
                </Routes>
            </UserContext>
        </>
    )
}

export default UserRoutes