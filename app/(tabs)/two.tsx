import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useOCR } from '../context/OCRContext';

export default function TabTwoScreen() {
  const { logs } = useOCR();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OCR Logs</Text>
      <ScrollView style={styles.logContainer}>
        {logs.map((log, idx) => (
          <Text key={idx} style={styles.logText}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logContainer: {
    flex: 1,
  },
  logText: {
    marginBottom: 10,
    fontSize: 16,
  },
});
