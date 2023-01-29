import React, { useContext, createContext, useState } from 'react'
import { ShoppingCard } from '../components/ShoppingCard';
import { useLocalStorage } from '../hooks/useLocalStorage';


type CardItemType = {
    id: number;
    quantity: number;
}
type ShoppingCardProviderType = {
    children: React.ReactNode;
}
type ShoppingCardContextType = {
    openCard: () => void;
    closeCard: () => void;

    cardQuantity: number;
    cardItems: CardItemType[];

    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
    removeFromCard: (id: number) => void;
    clearCard: () => void;
}

const ShoppingCardContext = createContext({} as ShoppingCardContextType);

export function useShoppingCard() {   // custom hook
    return useContext(ShoppingCardContext)
}


export function ShoppingCardProvider({ children }: ShoppingCardProviderType) {
    const [cardItems, setCardItems] = useLocalStorage<CardItemType[]>('shopping-card', []);
    const [isOpen, setIsOpen] = useState(false);


    /* ===== open/close shopping button ===== */
    const openCard = () => setIsOpen(true);
    const closeCard = () => setIsOpen(false);

    /* ===== show quantity on shopping button ===== */
    const cardQuantity = cardItems.reduce((quantity, item) => item.quantity + quantity, 0);

    /* ===== get item quantity =====*/
    const getItemQuantity = (id: number) => {
        return cardItems.find(item => item.id === id)?.quantity || 0
    }
    /* ===== increase item quantity ===== */
    const increaseItemQuantity = (id: number) => {
        setCardItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    /* ===== decrease item quantity ===== */
    const decreaseItemQuantity = (id: number) => {
        setCardItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    /* ===== remove item from card ===== */
    const removeFromCard = (id: number) => {
        setCardItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }
    /* ===== clear card ===== */
    const clearCard = () => {
        setCardItems([]);
    }

    return (
        <ShoppingCardContext.Provider value={{
            getItemQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeFromCard,
            clearCard,
            cardItems,
            cardQuantity,
            openCard,
            closeCard
        }}>
            {children}
            <ShoppingCard isOpen={isOpen} />
        </ShoppingCardContext.Provider>
    )
}