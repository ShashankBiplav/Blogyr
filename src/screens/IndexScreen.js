import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { blogPosts, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="AddPost" onPress={() => addBlogPost()} />
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
