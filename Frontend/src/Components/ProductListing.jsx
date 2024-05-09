import React, { useState, useEffect } from 'react'

const ProductListing = () => {
    const [products, setProducts] = useState([])
    const [masterList, setMasterList] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/product/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setProducts(data)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    const displayProducts = () => {
        return products.map((item) => (

            <div className="col-md-3 g-2">
                <div className="card shadow"  >
                    <img src={"http://localhost:5000/"+item.image} className="card-img-top p-3" style={{height:300}} />
                    <div className="card-body " style={{height:150}}>
                        <h3 className="card-title">{item.name}</h3>
                        <h5 className="card-title">{item.category}</h5>
                        <h5 className="card-title">{item.price}</h5>
                        {/* <p className="card-text">
                           {item.description}
                        </p> */}
                       
                        
                    </div>
                    <div className="card-footer">
                    <div className='text-center'>
                          <button className='btn btn-warning me-2'>View</button>
                          <button className='btn btn-warning px-2'>Add to cart</button>
                        </div>
                    </div>
                </div>


            </div>
        ))
    }

    const applysearch = (e) => {
        const inputText = e.target.value;

        setProducts(masterList.filter((product) => {
            return product.category.toLowerCase().includes(inputText.topLowerCase());
        }));


    }
    return (
        <div>
            <header className='bg-body-tertiary' style={{ backgroundColor: "lightblue" }}>
                <div className="container py-5">
                    <p className='text-center fw-bold ' style={{ fontSize: "35px", fontFamily: "initial" }}>All Products</p>
                    <input onChange={applysearch} type='text' placeholder='Search Products' className='form-control w-75 m-auto' />
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