import { collection, getDocs } from 'firebase/firestore';
import { useFirebase } from '@/auth';

export const useFirestoreCollection = async (path: string) => {
  const { firestore } = useFirebase();

  const concreteCollection = collection(firestore, path);
  const querySnapshot = await getDocs(concreteCollection);

  return querySnapshot.docs.map(doc => doc.data())
};
