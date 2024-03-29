import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const displayNameRef = useRef()
    const { currentUser, updateEmail, updatePassword, updateDisplayName} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        if (displayNameRef.current.value !== currentUser.displayName){
            promises.push(updateDisplayName(displayNameRef.current.value))
        }

        Promise.all(promises).then(()=> {
            history.push('/profile/characters')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
           setLoading(false)
        })
    }

    return (
        <>
            <Card className="w400">
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit} >
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required
                            defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} 
                             placeholder="Leave blank to keep same password"/>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} 
                            placeholder="Leave blank to keep same password" />
                        </Form.Group>
                        <Form.Group id='displayName'>
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control type="displayName" ref={displayNameRef} 
                            defaultValue={currentUser.displayName} />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
                <div className="w-100 text-center mt-2">
                    Back to profile. <Link to="/profile/characters">Cancel</Link>              
                </div> 
            </Card>
            
        </>
    )
}
