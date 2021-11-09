import axios from "axios";

export const api = axios.create({
  baseURL: "https://tusk-docs.herokuapp.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@tuskdocs/token")}`,
  },
});
