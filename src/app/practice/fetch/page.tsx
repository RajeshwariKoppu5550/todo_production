import FetchPage from "./dataFetching"
export default async function FetchData() {
    // const API_KEY = "YOUR_API_KEY";
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=ca3980d8dd6048a4962231c2a41ed7f4`
    );
    const data = await res.json();
    // console.log(data.articles);
    // console.log("Fetch Page Rendered");
    return (
        <div>
            <h1>Fetch Page</h1>
            <FetchPage data={data.articles} />
        </div>
    )
}



// // "use client";
// // export default async function FetchPage() {
// //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
// //   const data = await res.json();
// // }
