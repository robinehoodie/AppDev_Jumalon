import React, { useState, useEffect} from 'react';



function Product(){
    const [product, setProduct] = useState(null);
    const url= 'https://api.genshin.dev'
    useEffect(()=>{
        fetch(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

   if(product){
        return(
            <div>
                hel
                <h1> {product.artifacts}</h1>
            </div>
        );
   } 
   
   return(
        <div>
             hello
        </div>
    );
    

}

export default Product;