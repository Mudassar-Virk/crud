import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db } from "./firebaseConfig"


function Additem(){

const [itemname,Setitemname] = useState('')


const handleAdditem = async()=>{


    if(itemname.trim()){

try {
    await addDoc(collection(db,"items"), {name: itemname})
alert("Data Added")
Setitemname('')
    
} catch (error) {
 
    console.error("error")
}

    }


}

return(<>

<h1> Add items to firestore</h1>

<div>
<input type="text" placeholder="enter item name"
value={itemname} onChange={(e)=> Setitemname(e.target.value)} />

<button onClick={handleAdditem}>Add item</button>


</div>

</>)

}

export default Additem