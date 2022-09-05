import React from "react";
import './App.css';
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Stats from "./components/Content/Stats/Stats";
import Music from "./components/Content/Music/Music";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import WithRouterComponent from "./components/Content/Profile/ProfileWithRouterComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Content/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={'/'} element={<Profile/>}/>
                        <Route path={'/profile/*'} element={<WithRouterComponent/>}/>
                        <Route path={'/messages/*'} element={<DialogsContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/stats'} element={<Stats/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
