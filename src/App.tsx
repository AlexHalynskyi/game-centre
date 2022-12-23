import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { Loader } from '@/components';
import { Context, useFirebase } from '@/auth';

function App() {
  return (
    <Context.Provider value={useFirebase()} >
      <Suspense fallback={<Loader/>}>
        <RouterProvider router={router} />
      </Suspense>
    </Context.Provider>
  );
}

export default App;
