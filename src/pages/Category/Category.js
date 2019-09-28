import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import {connect} from 'react-redux';
import {selectCategoryId} from '../../redux/ShopRedux/shop.selector'

const Category = ({collection}) => {
    console.log(collection)
    return (
        <div>
            <h2>Category</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategoryId(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category)
