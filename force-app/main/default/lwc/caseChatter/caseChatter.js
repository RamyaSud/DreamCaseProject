import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import USER_ID from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';
import CONTACT_ID from '@salesforce/schema/User.ContactId';
import getDFcaseRecord from '@salesforce/apex/DFCaseContoller.getDFcaseRecord';

export default class CaseChatter extends NavigationMixin(LightningElement) {
userId = USER_ID
contactId = ''
caseId = null
    @wire(getRecord,{recordId:'$userId',fields:[CONTACT_ID]})
    User({data,error}){
        if(data){
            console.log(JSON.stringify(data))
            this.contactId = data.fields.ContactId.value
        }
        else if(error){
            console.log(JSON.stringify(error))
        }
    }
    getCaseId(){
        getDFcaseRecord({ContactId:this.contactId})
        .then(result => {
            if(result){
                this.caseId = result;
                console.log('caseid ' + this.caseId)
                this.navigateCaseList()
            }  
        })
        .catch(error => {
            if(error){
                console.log(JSON.stringify(error));
            }
        })

    }
    navigateCaseList(){
        if(this.caseId != null){
            //console.log('yesssssssssss')
            this[NavigationMixin.Navigate]({
                type:'standard__recordPage',
                attributes:{
                    recordId : this.caseId,
                    objectApiName : 'Case',
                    actionName : 'view'
                }
            });
       }
      
    }
  
}