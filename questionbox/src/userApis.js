import axios from 'axios'

export default function allUserProfiles() {
    const userUrl = 'http://swordtail.herokuapp.com/users/'
    return axios.get(userUrl).then((data) => {
    console.log('data', data)
      return  data})
}

  // export const getUserProfiles = () => {
  //   const grabProfile = 'https://opentdb.com/api_category.php?amount=10${userprofiles.id}'
  //   return axios.get(grabProfile).then((response) => response.userprofiles)