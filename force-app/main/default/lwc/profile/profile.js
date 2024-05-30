import { LightningElement,wire,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import USER_ID from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';
import CONTACT_ID from '@salesforce/schema/User.ContactId';
import NAME from '@salesforce/schema/Contact.Name';
import GENDER from '@salesforce/schema/Contact.Gender__c';
import BIRTH_DATE from '@salesforce/schema/Contact.Birthdate';
import EMAIL from '@salesforce/schema/Contact.Email';
import HOME_PHONE from '@salesforce/schema/Contact.HomePhone';
import MOBILE_PHONE from '@salesforce/schema/Contact.MobilePhone';
import MAILING_ADDRESS from '@salesforce/schema/Contact.MailingAddress';
//import getDFcaseRecord from '@salesforce/apex/DFCaseContoller.getDFcaseRecord';

export default class Profile extends NavigationMixin(LightningElement) {
userId = USER_ID
contactId = ''
caseId = ''
//@api recordId
    fields =[NAME,GENDER,BIRTH_DATE,EMAIL,HOME_PHONE,MOBILE_PHONE,MAILING_ADDRESS]
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
   /* navigateCaseList(){
        getDFcaseRecord({ContactId:this.contactId})
        .then(result => {
            if(result){
                this.caseId = result;
                console.log('caseid ' + this.caseId)
            }  
        })
        .catch(error => {
            if(error){
                console.log(JSON.stringify(error));
            }
        })
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
      
    }*/

    handleError(event){
       console.log(JSON.stringify(event.detail))
    }
}