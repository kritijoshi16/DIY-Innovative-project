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
          <video controls src={"http://localhost:5000/" + item.video} className="card-img-top p-3" style={{ height: 300 }} />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                style={{ margin: ".5rem" }}
                fill="currentColor"
                className="bi bi-hand-thumbs-up-fill me-4"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                style={{ margin: ".5rem" }}
                fill="currentColor"
                className="bi bi-hand-thumbs-down-fill me-4"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                style={{ margin: ".5rem" }}
                fill="currentColor"
                className="bi bi-chat-dots-fill me-4"
                viewBox="0 0 16 16"
              >
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                style={{ margin: ".5rem" }}
                fill="currentColor"
                className="bi bi-share-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
              </svg>


            </div>
          </div>
        </div>


      </div>
    ))
  }

  const applysearch = (e) => {
    const inputText = e.target.value;

    setTutorials(masterList.filter((tutorial) => {
      return tutorial.category.toLowerCase().includes(inputText.toLowerCase());
    }));


  }
  return (
    <div>
      <header className='bg-body-tertiary' style={{ backgroundColor: "lightblue" }}>
        <div className="container py-5">
          <p className='text-center fw-bold ' style={{ fontSize: "35px", fontFamily: "initial" }}>ALL TUTORIALS</p>
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