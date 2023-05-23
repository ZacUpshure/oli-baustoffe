import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../container/Configurator/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { FormProvider } from '@/container/Configurator/Context/form.context';

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: rootReducer,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <FormProvider>
      <Component {...pageProps} />
    // </FormProvider>
  );
}
