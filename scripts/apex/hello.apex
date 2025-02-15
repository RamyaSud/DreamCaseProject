// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

string tempvar = 'Enter_your_name_here';
System.debug('Hello World!');
System.debug('My name is ' + tempvar);
DFCaseContoller.getDFcaseRecord('003Em00000CIZPAIA5');
List<feedItem> fil =[SELECT	Id,
                			Title,
                			ParentId,
                			Type,
                			Body,
                			TYPEOF CreatedBy WHEN User THEN Id END,
                			TYPEOF CreatedBy WHEN User THEN Name END,
                			TYPEOF CreatedBy WHEN User THEN SmallPhotoUrl END,
                			CreatedDate
            				FROM FeedItem
           					WHERE  ParentId = '500Em00000D3XeHIAV'
           					AND Type = 'TextPost'
            			    AND Title != 'Booked and waiting for travel'
            				ORDER BY CreatedDate DESC];
system.debug(fil);
