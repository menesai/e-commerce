import {createSelector} from 'reselect'

const categoryIdMap = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}

const selectShopData = state => state.shop

export const shopDATA = createSelector(
    [selectShopData],
        shop => shop.shopItems
)

export const selectCategoryId = categoryUrl => createSelector(
    [shopDATA],
    category => category.find(cat => cat.id === categoryIdMap[categoryUrl])
)