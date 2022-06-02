import { RootStackScreenProps } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  const navigation = useNavigation<RootStackScreenProps<'NotFound'>['navigation']>();
  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-2xl font-bold">This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text className="mt-4 py-4 text-blue-500">Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
