
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Login from './login';
import './styles/App.css';
import { useEffect, useState } from 'react';
import Home from './home';


function App() {
  const [currentUser, setCurrentuser] =  useState(true);

  function RequireAuth( {children} ) {
    return <>{currentUser ? children : <Navigate to={"/login"} />}</>;
  }
  useEffect(()=>{
    console.log(currentUser);
  },[currentUser]);
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/">
              <Route path='/login' element={<Login setUser={setCurrentuser}/>}></Route>
              <Route index element={
              <RequireAuth>
                <Home/>
              </RequireAuth>
              }></Route>
            </Route>
            
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
