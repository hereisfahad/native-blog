import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Home from './src/screens/Home';
import { BlogProvider } from './src/contexts/Blog';
import AddBlogPost from './src/screens/AddBlogPost';
import EditBlogPost from './src/screens/EditBlogPost';
import ShowBlogPost from './src/screens/ShowBlogPost';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            headerTitle: 'Native Blog',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AddBlogPost')} style={styles.addBlog}>
                <Text>Add Blog</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddBlogPost"
          component={AddBlogPost}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="EditBlogPost"
          component={EditBlogPost}
          options={() => ({
            headerTitle: '',
          })}
        />
        <Stack.Screen
          name="ShowBlogPost"
          component={ShowBlogPost}
          options={({ navigation, route }) => {
            return ({
              headerTitle: '',
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('EditBlogPost', { blogId: route.params.blogId })} style={styles.addBlog}>
                  <Text>Edit Blog</Text>
                </TouchableOpacity>
              ),
            })
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addBlog: {
    backgroundColor: 'skyblue',
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'center'
  },
});

export default () => (<BlogProvider>
  <App />
</BlogProvider>);
