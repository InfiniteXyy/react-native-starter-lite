import useCachedResources from '@/hooks/use-cached-resources';
import Navigation from '@/navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TailwindProvider, useColorScheme } from 'tailwindcss-react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { colorScheme } = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TailwindProvider>
          <Navigation colorScheme={colorScheme} />
        </TailwindProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
