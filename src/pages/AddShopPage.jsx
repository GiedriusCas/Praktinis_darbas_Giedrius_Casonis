import { useNavigate } from "react-router-dom"
import NewShopForm from "../components/shops/NewShopForm"
import { useAuthCtx } from "../store/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

function AddShopPage() {
  const navigate = useNavigate();
  const { ui } = useAuthCtx();
  async function createShop(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj);
      console.log('Document written with ID: ', docRef.id);
      navigate('/shops');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
    return (
      <div>
          <h1>AddShopPage</h1>
          <p>This is AddShoppage</p>
          <NewShopForm onNewShop={createShop}/>
      </div>
    )
  }
  
  export default AddShopPage