import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class PostDetail extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.textTitle}>{this.props.blogArticle.title}</Text>
        <Text style={styles.textLeftSmall}>
          Fonte: {this.props.blogArticle.source.name + this.props.blogArticle.author}
        </Text>
        <Text style={styles.textLeftSmall}>
          Link da notícia:
           <Text style={styles.textLink}>{this.props.blogArticle.source.url}></Text>
        </Text>
        <Image
          source={{ uri: this.props.blogArticle.urlToImage }}
          style={styles.postImage}
        />
        <Text style={styles.textDescription}>
          {this.props.blogArticle.content}
        </Text>
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
    fontSize: 24,
    color: '#222222',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription: {
    flex: 1,
    fontSize: 16,
    color: '#424242',
    textAlign: 'left',
  },
  textLeftSmall: {
    flex: 1,
    fontSize: 10,
    color: '#222222',
    textAlign: 'left',
  },
  textLink: {
    flex: 1,
    fontSize: 10,
    color: '#0000EE',
    textAlign: 'center',
  },
  postImage: {
    flex: 1,
    resizeMode: 'cover',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
  },
});
