import React, {Component} from 'react'
import { View } from 'react-native'
import { Container, Header, Body, Title, Item } from 'native-base';


class QuotesListItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
         const {item} = this.props.navigation.state.params
    return(
        <Container>
        <Header>
          <Body>
            <Title>{item.text}</Title>
          </Body>
        </Header>
        </Container>
        )
    }       
}

export default QuotesListItem;