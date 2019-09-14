import React from 'react'
import './CollectionItem.scss';
import {Label, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cartReducer'

const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item
    // console.log(item)
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} >
            <div id='b' >    
                <div id='c'>
                    <Button onClick={() => addItem(item)} inverted>Add To Cart</Button>
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

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
