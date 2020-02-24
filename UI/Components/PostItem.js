import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { Navigation } from 'react-native-navigation';
import { selectedArticle } from './../../Redux/Blog.actions';
import { connect } from 'react-redux';

class PostItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.selectedArticle(this.props.blogPost);
          Navigation.push('NewsBlog', {
            component: {
              name: 'NewsBlog.Detail', options: {
                topBar: {
                  title: {
                    text: 'Article'
                  }
                }
              }
            },
          });
        }}>
        <View style={styles.mainView}>
          <Text style={styles.textTitle}>{this.props.blogPost.title}</Text>
          <View style={styles.horizontalView}>
            <Image
              source={{ uri: this.props.blogPost.urlToImage }}
              style={styles.postImage}
            />
            <Text style={styles.textDescription}>
              {this.props.blogPost.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedArticle }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostItem);

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
    width: 100,
    minHeight: 75,
    height: undefined,
    resizeMode: 'cover',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
});
