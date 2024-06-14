import React, { useState, useEffect } from 'react'
import useProductContext from '../context/ProductContext';
import { Link } from 'react-router-dom'

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const [masterList, setMasterList] = useState([]);
    const { addItemToCart, isInCart } = useProductContext();

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/product/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setProducts(data)
            setMasterList(data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    const displayProducts = () => {
        return products.map((item) => (

            <div className="col-md-3 g-2">
                <div className="cards shadow"  >
                    <img src={"http://localhost:5000/" + item.image} className="card-img-top p-3" style={{ height: 300 }} />
                    <div className="card-body " style={{ height: 150 }}>
                        <h3 className="card-title">{item.name}</h3>
                        <h5 className="card-title">{item.category}</h5>
                        <h5 className="card-title">{item.price}</h5>

                        {/* <p className="card-text">
                           {item.description}
                        </p> */}


                    </div>
                    <div className="card-footer">
                        <div className='text-center'>
                            <button
                                disabled={isInCart(item)}
                                onClick={(e) => addItemToCart(item)}
                                className='btn btn-warning me-2 px-2'>
                                <span>{isInCart(item) ? "Added" : "Add to Cart"}</span>
                            </button>
                            <Link to={"/user/ViewProduct/" + item._id} ><button className='buton btn btn-primary'>View</button></Link>
                        </div>
                    </div>
                </div>


            </div>
        ))
    }

    const applysearch = (e) => {
        const value = e.target.value;
        setProducts(masterList.filter((products) => {
            return products.category.toLowerCase().includes(value.toLowerCase());
        }));
    }

    const filterbyCategory = (category) => {
        console.log(category)
        const filtercategory = masterList.filter(cat => cat.category.toLowerCase().includes(category.toLowerCase()));
        setProducts(filtercategory)
    }

    return (
        <div>
            <header className='bg-body-tertiary' style={{ backgroundColor: "lightblue" }}>
                <div className="container py-5">
                    <p className='text-center fw-bold ' style={{ fontSize: "35px", fontFamily: "initial", color: "black" }}>ALL PRODUCTS</p>
                    <input onChange={applysearch} type='search' id='default-search' placeholder='Search Products' className='form-control w-75 m-auto' />
                </div>
               <div className='flex justify-evenly mt-3 '>
                    <button className='bg-black text-black  hover:text-black py-2 px-4 border m-5'
                        id="showpieces" onClick={(e) => filterbyCategory("showpiece")}>Showpieces </button>   
                        <button className='bg-black text-black  hover:text-black py-2 px-4 border m-5'
                        id="showpieces" onClick={(e) => filterbyCategory("customized gift")}>Customized Gifts </button>   
                    <button className='bg-black text-black  hover:text-black py-2 px-4 border m-5'
                        id="showpieces" onClick={(e) => filterbyCategory("craft making ")}>Craft Making Kit </button>                 
                    <button className='bg-black text-black  hover:text-black py-2 px-4 border m-5'
                        id="handmade items" onClick={(e) => filterbyCategory("handmade item")}>Handmade Items</button>
                    <button className='bg-black text-black  hover:text-black py-2 px-4 border m-5'
                        id="homedecor" onClick={(e) => filterbyCategory("home decor")}>Home Decors</button>
                </div>
            </header>

            <div className="container mt-5">
                <div className="row mt-5 p-5">
                    {displayProducts()}
                </div>
            </div>
        </div>
    )
}

export default ProductListing