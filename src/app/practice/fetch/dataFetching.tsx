"use client"
// import { console } from "inspector";
// import { console } from "inspector";
import {useState} from "react";
export default function FetchPage(props:any){
    // console.log(props);
    const [Item, setItem]= useState("");
    const[newsData,setnewsData]=useState<string[]>([]);
    //     function getData(){
    //     // console.log(props);
    //     props.filter((items:any)=>{
    //         return items.author===Item
    //     });
    // };
    console.log(newsData);
    return(
        <div>
          <div>
            <h1 className="font-bold text-3xl m-4">Fetch News</h1>
            {
                newsData.map((items,index)=>{
                    return(
                        <div key={index}> {items.title}</div>
                    );
                })
            }
            <div className="flex ">
                  <input onChange={(e)=>{
                    setItem(e.target.value);
                    
                  }}
                  value={Item}
                   type="text" placeholder="Enter author name" className="border-2 w-1/4 h-10 p-6 pl-4 m-4  "></input>
                  <button onClick={()=>{
                     setnewsData(props.data.filter((items:any)=>{
                        return items.author==Item;
                    }))
                  }}
                  
                   className="p-3 text-2xl cursor-pointer bg-blue-100 shadow-2xl m-4 rounded-2xl">Get news</button>
            </div>
            </div>  
        </div>
    )
}