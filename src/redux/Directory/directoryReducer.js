const initialState ={
  section:[
    {
      title: 'HATS',
      imageUrl: 'https://static.zumiez.com/skin/frontend/delorum/default/images/Brixton-hats-assorted-yellow-black-061719-444x500.jpg',
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
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'MENS',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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