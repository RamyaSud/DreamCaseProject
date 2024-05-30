public with sharing class DFCaseContoller {
    public DFCaseContoller() {

    }
    @AuraEnabled(cacheable = true)
    public static Id getDFcaseRecord(Id ContactId){
        try {
            //DF_Case__c dfCase = [select Id,Name from DF_Case__c where Contact__c=:ContactId];
            //system.debug(dfCase);
            //return dfCase;
            Id caseId;
            Case cas = [select Id from Case where ContactId=:ContactId order by CreatedDate desc]; 
            system.debug(caseId);
            return cas.Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}