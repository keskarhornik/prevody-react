import { LogInScreen } from "./LogIn";
import { AuthUser } from "./Services";

export function Home(){
    
    let loggedIn = AuthUser();
    return (
        <>
        {!loggedIn ? <LogInScreen></LogInScreen> : <p>This is HomeW</p>}
        </>
    );
}