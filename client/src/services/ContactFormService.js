import Api from '@/services/Api'

export default {
    getContactForms(search){
        return Api().get('contactForms', {
          params: {
              search:search
          }  
        })
    },
    postContactForms(contactForms){
        return Api().post('contactForms', contactForms)
    },
    getContactFormById(contactFormId){
        return Api().get(`contactForms/${contactFormId}`)
    },
    putContactFormsById(contactFormId, contactForms){
        return Api().put(`contactForms/${contactFormId}`, contactForms)
    }
}