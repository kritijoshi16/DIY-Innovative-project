import React from 'react'
import { Link } from 'react-router-dom'
import About from '../assets/About.jpg'
import Navbar from './Navbar'
import gift from '../assets/gift.jpg'
import craft from '../assets/craft.jpeg'

const Home = () => {


  return (

    <div classname="main" >
      <Navbar />
      <div>
        <div className="containe ">
          {/* <Fade bottom> */}
          <h1 className='s1-txt-h1'>Welcome to<br />
            <span>DIYSpark</span> <br />
          </h1>
          <p className='s1-txt-p'>"Where Hands Skillfully Craft Magnificent Wonders"</p>
          {/* </Fade> */}
          <Link to="/Contactus" className='btn btn-warning start-b'>Join Us</Link>
        </div>


      </div>
      <section className=" py-3 py-md-5 py-xl-8">

        <div className="container" >
          <h1>ABOUT</h1>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">

            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={About}
                alt="about"
              />
              {/* <video class="video" src="aboutvdo.mp4" alt="about"autoplay loop muted></video>*/}
            </div>

            <div className="col-12 col-lg-6 col-xl-7">

              <div className="row justify-content-xl-center">

                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Who Are We?</h2>
                  <p className="lead fs-4 text-secondary mb-3">
                    DIYSPARK is more than just a platform for DIY enthusiasts; it's a community-driven hub where creativity thrives, innovation flourishes, and imagination knows no bounds. Our passion lies in empowering individuals to embrace their inner maker and embark on DIY projects that spark joy, foster learning, and cultivate a sense of accomplishment.


                  </p>
                  <p className="mb-5">
                    Through easy-to-follow tutorials, step-by-step guides, and creative ideas, DIYSPARK aims to spark your imagination and fuel your passion for crafting. We believe that everyone has the potential to be a maker, and we're here to support you every step of the way.
                    Join us as we embark on a journey of creativity, exploration, and endless possibilities. Let's ignite the spark of DIY creativity together!


                  </p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            fill="currentColor"
                            className="bi bi-gear-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Versatile Brand</h4>
                          <p className="text-secondary mb-0">
                            We are crafting a digital method that subsists life across
                            all mediums.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="d-flex">
                        <div className="me-4 text-primary">

                          <svg
                            xmlns="https://tse3.mm.bing.net/th/id/OIP.VQ9avxbnf1oK8c1PGQTsoQHaFD?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            width={32}
                            height={32}
                            fill="currentColor"
                            className="bi bi-fire"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Digital Agency</h4>
                          <p className="text-secondary mb-0">
                            We believe in innovation by merging primary with elaborate
                            ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        <section className="py-5 py-xl-8">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h2 className="h1 mb-4 text-center">FEATURES</h2>
                <p className="text-secondary mb-5 text-center">
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                  commodo.
                </p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
              </div>
            </div>
          </div>
          <div className="container overflow-hidden">
            <div className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center">
              <div className="card " >
                <div
                  className="bg-image hover-overlay"
                  data-mdb-ripple-init=""
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={gift}
                    className="img-fluid"
                    style={{ height: 230 }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Customized Gifts</h5>
                  <p className="card-text" style={{ width: 250 }}>
                    Some quick example text to build on the card
                    title and make up the bulk of
                    the card's content.
                  </p>
                </div>

              </div>
              <div className="card" >
                <div
                  className="bg-image hover-overlay"
                  data-mdb-ripple-init=""
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={craft}
                    className="img-fluid"
                    style={{ height: 250 }}
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>


                <div className="card-body">
                  <h5 className="card-title">Craft Making</h5>
                  <p className="card-text" style={{ width: 250 }}>
                    Some quick example text to build on the card
                    title and make up the bulk of
                    the card's content.
                  </p>
                </div>
              </div>
              <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bg-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill="currentColor"
                    className="bi bi-airplane-engines"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                  </svg>
                </div>
                <h4 className="mb-3">Craft Making Items</h4>
                <p className="mb-3 text-secondary">
                  Vestibulum bibendum, lorem a blandit lacinia, nisi velit posuere
                  nisl, vel placerat magna mauris mollis maximus est.
                </p>
                <a href="#!" className="fw-bold text-decoration-none link-primary">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
              <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bg-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill="currentColor"
                    className="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg>
                </div>

                
                <h4 className="mb-3">Hands-on Experience</h4>
                <p className="mb-3 text-secondary">
                  This typically require hands-on work, which can range from basic crafting to more advanced construction or technical skills. This hands-on experience can be both educational and rewarding.


                </p>
                <a href="#!" className="fw-bold text-decoration-none link-primary">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>

      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="h1 mb-4">FEEDBACK</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              DIYSpark: Where imagination meets craftsmanship, empowering you to bring your creative visions to life, one project at a time!

            </p>
          </div>
        </div>
        <div className="row text-center d-flex align-items-stretch">
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up" style={{ backgroundColor: "#9d789b" }} />
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up" style={{ backgroundColor: "#7a81a8" }} />
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia architecto.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-0 d-flex align-items-stretch">
            <div className="card testimonial-card">
              <div className="card-up" style={{ backgroundColor: "#6d5b98" }} />
              <div className="avatar mx-auto bg-white">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fas fa-quote-left pe-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <>

        <>
          <div >
            {/* Footer */}
            <footer
              className="text-center text-lg-start text-white"
              style={{ backgroundColor: "#1c2331" }}
            >
              {/* Section: Social media */}
              <section
                className="d-flex justify-content-between p-4"
                style={{ backgroundColor: "#6351ce" }}
              >
                {/* Left */}
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>
                {/* Left */}
                {/* Right */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    style={{ margin: ".5rem" }}
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    style={{ margin: ".5rem" }}
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    style={{ margin: ".5rem" }}
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    style={{ margin: ".5rem" }}
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    style={{ margin: ".5rem" }}
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>

                </div>
                {/* Right */}
              </section>
              {/* Section: Social media */}
              {/* Section: Links  */}
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  {/* Grid row */}
                  <div className="row mt-3">
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      {/* Content */}
                      <h6 className="text-uppercase fw-bold">Company name</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                      />
                      <p>
                        DIYSpark: "Where imagination meets practicality" ;
                        offering a vast collection of inventive DIY projects, DIY items and tutorials.
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Products</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                      />
                      <p>
                        <a href="#!" className="text-white">
                          MDBootstrap
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          MDWordPress
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          BrandFlow
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Bootstrap Angular
                        </a>
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Useful links</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                      />
                      <p>
                        <a href="#!" className="text-white">
                          Your Account
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Become an Affiliate
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Shipping Rates
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">
                          Help
                        </a>
                      </p>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      {/* Links */}
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                      />
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          style={{ margin: ".5rem" }}
                          fill="currentColor"
                          className="bi bi-house-add-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0" />
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                          <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
                        </svg>
                        New York, NY 10012, US
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          style={{ margin: ".5rem" }}
                          fill="currentColor"
                          className="bi bi-envelope-at-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                        info@example.com
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          style={{ margin: ".5rem" }}
                          fill="currentColor"
                          className="bi bi-telephone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                          />
                        </svg>
                        + 01 234 567 88
                      </p>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          style={{ margin: ".5rem" }}
                          fill="currentColor"
                          className="bi bi-phone-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                        </svg>
                        + 01 234 567 89
                      </p>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
              </section>
              {/* Section: Links  */}
              {/* Copyright */}
              <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
              >
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                  MDBootstrap.com
                </a>
              </div>
              {/* Copyright */}
            </footer>
            {/* Footer */}
          </div>
          {/* End of .container */}
        </>

      </>





    </div>

  )
}

export default Home
