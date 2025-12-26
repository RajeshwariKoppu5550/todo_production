"use client"
import { useState, useEffect } from "react";
export default function ToDo2() {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState<string[]>([]);
    const [completedItems,setCompletedItems]=useState<string[]>([]);
    useEffect(() => {
        console.log(items);
    }, [])
    //    function deleteItem(index:number){
    //     const newItems=items.filter((_,i)=>i!==index);
    //     setItems(newItems);
    //    }
    function deleteItem(item:string,index:number){
         setCompletedItems([...completedItems,item]);
         setItems(()=>items.filter((_,i)=>{
            return index!==i;
         }))
    }
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
                        <div className="flex gap-3">
                            <div className="flex justify-between border-2 w-1/2 my-2 px-5">
                                <div className=" py-3"> {index+1}. {item} 
                                 </div>
                                 
                                <div className="text-2xl cursor-pointer" onClick={()=>{setItems(()=>items.filter((_,i)=>{
                                return index!=i
                             }))}}> ×</div>

                            </div>
                           <button onClick={()=>{
                                    deleteItem(item,index);
                                 }}
                                 className="p-2 m-2 rounded-xl bg-amber-400"> Done</button>
                             
                        </div>
                    )
                })
            }
            <h1 className="font-bold text-5xl my-5">Completed tasks</h1>
          {
            completedItems.map((item)=>{
                return (
                    
                    <div >
                        <div className=" ">
                            <div className="border-2 w-1/2 px-4 my-4 py-2 bg-green-700 ">
                               {item} 
                            </div>
                        </div>
                    </div>
                )
            })
          }
        </div>
    );
}