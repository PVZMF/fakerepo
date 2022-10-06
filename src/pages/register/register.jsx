import React from 'react'
import "./register.style.scss";
const register = () => {
  return (
    <div className='register'>
        <form>
          <div>
            <label className="Label" htmlFor="fname">نام:</label>
            <input className='inputForm' name='fname' id='fname' placeholder='FirstName'/>
          </div>
          <div>
            <label className="Label" htmlFor="lname">نام خانوادگی:</label>
            <input className='inputForm' name='lname' id='lname' placeholder='LastName'/>
          </div>
          <div>
            <label className="Label" htmlFor="userName">نام کاربری:</label>
            <input className='inputForm' name='userName' id='userName' placeholder='userName'/>
          </div>
          <div>
            <label className="Label" htmlFor="email">ایمیل:</label>
            <input className='inputForm' type="email" name='email' id='email' placeholder='Email'/>
          </div>
          <div>
            <label className="Label" htmlFor="password">پسورد:</label>
            <input className='inputForm' type="password" name='password' id='password' placeholder='password'/>
          </div>
          <div>
            <label className="Label" htmlFor="password">تایید پسورد:</label>
            <input className='inputForm' type="password" name='password' id='password' placeholder='password'/>
          </div>
          <input className='submitForm' type="submit" value="ثبت نام" />
        </form>
    </div>
  )
}

export default register;