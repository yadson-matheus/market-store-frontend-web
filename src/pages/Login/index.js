import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';

import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/authenticate', { email, password });
        
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <div id="login">
            <form onSubmit={ handleSubmit }>
                <h5 className="center-align">Sign-in</h5>

                <div className="input-field">
                    <input 
                        id="email" 
                        type="email"  
                        value={ email }
                        onChange={ event => setEmail(event.target.value) }
                    />
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="input-field">
                    <input 
                        id="password" 
                        type="password"  
                        value={ password }
                        onChange={ event => setPassword(event.target.value) }
                    />
                    <label htmlFor="password">Password</label>
                </div>
                
                <div className="center-align">
                    <button type="submit" className="btn btn-primary-outline z-depth-0">ENTER</button>
                    <Link className="primary-color" to="/new">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}