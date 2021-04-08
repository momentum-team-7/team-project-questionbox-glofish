import axios from 'axios'
import { userprofiles } from './userData'

export function allUserProfiles() {
    const userUrl = 'http://swordtail.herokuapp.com/users/'
    return axios.get(userUrl).then((data) => {
    console.log('data', data)
      return  data})
}

  export const getUserProfile = (id) => {
    return userprofiles.find(profile => profile.id === id)
    // const grabProfile = `http://swordtail.herokuapp.com/users/${id}`
    // return axios.get(grabProfile).then((data) => data)
  }

