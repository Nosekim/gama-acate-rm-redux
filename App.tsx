import { ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

import client from "./src/config/apollo.config";
import Screen from "./src/views/screen";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Screen />
        </ApolloProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
