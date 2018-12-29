import React, {Component} from 'react'
import { View } from 'react-native'
import { Container, Header, Body, Title } from 'native-base';


class QuotesListItem extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index]
        return{
        headerTitle:  routeName
    }
}

    render(){
        // const {item} = this.props.navigation.state.params
        // console.log(this.props.navigation.state.params)
    return(
        <View />
       
        )
    }       
}

export default QuotesListItem;