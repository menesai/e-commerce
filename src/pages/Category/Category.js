import React from 'react'
import './Category.scss'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import {connect} from 'react-redux';
import {selectCategoryId} from '../../redux/ShopRedux/shop.selector'
// import '../../components/CollectionItem/CollectionItem.scss'

const Category = ({collection}) => {
    console.log(collection)
    const {items, title} = collection;
    return (
        <div className='collection-page'>
            <h2 className="cat-title">{title}</h2>
            <div className='items-cat'>
            {items.map(el => (
                <CollectionItem key={el.id} item={el}/>
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategoryId(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category)
