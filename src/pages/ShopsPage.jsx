import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';

function ShopsPage() {
  const [shopsArr, setShopsArr] = useState([]);

  useEffect(() => {
    async function getShops() {
      const querySnapshot = await getDocs(collection(db, 'shops'));
      const tempShops = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tempShops.push({uid: doc.id, ...doc.data()})
      });
    console.log('tempShops ===', tempShops);
      setShopsArr(tempShops)
    }
    getShops();
  }, []);

  return (
    <div>
      <h1>ShopsPage</h1>
      <p>This is Shopspage</p>
      <ul>
        {shopsArr.map((pObj) =>(
          <li key={pObj.uid}>
            <img src={pObj.imageUrl} alt="shop logo" />
            <div>
            <h3>{pObj.shopName}</h3>
            <p>{pObj.description}</p>
            <p>{pObj.town}</p>
            <p>{pObj.startYear}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsPage;
