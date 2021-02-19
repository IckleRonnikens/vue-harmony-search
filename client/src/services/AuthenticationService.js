import Api from '@/services/Api'

export default {

    register(credentials){
        return Api().post('register', credentials)
    },
    login(credentials){
        return Api().post('login', credentials)
    },
    contact(credentials){
        return Api().post('contact', credentials)
    }
}