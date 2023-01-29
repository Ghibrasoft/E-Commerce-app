// import { useState } from 'react';
import { Alert, Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCard } from '../context/ShoppingCardContext'
import formatCurrency from '../utilities/formatCurrency'
import { CardItem } from './CardItem'
import storeItems from '../data/items.json'
import { useAuthContext } from '../App'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleSignIn } from './GoogleSignIn'


type ShoppingCardType = {
    isOpen: boolean;
}
export function ShoppingCard({ isOpen }: ShoppingCardType) {
    const { closeCard, cardItems, clearCard } = useShoppingCard();
    const { signedIn } = useAuthContext();
    const [order, setOrder] = useState(false);


    function orderHandler() {
        clearCard();
        localStorage.clear();
        setOrder(true);
    }
    useEffect(() => {
        setTimeout(() => { setOrder(false) }, 1000)
    }, [order]);


    return (
        <Offcanvas
            show={isOpen}
            onHide={closeCard}
            placement='end'
            data-bs-scroll='true'
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Card</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <>
                    <Stack gap={3} className='mb-3'>
                        {
                            cardItems.length > 0 ? (
                                cardItems.map(item => (
                                    <CardItem key={item.id} {...item} />
                                ))
                            )
                                :
                                (
                                    <p>Card is empty</p>
                                )
                        }
                        {
                            cardItems.length > 0 &&
                            <div className='ms-auto fw-bold fs-5'>
                                Total {' '}
                                {
                                    formatCurrency(
                                        cardItems.reduce((total, cardItem) => {
                                            const item = storeItems.find(i => i.id === cardItem.id)
                                            return total + (item?.price || 0) * cardItem.quantity
                                        }, 0)
                                    )
                                }
                            </div>
                        }
                    </Stack>
                    {
                        cardItems.length > 0 &&
                        <Button
                            disabled={!signedIn}
                            className='w-100'
                            onClick={() => orderHandler()}
                        >
                            Order
                        </Button>
                    }
                    {
                        !signedIn ? (
                            <Alert variant='danger'>
                                For order <Link to='/'><GoogleSignIn /></Link>
                            </Alert>
                        )
                            : null
                    }
                    {
                        order ? (
                            <Alert variant='success'>Order success</Alert>
                        )
                            : null
                    }
                </>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
