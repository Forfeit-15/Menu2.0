import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { useOCR } from '../context/OCRContext'; // adjust path if needed

export default function TabOneScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const { addLog } = useOCR();

  const handleCapture = async () => {
    if (!cameraRef.current) return;

    try {
      const photo = await cameraRef.current.takePictureAsync({ quality: 1 });
      const result = await TextRecognition.recognize(photo.uri);

      if (result.blocks.length > 0) {
        const text = result.blocks.map((block: { text: string }) => block.text).join('\n');
        addLog(text);
      } else {
        addLog('No text detected.');
      }
    } catch (error: unknown) {
      const err = error as { message?: string };
      addLog(`OCR Error: ${err.message || 'Unknown error'}`);
      console.error('❌ OCR Error:', error);
    }
  };


  if (!permission) {
    return <View style={styles.permissionContainer}><Text>Loading permissions...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text>No access to camera</Text>
        <Text onPress={requestPermission} style={{ color: 'blue', marginTop: 10 }}>
          Tap to grant permission
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        ref={cameraRef}
      />
      <TouchableOpacity style={styles.button} onPress={handleCapture}>
        <Text style={styles.buttonText}>Scan Text</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
