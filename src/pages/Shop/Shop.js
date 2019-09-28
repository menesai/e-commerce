import React from 'react'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import {Route} from 'react-router-dom';
import Category from '../Category/Category';

const Shop = ({match}) =>  {
           return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}/>
                <Route path={`${match.path}/:categoryId`} component={Category}/>
            </div>
        )
}


export default Shop
