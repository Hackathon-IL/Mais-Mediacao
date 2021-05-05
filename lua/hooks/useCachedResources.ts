import * as Font from "expo-font";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "space-mono": require("../assets/fonts/SpaceMono.ttf"),
          'raleway':require('../assets/fonts/Raleway.ttf'),
          'roboto':require('../assets/fonts/Roboto.ttf'),
          'roboto-bold':require('../assets/fonts/Roboto-Bold.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
