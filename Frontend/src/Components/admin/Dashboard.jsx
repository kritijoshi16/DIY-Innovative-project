import React from 'react'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className="dashboardmain">
      {/*<img
    src={dashboardbg}
    alt={"dashboard"}
     style={{position: "center",size: "cover",height: "100vh"}}
  />*/}
      <div className="container">
        <Link to={"/"}> <button className='dashbttn btn-outline-primary rounded-pill px-3 my-4'><i className=" px-2 bi bi-arrow-left-circle"></i>HOME</button></Link>

        <div className="dashboard">
          <h1>
            WELCOME TO <br />
            <span>ADMIN</span> <br />
            PANEL
          </h1><br></br>
          <iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
  }}
  width={540}
  height={400}
  src="https://charts.mongodb.com/charts-project-0-tpaxlng/embed/charts?id=6648a02d-7bf4-48ef-8abf-149662a2a62a&maxDataAge=3600&theme=light&autoRefresh=true"
/>
<iframe
  style={{
    background: "#FFFFFF",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    
  }}
  width={540}
  height={400}
  
  src="https://charts.mongodb.com/charts-project-0-tpaxlng/embed/charts?id=6648a329-af64-450e-842e-b0143b027f3e&maxDataAge=3600&theme=light&autoRefresh=true"
/>


        </div>

      </div>


    </div>

  )
}

export default Dashboard