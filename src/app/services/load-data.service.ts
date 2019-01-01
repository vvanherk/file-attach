import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LoadDataService {


    constructor(public httpClient: HttpClient) {

    }


    /*
       Test Function
    */
    logFunction() {
        console.log('Load Data Service');
    }

    getRemoteData() {
        this.httpClient.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').subscribe(data => {
            console.log(data);
        });
    }

    getLocalData(): any {
        return this.httpClient.get('assets/data/referring-physician-data.json');
        // .subscribe(data => {
        // console.log(data);


    }


}

