public with sharing class ProductSkillController
{

    @AuraEnabled(cacheable=true)
    public static List<Product_Skill__c> getSkills(String products)
    {
        if(String.isBlank(products))
        {
            return new List<Product_Skill__c>();
        }

        String queryString = 'Select Id, Name from Product_Skill__c WHERE Vendor_Product__c IN (SELECT Id from VendorProduct__c where Name IN (' + products + ')) ORDER BY Name';

        List<SObject> results = Database.query(queryString);
        List<Product_Skill__c> productList = new List<Product_Skill__c>();
        for (SObject obj : results)
        {
            productList.add((Product_Skill__c)obj);
        }
        return productList;
    }
}
