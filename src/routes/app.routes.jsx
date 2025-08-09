import { Routes, Route } from 'react-router-dom';

import App from "../components/App/index";
import Home from "../components/Home/index";
import Info from "../components/Info/index";
import Cart from "../components/Cart/index";
import NotFound from "../components/NotFound/index";

export function AppRoutes(){
    return(
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/info/:id" element={<Info />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
    );
}