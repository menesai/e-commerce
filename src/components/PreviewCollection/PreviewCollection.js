import React from 'react'
import './PreviewCollection.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const PreviewCollection = ({title, items}) => {
    // console.log(props)
    return (
        <div className='collection-preview'>
         <h1 className='title'>{title}</h1>
          <div className='preview'>
            {items.filter((item, index) => index < 4).map((item) =>(
                <CollectionItem key={item.id} item={item}/>
            )) }
          </div>  
        </div>
    )
}

export default PreviewCollection
