import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4000/file",
    headers: {
        "Content-type": "application/json"
    }

});