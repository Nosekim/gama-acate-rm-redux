import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

import styles from "./styles";
import {
  bookmarkStateData,
  toggleBookmarks,
} from "./../../features/bookmark/bookmarkSlice";
import { Character } from "../../models/characterType";
import { findPositionById } from "../../utils/utils";
interface Props {
  item: Character;
}

export default function RmCard({ item }: Props) {
  const bookmark = useSelector(bookmarkStateData);
  const dispatch = useDispatch();
  const { image, name, id } = item;
  return (
    <TouchableOpacity onPress={() => dispatch(toggleBookmarks(id))}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image source={{ uri: image }} style={styles.img} />
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.text}>{name}</Text>
        </View>
        <Ionicons
          name="star-outline"
          size={32}
          color={
            findPositionById(item.id, bookmark) === -1 ? "lightgray" : "#fdcc00"
          }
        />
      </View>
    </TouchableOpacity>
  );
}
