import {createSelector} from 'reselect'


const selectShopData = state => state.shop

export const shopDATA = createSelector(
    [selectShopData],
        shop => shop.shopItems
)

export const selectCategoryId = categoryUrl => createSelector(
    [shopDATA],
    category => category[categoryUrl]
)

export const selectCategoryForPreview = createSelector(
    [shopDATA],
    collection => Object.keys(collection).map(item => collection[item])
)