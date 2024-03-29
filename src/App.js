import React,{useState} from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CreateNote from "./Component/CreateNote"
import Note from "./Component/Note";

const App=()=>{
       
    const [addItem,setAddItem]=useState([])
    const addNote=(note)=>{
    setAddItem((prevData)=>{
        return [...prevData, note]
    })

    }

    const onDelete=(id)=>{
        setAddItem((oldItem)=>
           oldItem.filter((currdata,index)=>{
               return (
                   index!==id
                )
            })
         )

    }
      return (
           <>
           <Header/>
           <CreateNote
           passNote={addNote}/>
          
           {
            addItem.map((val,index)=>{
               return (
                   <Note
                       key={index}
                       id={index}
                       title={val.title}
                       content={val.content}
                       deleteItem={onDelete}
                    />
                 )
              })
                  
            }
           <Footer/>
           </>
      )

}

export default App