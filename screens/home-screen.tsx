import { RootTabScreenProps } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import clsx from 'clsx';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState('');

  const navigation = useNavigation<RootTabScreenProps<'Home'>['navigation']>();

  return (
    <View className="flex-col p-4">
      <TextInput
        className="my-4 border-b-2 border-neutral-500 py-3 text-xl"
        onChangeText={setInput}
        placeholder="Your name"
        value={input}
      />
      <Pressable
        className={clsx(
          'items-center rounded bg-blue-100 py-3 px-4 transition',
          !input ? 'opacity-50' : ''
        )}
        disabled={!input}
        onPress={() => navigation.navigate('Modal', { name: input })}
      >
        <Text className="font-bold">Go</Text>
      </Pressable>
    </View>
  );
}
