import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useShoppingCard } from '../context/ShoppingCardContext';
import { GoogleSignIn } from './GoogleSignIn';
import { SignOut } from '../SignOut';


type NavBarProps = {
    signedIn: boolean;
}
export function Navbar({ signedIn }: NavBarProps) {
    const { openCard, cardQuantity } = useShoppingCard();

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                </Nav>
                <div className='me-3'>
                    {signedIn ? <SignOut /> : <GoogleSignIn />}
                </div>
                { 
                   cardQuantity > 0 && (
                        <Button
                            onClick={openCard}
                            style={{ width: '3rem', height: '3rem', position: 'relative' }}
                            variant='outline-primary'
                            className='rounded-circle'>
                            <HiOutlineShoppingCart />
                            <div className='bg-danger rounded-circle
                d-flex justify-content-center align-items-center'
                                style={{
                                    position: 'absolute',
                                    color: 'white',
                                    right: '0',
                                    bottom: '0',
                                    width: '1.5rem',
                                    height: '1.5rem',
                                    transform: 'translate(25%, 25%)'
                                }}>
                                {cardQuantity}
                            </div>
                        </Button>
                    )
                }
            </Container>
        </NavbarBs>
    )
}
