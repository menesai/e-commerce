import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../PreviewCollection/PreviewCollection'
import {shopDATA} from '../../redux/ShopRedux/shop.selector'


const CollectionOverview = ({collection}) => {
    return (
        <div>
            {collection.map((el) =>(
            <PreviewCollection
                key={el.id}
                title={el.title}
                items={el.items}
            />))   }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: shopDATA
})

export default connect(mapStateToProps)(CollectionOverview)
