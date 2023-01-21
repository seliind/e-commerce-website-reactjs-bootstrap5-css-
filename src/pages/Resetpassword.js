import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { Meta } from '../components/Meta'

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
     <BreadCrumb title="Reset Password" />
     <div className="login-wrapper py-5 home-wrapper-2">
     <div className='container-xxl'>
     <div className="row">
         <div className="col-12">
           <div className="auth-card">
             <h3 className="text-center mb-3">Reset Password</h3>
             <form action="" className="d-flex flex-column gap-15">
             <div>
                 <input
                   type="password"
                   name="password"
                   placeholder="Password"
                   className="form-control mt-2"
                 />
               </div>
               <div>
                 <input
                   type="password"
                   name="password"
                   placeholder="Confirm password"
                   className="form-control"
                 />
               </div>
               <div>
                 <div className="mt-2 d-flex justify-content-center gap-20 align-items-center">
                   <button className="button border-0">OK</button>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
     </div>
   </>
  )
}

export default Resetpassword