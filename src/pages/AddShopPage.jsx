import { useNavigate } from "react-router-dom"
import NewShopForm from "../components/shops/NewShopForm"
import { useAuthCtx } from "../store/AuthProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

function AddShopPage() {
  const navigate = useNavigate();
  const {login, ui, setIsLoading } = useAuthCtx();
  async function createShop(newShopObj) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), newShopObj);
      //console.log('Document written with ID: ', docRef.id);
      login(ui);
      setIsLoading(false);
      navigate('/shops');
    } catch (e) {
      console.error('Error adding document: ', e);
      const errorMessege = e.message;
      ui.showError(errorMessege);
      setIsLoading(false);
    }
  }
    return (
      <div className="container pageTop">
          <h1>Add shop page</h1>
          <h2>Fill in the form fields. If the entered data is incorrect, you will find warnings about what to correct under the input fields</h2>
          <NewShopForm onNewShop={createShop}/>
      </div>
    )
  }
  
  export default AddShopPage