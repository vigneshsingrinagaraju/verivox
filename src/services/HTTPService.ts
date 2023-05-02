import axios from "axios";
/*
  Generic Method to make HTTP call 
  */
const HTTPService = async (method:string, url:string) => {
    return await axios({
        method,
        url,
        headers: authHeader(),
    });
}; 
const authHeader = () => {
    return { Accept: "application/json", "Content-Type": "application/json" };
};
export default HTTPService;
