import React from 'react'
import './CollectionItem.scss';
import {Label, Reveal, Image} from 'semantic-ui-react'

const CollectionItem = ({name, price, id, imageUrl}) => {
    // console.log(props)
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} >
                <div className='shadow'>
                    <span className='add-cart'>Add to cart</span>
                </div>
            </div>

            <div className='collection-footer'>
                <Label size='medium' className='name'>{name}</Label>
                <Label tag className='price'>${price}.00</Label>
            </div>
        </div>
    )
}

export default CollectionItem
