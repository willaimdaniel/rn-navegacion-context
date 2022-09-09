import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationPrivider } from './context/NavegationContext';
import Router from './routes/Router';
import BarNavegation from './routes/BarNavegation';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationPrivider>
        <BarNavegation/>
        <Router />
        <StatusBar
          hidden={false}
        />
      </NavigationPrivider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
