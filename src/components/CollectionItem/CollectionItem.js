import React from 'react'
import './CollectionItem.scss';
// {id, name, imageUrl, price}
const CollectionItem = ({name, price, id, imageUrl}) => {
    // console.log(props)
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
}

export default CollectionItem
