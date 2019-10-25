import React from 'react'
import './MenuItem.scss';
import {withRouter} from 'react-router-dom'

const genderMenuItem = (section, history, match) =>
  section.map((el) =>(
  el.id >=4 ? (
    <div className='menu-item' onClick={() => history.push(`${match.url}${el.linkUrl}`)} key={el.id}>
    <div key={el.id} className='background-image' style={{backgroundImage: `url(${el.imageUrl})`}}/>
      <div className='content'>
        <h3 className='title'>{el.title}</h3>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  ) : null
  ))


  const categoryItems = (sec, his, mat) => sec.map(el =>(
    el.id <= 3 ? (
      <div className='menu-item-2' onClick={() => his.push(`${mat.url}${el.linkUrl}`)} key={el.id}>
      <div key={el.id} className='background-image' style={{backgroundImage: `url(${el.imageUrl})`}}/>
        <div className='content'>
          <h3 className='title'>{el.title}</h3>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    ) : null
  ))

const MenuItem = ({section, history, match}) => {
  // console.log(section)
    return (
    <div className='big-1'>
      <div className='sec-1'>
      {genderMenuItem(section, history, match)}
      </div>

      <div className='sec-2'>
        {categoryItems(section, history, match)}
      </div>
    </div>
    )
}

export default withRouter(MenuItem);
