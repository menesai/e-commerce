import React from 'react'
import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem'
import {connect} from 'react-redux'
import  {createStructuredSelector} from 'reselect'
import {selectDirectoryItem} from '../../redux/Directory/directory.selectors'

const passInfo = (section) => section.map(({id, ...sectionProps}) =>(
   <MenuItem key={id} {...sectionProps}/>
 ))

const Directory = ({section}) => {
      return (
            <div className='directory-menu'>
                {passInfo(section)}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    section: selectDirectoryItem
})

export default connect(mapStateToProps)(Directory)
