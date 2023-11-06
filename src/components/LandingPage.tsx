import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative py-6" >
        <h4>All Fields are required!</h4>
        <form className="flex flex-col my-5 space-y-4" >
            <label className="w-fit" >Your email adress</label>
            <input className='p-4 rounded-lg' type='email' placeholder='email adress' />
            <label className="w-fit" >Your password</label>
            <input  className='p-4 rounded-lg' type='password' placeholder='Your password'/>
            <div className='flex justify-between items-center' >
                <div className="flex gap-2" >  
                    <input type='checkbox' id='remember-me' defaultChecked={true}/>
                    <label>Remember me</label>
                </div>
                <a href='#' >Forgot Password?</a>
            </div>
            <button className="bg-green-500 p-4 rounded-lg" >Log in</button>
        </form>
    </div>
  )
}

export default LandingPage