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
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch('https://keskarhornik.endora.site/prevody-backend/LogIn.php', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData,
    });

    const responseBody = await response.text();
    if (!response.ok) {
        console.error(
            `Login request failed with HTTP ${response.status}:`,
            responseBody || response.statusText
        );
        throw new Error(`Login request failed (HTTP ${response.status}). See the console for server details.`);
    }

    const data = JSON.parse(responseBody);
    console.log('Login response:', data);
    return data;
}