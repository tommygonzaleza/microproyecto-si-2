export const isAuthenticated = () => {
    // It will be changed to 
    return sessionStorage.getItem("user_id");
}