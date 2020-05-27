import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { GiNinjaHead } from 'react-icons/gi';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    function handleLogin(e) {
        e.preventDefault();

        console.log(email);
        console.log(password);

        localStorage.setItem('email', email);

        history.push('/cadastro');

    }

    return (

        <div>

                <div className='cadastro'>
                    <form className='form' onSubmit={handleLogin}>

                        <h1>Insira seus dados</h1>
                        <GiNinjaHead name = 'GiNinjaHead' size={42} />   
                        <br></br>                  
                        <input
                            type='email'
                            value={email}
                            placeholder='Digite seu E-mail'
                            onChange={e => setEmail(e.target.value)} />
                        <br></br>

                        <input
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Digite sua senha' />
                        <br></br>
                        <button className='button' type='submit'> Entrar</button>
                        <br />
                        <button className='button' type='submit'>Esqueci minha senha</button>
                    </form>

                </div>
            </div>
       

    );

}

export default Login;