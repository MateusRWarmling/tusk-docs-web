import axios from "axios";

const token = localStorage.getItem("@tuskdocs/token");

export const api = axios.create({
  baseURL: "https://tusk-docs.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
