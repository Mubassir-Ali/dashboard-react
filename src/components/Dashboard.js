import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import MainDB from './MainDB1';
import SecondaryDB from './SecondaryDB';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className='h-fit absolute inset-0 -z-10 flex bg-header'>
            <Sidebar />
            <div className='pt-28 pb-10 px-10 flex flex-col  flex-1 bg-gray-200 space-y-5'>
          <Routes>
              <Route path='/' element={<MainDB />} />
              <Route path='/insights' element={<SecondaryDB />} />


          </Routes>
            </div>
        </section>
      </BrowserRouter>
    </>
  )
}
