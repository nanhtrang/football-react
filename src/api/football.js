import http from "../common/http"
import path from "../constants/path"
import properties from "../constants/properties"


function getCountries (callback, fail) {
  http.GET(`${properties.host}${path.get_countries}`,
    response => {
      callback(response)
    },
    error => {
      fail(error)
    }
  )
}

function getLeagues (callback, fail) {
  http.GET(`${properties.host}${path.get_leagues}`,
    response => {
      callback(response)
    },
    error => {
      fail(error)
    }
  )
}

function getTeams (leagueId, callback, fail) {
  http.GET(`${properties.host}${path.get_teams}&league_id=${leagueId}`,
    response => {
      callback(response)
    },
    error => {
      fail(error)
    }
  )
}

function getPlayers (name, callback, fail) {
  http.GET(`${properties.host}${path.get_players}&player_name=${name}`,
    response => {
      callback(response)
    },
    error => {
      fail(error)
    }
  )
}

const football = {
  getCountries,
  getLeagues,
  getTeams,
  getPlayers
}

export default football