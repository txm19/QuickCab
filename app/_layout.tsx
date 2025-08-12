import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@/lib/auth";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  // Prevent auto hide splash on mount
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        // SplashScreen already hidden, ignore error
      }
    }
    prepare();
  }, []);

  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  if (!publishableKey) {
    throw new Error(
      "Missing publishable key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env",
    );
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ClerkLoaded>
      <StatusBar style="auto" />
    </ClerkProvider>
  );
}
