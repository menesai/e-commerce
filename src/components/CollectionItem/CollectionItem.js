import React from 'react'
import './CollectionItem.scss';
import {Label, Button} from 'semantic-ui-react'

const CollectionItem = ({name, price, id, imageUrl}) => {
    // console.log(props)
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} >
            <div id='b' >    
                <div id='c'>
                    <Button inverted>Add To Cart</Button>
                </div>
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
