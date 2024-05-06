import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { enqueueSnackbar } from 'notistack'

const AddProductSchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3, 'Name must be at least 3 characters')
  .max(15, 'Name must be at most 15 characters'),

})

const AddProduct = () => {

  const [imageList, setImageList] = useState('');

  const uploadimage = async(e) => {
    const file = e.target.value[0];
    setImageList(file)
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method:"POST",
      body: fd,
    }).then((res) => {
      if(res.status === 200) {
        console.log("file uploaded");
        enqueueSnackbar("file uploaded", {variant:"success"})
      }
    });

  }

  // step 1: formik initialization
  const productForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: '',
      description: '',
      image:''
    },

    /*onSubmit: (values, {resetForm}) =>{
      console.log(values)
      enqueueSnackbar('Signup successfully', {varient: 'success'})
      resetForm()

    },*/
    onSubmit: async(values,action) => {
      values.image = imageList.name
      console.log(values);
      const res=await fetch('http://localhost:5000/product/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('Product successful', {varient: 'success'})
      }else {
        enqueueSnackbar('Product failed', {varient:'error'})

      }
    },
    validationSchema: AddProductSchema
  })
    return (
        <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>Product</h3>
                    </div>
                    <div className="card-body">
                      {/* step2: handling when submit */ }
                        <form onSubmit={productForm.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.name && productForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                            id="name"
                            onChange={productForm.handleChange}
                            value={productForm.values.name}/>
                            
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.category && productForm.errors.category}</span>
                            <input type="text" className="form-control mb-4"
                            id="category"
                            onChange={productForm.handleChange}
                            value={productForm.values.category} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.price && productForm.errors.price}</span>
                            <input type="number" className="form-control mb-4"
                            id="price"
                            onChange={productForm.handleChange}
                            value={productForm.values.price} />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <span style={{color: 'red', fontSize: '10'}}>{productForm.touched.description && productForm.errors.description}</span>
                            <input type="text" className="form-control mb-4"
                            id="description"
                            onChange={productForm.handleChange}
                            value={productForm.values.description} />
                        </div>
                        <div className="form-group">
                            <label for='upload-image'>Upload File</label>
                             
                            <input type="file" className="form-control mb-4" id='upload-image'
                             onChange={uploadimage}
                           />
                        </div>

                        <button type='submit' className="btn btn-primary">Submit Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default AddProduct