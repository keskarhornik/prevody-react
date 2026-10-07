import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import { AuthUser } from "./Services";

export function LogInScreen() {
    // 1. Create state variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    
    
    

    return (
        <>
            {/* Attach onSubmit handler to the Form */}
            <Form>
                <center>
                    <label htmlFor="email" className="form-label h4">email</label>
                </center>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="john.doe@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <center>
                    <label htmlFor="password" className="form-label h4">heslo</label>
                </center>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Tvoje.He$lo"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <center>
                    <Button type="submit" className="mt-2">LogIn</Button>
                </center>
            </Form>

            {statusMessage && <center className="mt-2">{statusMessage}</center>}
        </>
    );
}