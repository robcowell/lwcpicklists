public with sharing class VendorProductController
{
    public VendorProductController()
    {

    }

    @AuraEnabled(cacheable=true)
    public static List<VendorProduct__c> getProducts(String vendors)
    {
        if (String.isEmpty(vendors))
        {
            return new List<VendorProduct__c>();
        }
        
        String queryString = 'Select Id, Name from VendorProduct__c WHERE Vendor__c IN (SELECT Id from Vendor__c where Name IN (' + vendors + ')) ORDER BY Name';
        //SELECT Id, Name from VendorProduct__c WHERE Vendor__c IN (SELECT Id from Vendor__c where Name IN ('Microsoft'))

        List<SObject> results = Database.query(queryString);
        List<VendorProduct__c> products = new List<VendorProduct__c>();
        for (SObject obj : results)
        {
            products.add((VendorProduct__c)obj);
        }
        return products;
    }
}
