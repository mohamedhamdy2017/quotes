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
},{
     navigationOptions : ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return{
        headerTitle:  routeName
    }
}

})

export default  createAppContainer (AppNav);