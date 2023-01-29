import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from '../App';
import { FcGoogle } from 'react-icons/fc';


export function GoogleSignIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const { setSignedIn } = useAuthContext();


  function signInWithGoogle() {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        setSignedIn(true);
        navigate('/store');
      })
      .catch(() => {
        setAuthing(false);
        setSignedIn(false);
      })
  }

  return (
    <Button
      variant='outline-primary'
      onClick={() => signInWithGoogle()}
      disabled={authing}>
      <div className='d-flex justify-content-center align-items-center'>
        <FcGoogle /> 
        <span className='ms-1'>Sign In With Google</span>
        {authing && <Spinner variant='primary' animation='border'></Spinner>}
      </div>
    </Button>
  )
}
