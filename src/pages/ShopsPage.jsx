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
          //console.log(`${doc.id} => ${doc.data()}`);
          tempShops.push({ uid: doc.id, ...doc.data() });
        });
        //console.log('tempShops ===', tempShops);
        setShopsArr(tempShops);
      } catch (error) {
        ui.showError('Only registered users');
      }
    }
    getShops();
  }, [ui]);

  return (
    <div className="container pageTop">
      <h1>Shops page</h1>

      {shopsArr.length !== null ? (
        <>
          <h2>Parduotuvės atvaizduotos iš 'shops' Firebase</h2>
          <Grid>
            {shopsArr.map((pObj) => (
              <Card>
                <li key={pObj.uid}>
                  <img
                    className="shopsImg"
                    src={pObj.imageUrl}
                    alt="shop logo"
                  />
                  <div>
                    <h3 className="shopsText">
                      <span>Parduotuvė: </span>
                      {pObj.shopName}
                    </h3>
                    <p className="shopsText">
                      <span>Aprašymas: </span>
                      {pObj.description}
                    </p>
                    <h4 className="shopsText">
                      <span>Miestas: </span> {pObj.town}
                    </h4>
                    <h4 className="shopsText">
                      <span>Įkurta: </span> {pObj.startYear}
                    </h4>
                  </div>
                </li>
              </Card>
            ))}
          </Grid>
        </>
      ) : (
        <h2>Šiuo metu parduotuvių nerasta</h2>
      )}
    </div>
  );
}

export default ShopsPage;
