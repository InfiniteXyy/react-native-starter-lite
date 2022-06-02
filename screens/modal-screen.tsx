import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParamList } from '@/navigation/types';

export default function ModalScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Modal'>>();

  return (
    <View className="bg-transparent p-4">
      <Text className="text-xl font-bold">Hello {route.params.name}</Text>
    </View>
  );
}
