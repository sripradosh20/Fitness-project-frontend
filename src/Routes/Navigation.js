import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplitLandingPage from '../Components/baselanding';
import UserSection from '../Components/clientlogs';
import Wrkout from '../Components/workouts';
import BmiCalculator from '../Components/bmi';
import Wrkchest from '../Components/wrkchest';
import Wrkback from '../Components/wrkback';
import Wrksholder from '../Components/wrksholder';
import Clhome from '../Components/clienthome';
import ProfileCard from '../Components/trainer';
import Tlogs from '../Components/Tlogin/trainerlogs';
import UserManagement from '../Components/Trainer  page/Tbase';
import DietPlanUpload from '../Components/Trainer  page/updiet';
import ContactForm from '../Components/contactus';
import PremiumPlanUpdate from "../Components/Trainer  page/PremiumPlanUpdate"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplitLandingPage />} />
        <Route path="/client" element={<UserSection />} />
        <Route path="/clhome" element={<Clhome />} />
        <Route path="/wrkout" element={<Wrkout />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/tra" element={<ProfileCard />} />
        <Route path="/wrkchest" element={<Wrkchest />} />
        <Route path="/wrkback" element={<Wrkback />} />
        <Route path="/wrksholder" element={<Wrksholder />} />
        <Route path="/tlog" element={<Tlogs />} />
        <Route path="/thome" element={<UserManagement />} />
        <Route path="/upload-diet-plan/:userId" element={<DietPlanUpload/>} />
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/plan" element={<PremiumPlanUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
