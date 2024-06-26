import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewProduct = () => {

  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  const getProductData = async () => {
    const res = await fetch("http://localhost:5000/product/getbyid/" + id);
    console.log(res.status);

    const data = await res.json();
    setProductList(data);
    console.log(data);
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <div className=''>
      <div className="container">
      <Link to={"/user/ProductListing"}> <button className='bttn btn-outline-primary rounded-pill px-3 my-4'><i className=" px-2 bi bi-arrow-left-circle"></i>Products</button></Link>

        {
          productList !== null ? (
            <div className="card my-4 shadow"style={{ backgroundColor: "lavender" }}>
              <div className="row my-5">
                <div className="col-md-4">
                  <img src={"http://localhost:5000/"+ productList.image} alt="" className="img-fluid ms-3 " style={{height:"400px"}} />
                </div>
                <div className="col-md-6">
                  <h1 className='fw-bold py-4' style={{color:"darkblue", fontFamily:"initial"}}>{productList.category}</h1>
                  <h1 className='fw-bold ' style={{color:"teal", fontFamily:"initial"}}><i className="bi bi-currency-rupee fw-bold "></i>{productList.price}</h1>
                  <p className='py-4' style={{color:"black", fontFamily:"sans-serif" , fontSize:"18px"}}> {productList.longdescription}</p>
                  {/* <button className="btn btn-outline-danger "><i className="bi bi-cart px-1 "></i>Add to Cart</button> */}
                  <Link to = "/Cart"> <button className="bttn btn-outline-warning ms-2 "><i className="bi bi-bag px-1"></i>Buy Now</button></Link>
                </div>
              </div>
            </div> 
          ) : (
            <div>
            <h1>NO PRODUCT FOUND</h1>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ViewProduct