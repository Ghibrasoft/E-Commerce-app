import { Card, Button } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCard } from '../context/ShoppingCardContext';



interface IStoreItemProps {
    id: number;
    name: string;
    price: number;
    imgURL: string;
}

export function StoreItem({ id, name, price, imgURL }: IStoreItemProps) {
    const { getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCard } = useShoppingCard();
    const quantity = getItemQuantity(id);
    return (
        <Card className='h-100'>
            <Card.Img
                key={id}
                src={imgURL}
                variant='top'
                height='200px'
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex 
                justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {
                        quantity === 0 ? (
                            <Button className='w-100' onClick={() => increaseItemQuantity(id)}>+ Add to cart</Button>
                        )
                            :
                            <div className='d-flex flex-column align-items-center'
                                style={{ gap: '.5rem' }}
                            >
                                <div className='d-flex justify-content-center align-items-center'
                                    style={{ gap: '.5rem' }}
                                >
                                    <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                                    <div>
                                        <span className='fs-3'>{quantity}</span> in cart
                                    </div>
                                    <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                                </div>
                                <Button variant='danger' size='sm' onClick={() => removeFromCard(id)}>Remove</Button>
                            </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
