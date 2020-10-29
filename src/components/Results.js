import React from 'react'
import "./Result.css"



const Results =(props)=>{
    const {repos} = props;
    console.log("Repos is:", repos.data);

    const listRepos = 
    repos.length !==0 ? (
        repos.data.map((item)=>
    <li key = {item.id}>
       
            
        <div className = "item__result">
           <p>Languages : <a href ={item.html_url}>{item.language}</a></p>     
           
        </div>
        <div className = "item__result">
            <p>Topic : <a href ={item.html_url}>{item.name}</a></p>
           
        </div>
               
        </li>
        
        )
  
    ) : (

        <td>
            <tr>
                <p>No reporsitory</p>
            </tr>
            </td>
    )
    return (
     
            
      
        <ol type = "1">
          
                <tr>{listRepos}</tr>
                   
             
          
            
        </ol>
   
                
        
       
    )
}

export default Results;
