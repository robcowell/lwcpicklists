@isTest
public class VendorProductControllerTest
{
    @isTest
    public static void testGetProducts()
    {
        Vendor__c vendor = new Vendor__c();
        vendor.Name = 'Microsoft';
        insert vendor;

        vendor = [SELECT Id, Name from Vendor__c where ID = :vendor.id];
        VendorProduct__c product = new VendorProduct__c();
        product.Name = 'Windows';
        product.Vendor__c = vendor.id;
        insert product;

        String query = '\'Microsoft\'';
        
        test.startTest();
        //List<VendorProduct__c> products = [SELECT Id, Name from VendorProduct__c WHERE Vendor__c IN (SELECT Id from Vendor__c where Name IN ('Microsoft'))];
        List<VendorProduct__c> products = VendorProductController.getProducts(query);
        test.stopTest();

        System.assert(products != null);
        System.assertEquals(1, products.size());

    }
}
