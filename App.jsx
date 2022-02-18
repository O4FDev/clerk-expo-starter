import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
// Your frontend API goes here
const frontendApi = "clerk.[your-domain].com";
export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    }
    else {
        return (React.createElement(ClerkProvider, { frontendApi: frontendApi, tokenCache: tokenCache },
            React.createElement(SafeAreaProvider, null,
                React.createElement(Navigation, null),
                React.createElement(StatusBar, null))));
    }
}
