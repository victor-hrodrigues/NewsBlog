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
    backgroundColor: '#F6F6F6',
  },
  horizontalView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  textTitle: {
    flex: 1,
    fontSize: 20,
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textDescription: {
    flex: 2,
    fontSize: 16,
    color: '#424242',
    textAlign: 'left',
  },
  postImage: {
    flex: 1,
    resizeMode: 'cover',
    marginRight: 10,
  },
});
