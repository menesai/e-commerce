const initialState ={
  section:[
    {
      title: 'HATS',
      imageUrl: 'https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2613&q=80',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'JACKETS',
      imageUrl: 'https://www.pacsun.com/dw/image/v2/AAJE_PRD/on/demandware.static/-/Sites-pacsun-Library/default/dwf7942b4a/2019/floorsets/08/01/mens2.jpg?sw=978',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'SNEAKERS',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'WOMENS',
      imageUrl: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=919&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'MENS',
      imageUrl: 'https://images.unsplash.com/photo-1569909265601-2110fe50a54f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=951&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    },
  ]
}


const directoryReducer = (state = initialState, action) => {
    switch(action.type){


        default:
        return state
    }
}

export default directoryReducer;