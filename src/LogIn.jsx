import { Button, Form } from "react-bootstrap";

export function LogInScreen(){
    return (
        <>
        <Form>
            <center><label for="email" className="form-label h4">email</label></center>
            <input type="email" className="form-control" id="email" placeholder="john.doe@example.com"/>


            <center><label for="password" className="form-label h4">heslo</label></center>
            <input type="password" className="form-control" id="password" placeholder="Tvoje.He$lo"/>

            <center><Button type="submit" className="mt-2">LogIn</Button></center>
            
        </Form>


        </>
    );
}