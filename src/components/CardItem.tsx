import { Stack } from 'react-bootstrap';
import { useShoppingCard } from '../context/ShoppingCardContext'
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import { Button } from 'react-bootstrap';


type CardItemsType = {
    id: number;
    quantity: number;
}
export function CardItem({ id, quantity }: CardItemsType) {
    const { removeFromCard } = useShoppingCard();
    const item = storeItems.find(item => item.id === id);

    if (item == null) return null;

    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            {/* Stack Item image */}
            <img src={item.imgURL} alt=''
                style={{ width: '125px', height: '75px', objectFit: 'cover' }}
            />
            {/* Stack Item name and price */}
            <div className='me-auto'>
                <div className='text-muted'>
                    {item.name} {' '}
                    {
                        quantity > 1 &&
                        <span className='text-muted' style={{ fontSize: '.65rem' }}>
                            x{quantity}
                        </span>
                    }
                </div>

                <div className='text-muted' style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>

            {/* Stack Item SUM of price */}
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCard(item.id)}>
                &times;
            </Button>
        </Stack>
    )
}
