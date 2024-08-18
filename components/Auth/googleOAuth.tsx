import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


export const GoogleLogoutButton = () => {
    return (
        googleLogout()
    )
}

export const GoogleLoginButton = () => {
    // successful response when login button clicked
    const googleResponseMessage = (response: any) => {
        console.log("successfully logged in using google, response:", response);
        const {iss, azp, aud, sub, email, email_verified, nbf, name, picture, given_name, family_name, iat, exp, jti} = jwtDecode(response.credential) as any;
        console.log(email)
        console.log(name)
        console.log(given_name)
        console.log(family_name)
        window.location.href = '/';  // redirect to home
    };
    // failure response when login button clicked
    const googleErrorMessage = () => {
        console.log("encountered error logging in using google, response: ");
        // window.location.href = '/login'
    };

    return (
        <GoogleLogin 
            onSuccess={googleResponseMessage}
            onError={googleErrorMessage}
        />
    )
};
