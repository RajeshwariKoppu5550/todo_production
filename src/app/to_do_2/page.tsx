"use client"
import { useState, useEffect } from "react";
export default function ToDo2() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        console.log(items);
    }, [])
    //    function deleteItem(index:number){
    //     const newItems=items.filter((_,i)=>i!==index);
    //     setItems(newItems);
    //    }
    function handledAdd() {
        if (inputValue.trim() === "") {
            return
        }
        setItems([...items, inputValue]);
        setInputValue("");

    }
    return (
        <div>
            <h1>To Do 2 Page</h1>
            <input type="text" className="border-2 p-2 my-5"
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                value={inputValue} />
            <button onClick={handledAdd}
                className="bg-black text-amber-50 p-2 m-2 rouns">Add todo</button>
            {
                items.map((item,index)=>{
                    return (
                        <div>
                            <div className="flex justify-between border-2 w-1/4">
                                <div className=""> {index+1}. {item} 
                                 </div>
                                <div className="text-2xl cursor-pointer" onClick={()=>{setItems(()=>items.filter((_,i)=>{
                                return index!=i
                             }))}}> ×</div>

                            </div>
                           
                             
                        </div>
                    )
                })
            }
          {/* */}
        </div>
    );
}