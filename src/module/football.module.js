import football from "../api/football";
import actionTypes from "../constants/actionType";

const footballModule = {
  [actionTypes.GET_COUNTRIES] () {
    return new Promise((resolve, error) => {
      football.getCountries((res) => {
        resolve(res)
      }, (err) => {
        error(err)
      })
    })
  }
}

export default footballModule