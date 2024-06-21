import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import LandingPage from '../Pages/LandingPage';
import LandingPageContent from '../Components/LandingPageContent/LandingPageContent';
import LoadingSpinner from '../Components/LoadingSpinner';

// Lazy loaded components
const Home = lazy(() => import('../Pages/Home'));
const LocalNews = lazy(() => import('../Components/LocalNews'));
const Weather = lazy(() => import('../Components/Weather'));

function UserRoutes() {
    return (
        <UserContext>
            <Routes>
                <Route path='/' element={<LandingPage />}>
                    <Route path='/' element={<LandingPageContent />}></Route>
                    <Route path='home' element={
                        <Suspense fallback={<LoadingSpinner height={'h-screen'} />}>
                            <Home  />
                        </Suspense>
                    }>
                        <Route path='localnews' element={
                            <Suspense fallback={<LoadingSpinner height={'h-screen'} />}>
                                <LocalNews />
                            </Suspense>
                        }></Route>
                        <Route path='weather' element={
                            <Suspense fallback={<LoadingSpinner height={'h-screen'} />}>
                                <Weather />
                            </Suspense>
                        }></Route>
                    </Route>
                </Route>
            </Routes>
        </UserContext>
    );
}

export default UserRoutes;
