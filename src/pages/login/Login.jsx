import React from 'react'
import { Link } from 'react-router-dom';
import "./login.style.scss";
const login = () => {
  return (
    <div className='Login'>
        <form>
          <div>
            <label className="Label" htmlFor="userName">نام کاربری:</label>
            <input className='inputForm' name='userName' id='userName' placeholder='userName or email'/>
          </div>
          <div>
            <label className="Label" htmlFor="password">پسورد:</label>
            <input className='inputForm' type="password" name='password' id='password' placeholder='password'/>
          </div>
          <input className='submitForm' type="submit" value="وارد شوید" />
          <Link to="/Register">اکانت نداری؟ نگران نباش یکی بساز :) </Link>
        </form>
    </div>
  )
}

export default login;