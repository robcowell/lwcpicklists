import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    get vendors() {
        return [
            {
                label: 'Salesforce',
                value: 'salesforce',
            },
            {
                label: 'Microsoft',
                value: 'microsoft',
            },
        ];
    }

    get products() {
        return [
            {
                label: 'Sales Cloud',
                value: 'salescloud',
            },
            {
                label: 'Windows',
                value: 'windows',
            },
        ];
    }

    get skills() {
        return [
            {
                label: 'Admin',
                value: 'admin',
            },
            {
                label: 'Developer',
                value: 'developer',
            },
        ];
    }
}
