import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PostItem from './PostItem';

export default class PostList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.blogPosts}
        renderItem={({item}) => <PostItem blogPost={item} />}
        keyExtractor={item => item.publishedAt}
      />
    );
  }
}
