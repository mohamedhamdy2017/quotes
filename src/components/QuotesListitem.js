import React, {Component} from 'react'
import { Container, Header, Body, Title } from 'native-base';


class QuotesListItem extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header: null
    }

    render(){
        const {item} = this.props.navigation.state.params
        console.log(this.props.navigation.state.params)
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