import Api from '@/services/Api'

export default {
    getAbout(search){
        return Api().get('about', {
          params: {
              search:search
          }  
        })
    }
}