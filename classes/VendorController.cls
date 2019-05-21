public with sharing class VendorController
{
        @AuraEnabled(cacheable=true)
        public static List<Vendor__c> getVendors()
        {
            return [Select Id, Name from Vendor__c ORDER BY Name];            
        }   
}
