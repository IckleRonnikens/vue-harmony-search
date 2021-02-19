import Api from '@/services/Api'

export default {
    getInstructionGuides(search){
        return Api().get('instructionGuides', {
          params: {
              search:search
          }  
        })
    },
    postInstructionGuides(instructionGuides){
        return Api().post('instructionGuides', instructionGuides)
    },
    getInstructionGuideById(instructionGuideId){
        return Api().get(`instructionGuides/${instructionGuideId}`)
    },
    putInstructionGuidesById(instructionGuideId, instructionGuides){
        return Api().put(`instructionGuides/${instructionGuideId}`, instructionGuides)
    },
    deleteInstructionGuides(instructionGuideId){
        return Api().delete(`instructionGuides/${instructionGuideId}`)
    }
}