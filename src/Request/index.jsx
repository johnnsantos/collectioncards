import axios from "axios";

export const Request = async (URL) => {
  let res = await axios.get(URL);
  return res.data;
};
