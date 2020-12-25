import React, { useState, useEffect } from 'react'
import apiService from '../../api.service';

function Admin() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');

    let [error, setError] = useState('');

    let [authUser, setAuthUser] = useState(false)

    const handleLoginClick = () => {
        console.log('clicked')
        console.log(`username: ${username} password: ${password}`)
        let data = {
            username,
            password
        }
        apiService.loginUser(data)
            .then(data => {
                setMessage('')
                setError('')
                if (data.status === 200) {
                    setAuthUser(true)
                    setMessage(data.message)
                    setPassword('')
                }
                else {
                    setMessage('')
                    setError('')
                    setError('Wrong username password.')
                    setPassword('')
                }
            })
            .catch(err => { setError('Some issue happened please try again after some time.') })
    }

    const handleLogoutClick = () => {
        setError('')
        setMessage('')
        setUsername('')
        setPassword('')
        setAuthUser(false)
    }
    return (
        <div>
            {message && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            {authUser ? <>

            <h1>Welcome user...</h1>
            <button className="btn btn-danger" onClick={handleLogoutClick}>logout</button>
            </> : <>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} id="username" placeholder="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="password" />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={handleLoginClick}>Login</button>
                </>}

        </div>
    )
}

export default Admin