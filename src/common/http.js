import axios from "axios"

const http = {
  GET (url, callback, errorCallback) {
    axios.get(url)
    .then(res => {
      callback(res)
    })
    .catch(error => {
      errorCallback(callback)
    })
  }
}

export default http