import { useState } from 'react';
// import SignupLoginImg from '../assets/loginimg.webp'
//import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik'
// import { toast } from 'react-hot-toast';
import useAppContext from '../AppContext';
import Navbar from './Navbar';
import loginform from '../assets/loginform.jpeg'


const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(8, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
})

const Login = () => {
    const {setLoggedIn} = useAppContext();

    const navigate = useNavigate();
    //step1 : formik initialization
    const LoginForm = useFormik({
        initialValues: {

            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {

            console.log(values);

            const res = await fetch('http://localhost:5000/user/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            console.log(res.status)
            action.resetForm();

            if (res.status === 200) {
                // toast('Login Success')
                setLoggedIn(true);
                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if (data.role === 'admin') {
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/admin/Dashboard');
                } else {
                    sessionStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                }

            }
            else if (res.status === 400
            ) {
                // toast("Error")
            }

        },
        validationSchema: LoginSchema

    })


    const [showpassword, setshowpassword] = useState(false)
    const handleShowPassword = () => {
        setshowpassword(preve => !preve)
    }

    return (
        <>
        <Navbar/>
        <section className="vh-100" style={{ backgroundColor: "lightblue" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "2rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={loginform}
                alt="login form"
                className="img-fluid"
                style={{ borderRadius: "1rem 0 0 1rem",height:"650px",width:"900px" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={LoginForm.handleSubmit}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0" style={{ color: "#ff7200" }}>DIYSpark</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      value={LoginForm.values.email}
                      onChange={LoginForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example17">
                      Email address
                    </label>
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      value={LoginForm.values.password}
                      onChange={LoginForm.handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example27">
                      Password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-warning btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <Link className="small text-muted" to="/ForgetPassword">
                    Forgot password?
                  </Link>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <Link to='/Signup' style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                  </p>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Login