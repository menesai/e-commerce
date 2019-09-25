import {createSelector} from 'reselect'

const selectShopData = state => state.shop

export const shopDATA = createSelector(
    [selectShopData],
        shop => shop.shopItems
)