import React, { Component } from 'react'
import ShopData from './ShopData'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

class Shop extends Component {
    constructor(props){
        super(props);

        this.state={
            collection: ShopData,
                
        }
    }

    handleCollection = (info) => info.map((el) =>(
                <PreviewCollection
                    key={el.id}
                    title={el.title}
                    items={el.items}
                />
            ))
    

    render() {
        const {collection} =this.state;
        return (
            <div className='shop-page'>
                {this.handleCollection(collection)}
            </div>
        )
    }
}

export default Shop
