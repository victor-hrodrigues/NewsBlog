import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class PostItem extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.textTitle}>{this.props.blogPost.title}</Text>
        <View style={styles.horizontalView}>
          <Image
            source={{uri: this.props.blogPost.urlToImage}}
            style={styles.postImage}
          />
          <Text style={styles.textDescription}>
            {this.props.blogPost.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#C3C3C3',
  },
  horizontalView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  textTitle: {
    fontSize: 20,
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textDescription: {
    fontSize: 16,
    color: '#424242',
    textAlign: 'left',
  },
  postImage: {
    width: 100,
    height: 100,
    resizeMode: 'center',
    marginRight: 10,
  },
});
