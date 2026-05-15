import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./firebaseConfig"



function Fetchitems(){


const [items, setitems] = useState([])
const [edititem, Setedititem] =useState(null)

const [newname, Setnewname] = useState("")


useEffect(()=>{

const rem = onSnapshot(collection(db,"items"), (snapshot)=>{


const itemsList = snapshot.docs.map((doc)=>({

    id: doc.id,
    ...doc.data()
}))

console.log(itemsList)
setitems(itemsList)
})

return ()=> rem()
},[])

const handleDelete = async(id)=>{


try {
    
await deleteDoc(doc(db,"items",id))
alert("Data deleted Successfully")

} catch (error) {
    
}

}
//handle update 

const handleUpdate = async(id)=>{

    if(newname.trim() === ""){
        alert("Plz enter name")
        return
    }
    try {
        const itemRef = doc(db,"items", id)
        await updateDoc (itemRef,{
            name:newname
        })
        alert("data updated")
        Setedititem(null)
        Setnewname("")

    } catch (error) {
        console.log(error)
    }
}


// handle edit click
const handleEdit =  (item)=>{

Setedititem(item.id)
Setnewname(item.name)

}



return(<>

<h4> Data Items</h4>

<table>
<thead>
    <tr>
        <th> ID</th>
        <th>Name</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>
</thead>
<tbody>

{

    items.map((item)=>(
        <tr>
            <td>{item.id}</td>
             <td>
    {

    edititem === item.id?(
        <input type="text" value={newname} onChange={(e)=>Setnewname(e.target.value)}/>
    ):(

        item.name
    )}

             </td>

             <td>
                {edititem ===item.id?(

                <button  onClick={()=>handleUpdate(item.id)}>Save</button>
                ):(

                    <button  onClick={()=>handleEdit(item)}>Edit</button>
                )
                
                
                }
             </td>
             <td><button onClick={()=> handleDelete(item.id)}>Delete</button></td>
        </tr>
    ))
}

</tbody>



</table>
</>)


}

export default Fetchitems