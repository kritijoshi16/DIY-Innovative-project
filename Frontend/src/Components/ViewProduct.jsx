import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:3000/product/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.pname}</h2>
      <h3>{product.pprice}</h3>
      <h3>{product.pdescription}</h3>
      <div className="col-md-3 g-2">
                <div className="cards shadow"  >
                    <img src={"http://localhost:5000/"+item.image} className="card-img-top p-3" style={{height:300}} />
                    <div className="card-body " style={{height:150}}>
                        <h3 className="card-title">{item.name}</h3>
                        <h5 className="card-title">{item.price}</h5>
                        {/*<h5 className="card-title">{item.price}</h5>*/}
                         <p className="card-text">
                           {item.description}
                        </p> 
                       
                        
                    </div>
                    <div className="card-footer">
                    <div className='text-center'>
                          <button
                          disabled={isInCart(item)}
                          onClick={(e) => addItemToCart(item)}
                          className='btn btn-warning me-2 px-2'>
                            <span>{isInCart(item) ? "Added" : "Add to Cart"}</span>
                          </button>

                        </div>
                    </div>
                </div>


            </div>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default ViewProduct