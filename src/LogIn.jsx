import { Button, Form } from "react-bootstrap";

export function LogInScreen(){
    return (
        <>
        <Form>
            <label for="email" className="form-label">email</label>
            <input type="email" className="form-control" id="email" placeholder="john.doe@example.com"/>


            <label for="password" className="form-label">heslo</label>
            <input type="password" className="form-control" id="password" placeholder="john.doe@example.com"/>

            <Button type="submit"></Button>
            
        </Form>


        </>
    );
}