import BASE_URL from "../helpers/baseUrl";

export async function login(username, password) {
  let bodyCredientail = {
    "username": username,
    "password": password
  };
  const response= await fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },  
    body: JSON.stringify(bodyCredientail),
  })
  .catch((error) => ({
    error,
  }));  
  if (response.error) {
    return { error: response.error };
  }
  return await response.json()
};

export default login;
