export async function AuthUser(){

    try {
        const response = await fetch('https://keskarhornik.endora.site/prevody-backend/index.php', {
            method: 'POST',
            body: JSON.stringify("Hi"),
        });

        const data = await response.json();
        console.log('Server response:', data);
        if (data === "Hello") return true
    } catch (error) {
        console.error('Error submitting form:', error);
    }

    return false
}