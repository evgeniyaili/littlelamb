import React, { useCallback, useEffect, useState } from 'react';
import { hooks } from '../../../hooks/hooks';
import ProductItem from '../productItem/productItem';
import './productList.css';

const products = [
    {id: '1', title: 'Nike AF1', price: 10000, description: 'Classical white Air Force 1'},
    {id: '2', title: 'Off-White x Nike Air Force 1 Low “Ghosting”', price: 62400, description: 'This Air Force 1 was part of Virgil Abloh “The Ten” collaboration with Nike in late 2017.'},
    {id: '3', title: 'Supreme x Nike Air Force 1 High “World Famous”', price: 64080, description: 'This Supreme x Nike Air Force 1 High dropped as part of the NYC labels FW14 collection'},
    {id: '4', title: 'Nike Air Force 1 “Crocodile 25th Anniversary”', price: 72800, description: 'Celebrating 25 years of the Air Force 1, Nike wrapped the silhouette in luxe materials for a special edition drop.'},
    {id: '5', title: 'VLONE x Nike Air Force 1 High “Black/White”', price: 92080, description: 'This Air Force 1 High came as part of A$AP Baris short-lived partnership with Nike. '},
    {id: '6', title: 'Nike Air Force 1 Low “PlayStation” (2009)', price: 200000, description: 'The second “PlayStation” Air Force 1, following the 2006 OG, was made available to friends and family in 2009.'}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc,item)=>{
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]); // state to save added items (cart)
    const {tg} = hooks();

    const onSendData = useCallback(() => {
        const data = {
         products: addedItems,
         totalPrice: getTotalPrice(addedItems)
        }
        fetch:('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })
        }, [])
    
        useEffect(()=> {
            tg.MainButton.setParams({
                text:'Send data'
        })
        }, [])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }
        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Buy ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                product={item}
                onAdd={onAdd}
                className={'item'}
                />
            ))}
        </div>
    );
 
};
export default ProductList;