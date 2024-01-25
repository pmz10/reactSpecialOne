import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDoc, query, where } from "firebase/firestore/lite";

export const useFirestore = () => {
  const [data, , setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  

  const getData = async () => {
    console.log(auth.currentUser);
    try {
      setLoading(true);
      const dataRef = collection(db, "urls");
      const q = query(
        dataRef,
        where("uid", "==", auth.currentUser.uid)
      );
      const querySnapshot = await getDoc(q);
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDB);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    getData
  };
};
