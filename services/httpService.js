import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  // this function will be executed every time a response with an error.
  const { response } = error;
  const expectedError =
    response && response.status >= 400 && response.status < 500;
  if (!expectedError) {
    // handle unexpected error here
    logger.log(error);
    toast.error("showing User friendly message");
  }

  // return a rejected promise
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
