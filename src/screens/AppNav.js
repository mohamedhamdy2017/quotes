import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import QuotesList from '../components/QuotesList';
import QuotesListItem from '../components/QuotesListitem';


const AppNav = createStackNavigator({
    list: {
        screen: QuotesList
    },
    itemList: {
        screen: QuotesListItem
    }

})

export default  createAppContainer (AppNav);