/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class App extends LightningElement
{
    
    @track
    selectedVendors = '';

    @track
    selectedProducts = '';

    @track
    selectedSkills = '';

    get vendors() {
        return [
            {
                key: 'Salesforce',
                value: 'salesforce',
            },
            {
                key: 'Microsoft',
                value: 'microsoft',
            },
        ];
    }

    get products() {
        return [
            {
                key: 'Sales Cloud',
                value: 'salescloud',
            },
            {
                key: 'Windows',
                value: 'windows',
            },
        ];
    }

    get skills() {
        return [
            {
                key: 'Admin',
                value: 'admin',
            },
            {
                key: 'Developer',
                value: 'developer',
            },
        ];
    }

    handleVendorChange()
    {
        console.log('Vendors ' + this.selectedVendors);
    }

    getSelectedItems () {
        this.yourSelectedValues = '';
        let self = this;
        this.template.querySelector ('c-multi-pick-list').getSelectedItems().forEach (function (eachItem) {
                console.log (eachItem.value);
                self.yourSelectedValues += eachItem.value + ', ';
        });
    }

    handleOnItemSelected (event) {
        if (event.detail) {
            this.yourSelectedValues = '';
            let self = this;
            
            event.detail.forEach (function (eachItem) {
                    console.log (eachItem.value);
                    self.yourSelectedValues += eachItem.value + ', ';
            });
        }
    }
}