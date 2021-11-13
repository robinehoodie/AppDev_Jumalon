import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  
  const [product, setProduct] = useState(null);
  const url= 'https://meme-api.herokuapp.com/gimme';
  
  useEffect(()=>{
    axios(url)
        .then(response => {
            setProduct(response.data);
        })
       
}, [url])

  if(product){
        return(
            <div>
              
              <center>
                <h1> Want Random Memes? </h1>
               
                {console.log(product)}
                <h2> {product.title}</h2>
                <img src={product.preview[4]} 
                alt= {product.name}
                />
                <h2> Author: {product.author}</h2>
                <h3> Refresh if you want to see new one</h3>
                </center>
                <h5>PS: sorry kaayo if mao ra ni akong na buhat sir. Hinay kaayo akong data and nawala among net :(</h5>
            </div>
        );
  } 
  
  return(
        <div>
              
        </div>
    );
    
}

export default App;
