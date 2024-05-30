import React, { useState } from "react";




function Todoio(props) {

    const [text,settext]=useState("")
        
        const handlrio=(e)=>
            {
                settext(e.target.value);
            }

        const addtodo=()=>
        {
            props.setlist((pretodo)=>
            {
                return [...pretodo,text]
               

            });
            settext(" ");
        }
        const submit=(e)=>
            {
                if(e.key==="enter")
                    {
                        return <addtodo/>;
                    }
            }
        

       

    return (
        <>
            <input onChange={handlrio} onKeyDown={submit} type="notes" value={text}></input>
            <button onClick={addtodo} type="submit">Add</button>
            <div style={{color:"red",fontWeight:"bold"}}>To-doLists</div>
        </>
    );
}





export default Todoio;
