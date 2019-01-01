import {Component, ViewChild} from '@angular/core';
import {LoadDataService} from '../services/load-data.service';
import {MultiFileUploadComponent} from '../components/multi-file-upload/multi-file-upload.component';


import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {

    public referringPhysicianForm: FormGroup;

    @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

    constructor(public ldService: LoadDataService, public formBuilder: FormBuilder) {

        this.referringPhysicianForm = formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            postalCode: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phoneNumber: ['', Validators.required],
            faxNumber: ['', Validators.required],
            ohipNumber: ['', Validators.required],
            cpsoNumber: ['', Validators.required],
            contactMethod: ['email', Validators.required],
            fhTeam: []

        });
    }

    upload() {

        let files = this.fileField.getFiles();
        console.log(files);

        let formData = new FormData();
        formData.append('somekey', 'some value'); // Add any other data you want to send

        files.forEach((file) => {
            formData.append('files[]', file.rawFile, file.name);
        });

        // POST formData to Server

    }

    ionViewWillEnter() {
        this.ldService.logFunction();

        // this.ldService.getRemoteData();

        this.ldService.getLocalData().subscribe(data => {
            console.log(data);

            this.referringPhysicianForm.setValue(data);

            console.log(this.referringPhysicianForm.value);

        });

        // console.log(this.referringPhysicianForm.value);


    }

}
