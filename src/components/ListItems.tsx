import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import axios from "axios";
import { Card } from 'react-native-elements';


const baseURL = "https://jsonplaceholder.typicode.com/posts";

const ListItems = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <View>
      <FlatList
         data={post}
         //keyExtractor={({ id }) => id.toString()}
         renderItem={({ item }) => 
         <Card>
         <Text>{item.title}</Text>
         </Card>
        }
      />
    </View>
  );
}
export default ListItems;