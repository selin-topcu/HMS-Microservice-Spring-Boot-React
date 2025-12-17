import React from 'react';
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import {Outlet, Route, Routes} from "react-router-dom";
import Random from "../Components/Random";

const AdminDashboard = () => {
    return (
        <div className='flex'>

            <Sidebar/>
            <div className='w-full flex flex-col'>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminDashboard;
