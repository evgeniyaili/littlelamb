import React from 'react';
import './productItem.css';
import Button from '../button';

const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    }
    return (
        <div className={'product' + className}>
            <div className={'img'}>
                <img src="../media/pic2.webp" alt="sneaker 1"/>
            </div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span> Cost: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Add
            </Button>
        </div>
    );
 
};
export default ProductItem;