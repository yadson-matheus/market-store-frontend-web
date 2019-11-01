import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css';

import api from '../../services/api';

import { ToastDanger } from '../../modules/Toast';

import './styles.css';

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('/authenticate', { email, password })
            .then(function(res) {
                const { token } = res.data;
                const { email } = res.data.user;

                localStorage.setItem('token', token);
                localStorage.setItem('email', email);

                history.push('/dashboard');
            })
            .catch(function(err) {
                const { error } = err.response.data;

                ToastDanger(error);
            });
    }

    return (
        <div id="login">
            <form onSubmit={ handleSubmit } className="shadow-lg">
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
                    <button type="submit" className="btn btn-primary-outline btn-block mb-2">ENTER</button>
                    <Link className="text-primary" to="/routename">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}