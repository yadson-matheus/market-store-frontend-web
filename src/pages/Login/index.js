import React, { useState } from 'react';
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
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    id="email" 
                    type="email" 
                    placeholder="Digite seu e-mail" 
                    value={ email }
                    onChange={ event => setEmail(event.target.value) }
                />

                <label htmlFor="password">PASSWORD *</label>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="Digite sua senha" 
                    value={ password }
                    onChange={ event => setPassword(event.target.value) }
                />

                <button type="submit" className="btn btn-primary-outline">ENTER</button>
            </form>
        </div>
    );
}