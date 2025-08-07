import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/index';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    );
}