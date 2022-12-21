import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { Loader } from '@/components';

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
