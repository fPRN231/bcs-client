import React from 'react';
import ReactDOM from 'react-dom/client';
import './client/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements } from 'react-router-dom';
import Login from './client/login/Login';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Home from './client/components/home/Home';
import Booking from './client/components/patient/booking/Booking';
import BookingSuccess from './client/components/patient/booking-success/BookingSuccess';
import Checkout from './client/components/patient/checkout/Checkout';
import Dashboard from './client/components/patient/dashboard/Dashboard';
import DoctorProfile from './client/components/patient/doctorprofile/DoctorProfile';
import PatientChat from './client/components/patient/chat/PatientChat';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='patient'>
        <Route index element={<Dashboard />} />
        <Route path='booking-success' element={<BookingSuccess />} />
        <Route path='booking' element={<Booking />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='doctor-profile' element={<DoctorProfile />} />
        <Route path='patient-chat' element={<PatientChat />} />

      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
