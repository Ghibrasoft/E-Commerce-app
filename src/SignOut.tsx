import { getAuth, signOut } from 'firebase/auth'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './App';
import { useShoppingCard } from './context/ShoppingCardContext';

export function SignOut() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { setSignedIn } = useAuthContext();
  const { clearCard } = useShoppingCard();


  return (
    <Button
      variant='outline-danger'
      onClick={() =>
        signOut(auth)
          .then(() => {
            setSignedIn(false);
            clearCard();
            localStorage.clear();
            navigate('/');
          })
      }>
      Sign out
    </Button>
  )
}
