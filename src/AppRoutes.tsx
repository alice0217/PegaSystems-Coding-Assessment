import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CreateBug from './pages/createBug';
import CreateEpic from './pages/createEpic';
import CreateUserStory from './pages/createUserStory';
import MyDashboard from './pages/myDashboard';
import Spaces from './pages/spaces';
import Documents from './pages/documents';
import Bugs from './pages/bugs';
import Epics from './pages/epics';
import Goals from './pages/goals';
import Notifications from './pages/notifications';
import Recents from './pages/recents'; 
import MyApplications from './pages/myApplications';
import Account from './pages/account';
import Test from './pages/test';

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-bug" element={<CreateBug />} />
          <Route path="/create-epic" element={<CreateEpic />} />
          <Route path="/create-user-story" element={<CreateUserStory />} />
          <Route path="/my-dashboard" element={<MyDashboard />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/bugs" element={<Bugs />} />
          <Route path="/epics" element={<Epics />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/recents" element={<Recents />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/account" element={<Account />} />

          <Route path="/test" element={<Test />} />
        </Routes>
      );
}

export default AppRoutes;