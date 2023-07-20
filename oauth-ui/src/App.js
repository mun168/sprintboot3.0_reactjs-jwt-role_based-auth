import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import authService from './services/authService';
import Profile from './components/Profile';
import User from './components/User';
import Moderator from './components/Moderator';
import Admin from './components/Admin';
import EventBus from "./common/EventBus";




const App = () => {

  const [showModerator, setshowModerator] = useState(false)
  const [showAdmin, setshowAdmin] = useState(false)
  const [currentUser, setcurrentUser] = useState(undefined)


  useEffect(() => {
    const user = authService.getCurrentUser();
    if(user){
      setcurrentUser(user);
      setshowModerator(user.roles.includes("ROLE_MODERATOR"));
      setshowAdmin(user.roles.includes("ROLE_ADMIN"));
    }
    
    EventBus.on("logout", () => {
      logout();
    });

    return () => {
      EventBus.remove("logout");
    };
  
   }, [])


  const logout = () => {
    authService.logout();
    setshowModerator(false);
    setshowAdmin(false);
    setcurrentUser(undefined);
  }



  return (
    <div>
       <BrowserRouter>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link to="/home" className="text-gray-900 dark:text-white hover:underline">Home</Link>
              </li>
              {showModerator &&(
              <li>
                <Link to="/mod" className="text-gray-900 dark:text-white hover:underline">Moderator</Link>
              </li>
              )}
              {showAdmin && (
              <li>
                <Link to="/admin" className="text-gray-900 dark:text-white hover:underline">Admin</Link>
              </li>
              )}
              {currentUser ? (
              <div className='ml-auto'>
                <li>
                  <Link to="/profile" className="text-gray-900 dark:text-white hover:underline">{currentUser.username}</Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-900 dark:text-white hover:underline" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </div>
              ): (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="text-gray-900 dark:text-white hover:underline">
                      Login
                    </Link>
                  </li>
      
                  <li className="nav-item">
                    <Link to="/register" className="text-gray-900 dark:text-white hover:underline">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
       
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/mod" element={<Moderator/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
