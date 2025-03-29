import './gesture-handler';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './routes/indexRoute'; 

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
