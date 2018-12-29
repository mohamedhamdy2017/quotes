import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import GridList from 'react-native-grid-list';



class QuotesList extends Component {
  state ={
    items : [
      { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, text: 'Alone' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Angry' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Awesome' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, text: 'Best' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Bike' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Birthday' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, text: 'Alone' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Angry' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Awesome' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, text: 'Best' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Bike' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Birthday' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, text: 'Alone' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Angry' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Awesome' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, text: 'Best' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Bike' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Birthday' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, text: 'Alone' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Angry' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Awesome' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, text: 'Best' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, text: 'Bike' },
      { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, text: 'Birthday' },
    ]
  }
  onItemPressed = (item) => {
    this.props.navigation.navigate('itemList', {item})
    console.log(item)
  }
    renderItem = ({ item, index }) => (
      <TouchableOpacity onPress={item => this.onItemPressed(item)}>
        <View key={index} style={{margin:10}}>
            <ImageBackground style={styles.image} source={item.thumbnail}>
                <View style={{ marginVertical: '70%',  backgroundColor: 'gray', padding:5, backgroundColor: 'rgba(0,0,0,0.4)'}}>
                    <Text style={{color: '#fff', textAlign: 'center'}}>{item.text}</Text>
                </View>
            </ImageBackground>
        </View>
      </TouchableOpacity>
      );
     
      render() {
        return (
          <View style={styles.container}>
            <GridList
              showSeparator
              data={this.state.items}
              numColumns={3}
              renderItem={this.renderItem}
            />
          </View>
        );
      }
    }
     
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
      },
    });

    export default QuotesList;