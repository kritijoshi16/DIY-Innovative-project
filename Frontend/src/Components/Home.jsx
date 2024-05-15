import React from 'react'
import { Link } from 'react-router-dom'
import About from '../assets/About.jpg'
import Navbar from './Navbar'


const Home = () => {

  return (

    <div>
      <Navbar />
      <div className="main">
        <div className="content">
          <h1>
            WELCOME TO <br />
            <span>DIYSpark</span> <br />

          </h1>

          <p className="par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque
            expedita atque eveniet <br /> quis nesciunt. Quos nulla vero
            consequuntur, fugit nemo ad delectus
            <br /> a quae totam ipsa illum minus laudantium?
          </p>
          <button className="cn">
            <Link to="#">JOIN US</Link>
          </button>
        </div>


      </div>
      <section className="py-3 py-md-5 py-xl-8">

        <div className="container" >
          <h1>About</h1>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">

            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src={About}
                alt="about"
              />
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
                <h2 className="mb-4 display-5 text-center">Features</h2>
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
              <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bg-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill="currentColor"
                    className="bi bi-pie-chart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  </svg>
                </div>
                <h4 className="mb-3">Customized Gifts</h4>
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
                    className="bi bi-aspect-ratio"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                  </svg>
                </div>
                <h4 className="mb-3">Video Tutorials</h4>
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
                <h4 className="mb-3">Content Marketing</h4>
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
            </div>
          </div>
        </section>
      </>
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">FEEDBACK</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
              amet numquam iure provident voluptate esse quasi, veritatis totam
              voluptas nostrum quisquam eum porro a pariatur veniam.
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
      <>
        <>
          <div className="container my-5">
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
                  <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-google" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-github" />
                  </a>
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
                        Here you can use rows and columns to organize your footer
                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
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
                        <i className="fas fa-home mr-3" /> New York, NY 10012, US
                      </p>
                      <p>
                        <i className="fas fa-envelope mr-3" /> info@example.com
                      </p>
                      <p>
                        <i className="fas fa-phone mr-3" /> + 01 234 567 88
                      </p>
                      <p>
                        <i className="fas fa-print mr-3" /> + 01 234 567 89
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
