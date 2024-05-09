import React from 'react'

const Tutorial = () => {

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
                    <p className='text-center fw-bold ' style={{ fontSize: "35px", fontFamily: "initial" }}>All Tutorials</p>
                    <input onChange={applysearch} type='text' placeholder='Search Videos' className='form-control w-75 m-auto' />
                </div>
            </header>
        
    </div>
  )
}

export default Tutorial