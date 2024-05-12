import React, { useState, useEffect } from 'react'
/*import useProductContext from './context/ProductContext';*/

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([])
  const [masterList, setMasterList] = useState([]);
  /*const {addItemToCart, isInCart } = useProductContext();*/

  const fetchTutorials = async () => {
    const res = await fetch('http://localhost:5000/product/getall')
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      setTutorials(data)
    }
  }
  useEffect(() => {
    fetchTutorials()
  }, []);

  const displayTutorials = () => {
    return tutorials.map((item) => (

      <div className="col-md-3 g-2">
        <div className="cards shadow"  >
          <video controls  src={"http://localhost:5000/" + item.video} className="card-img-top p-3" style={{ height: 300 }} />
          <div className="card-body " style={{ height: 150 }}>
            <h3 className="card-title">{item.name}</h3>
            <h5 className="card-title">{item.category}</h5>
            {/*<h5 className="card-title">{item.price}</h5>*/}
            <p className="card-text">
              {item.description}
            </p>


          </div>
          <div className="card-footer">
            <div className='text-center'>
              {/*<button className='btn btn-warning '>Watch</button>*/}
              
            </div>
          </div>
        </div>


      </div>
    ))
  }

  const applysearch = (e) => {
    const inputText = e.target.value;

    setTutorials(masterList.filter((tutorial) => {
      return tutorial.category.toLowerCase().includes(inputText.topLowerCase());
    }));


  }
  return (
    <div>
      <header className='bg-body-tertiary' style={{ backgroundColor: "lightblue" }}>
        <div className="container py-5">
          <p className='text-center fw-bold ' style={{ fontSize: "35px", fontFamily: "initial" }}>All Tutorials</p>
          <input onChange={applysearch} type='text' placeholder='Search Videos' className='form-control w-75 m-auto' />
        </div>
      </header>

      <div className="container mt-5">
        <div className="row mt-5 p-5">
          {displayTutorials()}
        </div>
      </div>
    </div>
  )
}

export default Tutorial