import { View, Text } from "react-native";
import { useGetPodcastsQuery } from "@pdcast/lib/store/services/podcasts";

function HomeScreen() {
  const { data, error, isLoading, isFetching } = useGetPodcastsQuery(null);

  console.log("isLoading:", isLoading);
  console.log("isFetching:", isFetching);
  console.log("data:", data);
  console.log("error:", error);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
