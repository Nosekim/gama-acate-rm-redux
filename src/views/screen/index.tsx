import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { gql, useQuery } from "@apollo/client";

import styles from "./styles";
import RmCard from "../../components/RmCard";
import { bookmarkStateData } from "../../features/bookmark/bookmarkSlice";
import { useSelector } from "react-redux";

const REQUEST_API = gql`
  query {
    characters {
      info {
        count
      }
      results {
        id
        name
        image
        species
        status
        origin {
          name
        }
      }
    }
  }
`;

export default function Screen() {
  const { loading, error, data } = useQuery(REQUEST_API);
  const [characters, setCharacters] = React.useState([]);
  const bookmark = useSelector(bookmarkStateData);

  useEffect(() => {
    if (data) {
      if (data.characters && data.characters.results) {
        setCharacters(data.characters.results);
      }
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;

  const FlashItem = ({ item }: any) => {
    return <RmCard item={item} />;
  };

  const FlashListComponent = () => {
    return (
      <FlashList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item: any) => item.id}
        data={characters}
        estimatedItemSize={100}
        renderItem={({ item }) => <FlashItem item={item} />}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../../assets/logorm.png")}
          style={styles.img}
        />
      </View>
      <FlashListComponent />
      <View style={styles.icon}>
        <Ionicons name="bookmark-outline" size={32} color="black" />
        <View style={styles.counter}>
          <Text style={{ color: "white" }}>{bookmark.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
