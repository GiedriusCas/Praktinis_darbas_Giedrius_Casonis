import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import { useAuthCtx } from '../store/AuthProvider';
import Grid from '../components/ui/grid/Grid';
import Card from '../components/ui/card/Card';
import './shopsPage.scss';

function ShopsPage() {
  const { ui } = useAuthCtx();
  const [shopsArr, setShopsArr] = useState([]);

  useEffect(() => {
    async function getShops() {
      try {
        const querySnapshot = await getDocs(collection(db, 'shops'));
        const tempShops = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          tempShops.push({ uid: doc.id, ...doc.data() });
        });
        console.log('tempShops ===', tempShops);
        setShopsArr(tempShops);
      } catch (error) {
        ui.showError('Only registered users');
      }
    }
    getShops();
  }, [ui]);

  return (
    <div className="container">
      <h1>ShopsPage</h1>
      <p>This is Shopspage</p>
      <Grid>
        {shopsArr.map((pObj) => (
          <Card>
          <li key={pObj.uid}>
            <img src={pObj.imageUrl} alt="shop logo" />
            <div>
              <h2>{pObj.shopName}</h2>
              <p>{pObj.description}</p>
              <p>{pObj.town}</p>
              <p>{pObj.startYear}</p>
            </div>
          </li>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default ShopsPage;
