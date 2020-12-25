import axios from 'axios';

export default {
    getNewsEnglish: () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:5001/api/english').then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    },
    getNewsPunjabi: () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:5001/api/punjabi').then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    },
    loginUser: (data) => {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:5001/api/login', data).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error)
            });
        })
    }
}