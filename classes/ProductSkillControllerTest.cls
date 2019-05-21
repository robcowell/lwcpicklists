@isTest
public class ProductSkillControllerTest
{
    @isTest
    public static void testGetSkills()
    {
         Vendor__c vendor = new Vendor__c();
        vendor.Name = 'Microsoft';
        insert vendor;
        
        VendorProduct__c product = new VendorProduct__c();
        product.Name = 'Windows';
        product.Vendor__c = vendor.id;
        insert product;

        Product_Skill__c skill = new Product_Skill__c();
        skill.Name = 'Admin';
        skill.Vendor_Product__c = product.Id;
        insert skill;

        String query = '\'Windows\'';

        test.startTest();
        List<Product_Skill__c> skills = ProductSkillController.getSkills(query);
        test.stopTest();

        System.assert(skills != null);
        System.assertEquals(1, skills.size());

    }
}
