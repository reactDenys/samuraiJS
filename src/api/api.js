import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API_KEY': 'sfdlkgsdlfkgjdsflgl'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },

    authMe() {
        return instance.get('auth/me').then(res => res.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(res => res.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(res => res.data)
    }


}
