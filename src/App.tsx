import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider} from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { router } from '@/router';
import { Loader } from '@/components';
import { Context, useFirebase } from '@/auth';
import { store } from '@/store';

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Context.Provider value={useFirebase()} >
          <Suspense fallback={<Loader/>}>
            <RouterProvider router={router} />
          </Suspense>
        </Context.Provider>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
