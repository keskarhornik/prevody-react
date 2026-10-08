import { useEffect } from "react";

export async function AuthUser() {
    
    const authToken = localStorage.getItem('authToken');
      
      // 2. Save to localStorage every time 'count' changes
    useEffect(() => {
      localStorage.setItem('authToken', authToken);
    }, [authToken]);
    
    if(authToken){
        try {
            // Construct standard form URL-encoded key-value pairs
            const formData = new URLSearchParams();
            formData.append('token', authToken);
            formData.append('action', 'TokenAuth'); // Useful for routing actions in PHP

            const response = await fetch('https://keskarhornik.endora.site/prevody-backend/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData,
            });

            const data = await response.json();
            console.log('Server response:', data);
            
            if (data.status === 'success') return true;
        } catch (error) {
            console.error('Error submitting form:', error);
        }

        return false;
    }
    
}

export async function LogInUser(email, password) {
    try {
        const FormData = new URLSearchParams();
        FormData.append("email", email)
        FormData.append("password", password)

        const response = await fetch('https://keskarhornik.endora.site/prevody-backend/LogIn.php', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, 
            body: FormData,
        })

        const data = await response.json();
    }
    catch (error){

    }
}