import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {shopDATA} from '../../redux/ShopRedux/shop.selector'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

const handleCollection = (info) => info.map((el) =>(
            <PreviewCollection
                key={el.id}
                title={el.title}
                items={el.items}
            />))   

const Shop = ({collection}) =>  {
           return (
            <div className='shop-page'>
                {handleCollection(collection)}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    collection: shopDATA
})

export default connect(mapStateToProps)(Shop)
