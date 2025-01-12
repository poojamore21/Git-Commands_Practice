import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {
  const[post,setPost]=useState("");
  // const[seach,setSearch]=useState("");
  // const[currentPage,setCurrentPage]=useState(1);
  // const[postsPerPage]=useState(10);
  // const[sortOrder,setSortOrder]=useState("asc");
  
  useEffect(()=>{
    const fetchdata=async()=>{
        const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response);
        setPost(response.data);

    };
    fetchdata();
  },[]);
  
//   const filteredPosts=post.filter((post)=>
//   post.title.toLowerCase().includes(seach.toLowerCase())
// );

//   const SortOrder=filteredPosts.sort((a,b)=>{
//     if(sortOrder==="asc"){
//       return a.title.localeCompare(b.title);
//     }
//     else{
//       return b.title.localeCompare(a.title);
//     }
//   })

  
  // const currentPosts=sortOrder.slice(indeOfFirstPost,indexOfLastPost);


  return (
    
    <div>
      <h1>User Data</h1>
      {/* <input type='text' placeholder='title' value={seach} onChange={(e)=>setSearch(e.target.value)}/> */}
      {/* <button onClick={SortOrder}>
        Sort:{sortOrder==="asc"?"Ascending":"Descending"}
      </button> */}
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
        </thead>
        <tbody>
          {post?.map((post)=>(
            <tr key={post.id}>

                <td>{post.id}</td>
                <td>{post.title}</td>
                
            </tr>
          ))}
        </tbody>

      </table>
      {/* <div className="pagination">
         {Array.from({length:Math.ceil(filteredPosts.length/postsPerPage) } ,(_, i)=>)}
         <button key={i+1} onClick={}>

         </button>
      </div> */}
    </div>
  )
}

export default App
