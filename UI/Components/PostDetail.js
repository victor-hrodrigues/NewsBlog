import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class PostDetail extends Component {
  render() {
    console.log(this.props.blogArticle.urlToImage);
    return (
      <ScrollView >
        <View style={styles.mainView}>
          <Text style={styles.textTitle}>{this.props.blogArticle.title}</Text>
          <Text style={styles.textLeftSmall}>
            Fonte: {this.props.blogArticle.source.name}
          </Text>
          <Text style={styles.textLeftSmall}>
            Link da notícia:
           <Text style={styles.textLink}>{this.props.blogArticle.source.url}</Text>
          </Text>
          <Image
            source={{ uri: this.props.blogArticle.urlToImage }}
            style={styles.postImage}
          />
          <Text style={styles.textDescription}>
            {this.props.blogArticle.content}
          </Text>
        </View>
      </ScrollView>
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
    fontSize: 12,
    color: '#222222',
    textAlign: 'left',
  },
  textLink: {
    flex: 1,
    fontSize: 12,
    color: '#0000EE',
    textAlign: 'center',
  },
  postImage: {
    flex: 1,
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    minHeight: 200,
    height: undefined,
    resizeMode: 'cover',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: '#646464',
  },
});
