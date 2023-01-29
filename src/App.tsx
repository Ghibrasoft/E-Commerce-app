import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { ShoppingCardProvider } from './context/ShoppingCardContext';
import { createContext, useContext, useState } from 'react';


type AuthingContextType = {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthingContext = createContext({} as AuthingContextType);
export function useAuthContext() {
  return useContext(AuthingContext);
}


function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthingContext.Provider value={{ signedIn, setSignedIn }}>
      <ShoppingCardProvider>
        <Navbar signedIn={signedIn} />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCardProvider>
    </AuthingContext.Provider>
  );
}

export default App;
