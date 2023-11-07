import React, { useState } from 'react'
import axios from 'axios'
export const Login = () => {
    const  [login, setLogin] = useState('')
    const  [password, setPassword] = useState('')
    const  [name, setName] = useState('')
    const handlerRegister = async () => {
        const body = {
            login, password, name
        }
        await axios.post(`http://localhost:5050/api/users/register`, body)
    }
  return (
    <div>
        {/* <form action="" method='POST'> */}
            <input type="text" id='login' onChange={(e) => setLogin(e.target.value)} value={login} />
            <input type="text" id='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <input type="text" id='name' onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={handlerRegister}>Отправить</button>
        {/* </form> */}
    </div>
  )
}
