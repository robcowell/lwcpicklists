/* eslint-disable @lwc/lwc/no-async-operation */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */

import { LightningElement, wire, track } from 'lwc';
import getVendors from '@salesforce/apex/VendorController.getVendors';
import getProducts from '@salesforce/apex/VendorProductController.getProducts';
import getSkills from '@salesforce/apex/ProductSkillController.getSkills';

export default class App extends LightningElement {

    @wire(getVendors)
    vendors;

    @wire(getProducts, {vendors : '$selectedVendors' })
    products;

    @wire(getSkills, {products : '$selectedProducts'})
    skills;

    @track selectedVendors = '';
    @track selectedProducts = '';
    @track selectedSkills = '';

    handleOnSelectedVendors (event)
    {
        let selections = [ ];
        let self = this;
        var select = event.target;
        
            for (var i = 0; i < select.length; i++)
            {
                if (select.options[i].selected) selections.push(select.options[i].value);
            }

            self.selectedVendors = "'" + selections.join("','") + "'";
            
        
        console.log(self.selectedVendors);

    }

    handleOnSelectedProducts (event)
    {
        let selections = [ ];
        let self = this;
        var select = event.target;
        
            for (var i = 0; i < select.length; i++)
            {
                if (select.options[i].selected) selections.push(select.options[i].value);
            }

            self.selectedProducts = "'" + selections.join("','") + "'";
            
        
        console.log(self.selectedProducts);
    }
}
