import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiService {
    private url = environment.api_endpoint;
    private headers = new HttpHeaders();


    constructor(public http: HttpClient) {
        this.headers = this.headers.set('Access-Control-Allow-Origin', '*');
        this.headers = this.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        this.headers = this.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        this.headers = this.headers.set('Access-Control-Allow-Credentials', 'true');

    }

    get(endpoint: string, params?: any, options?: any) {
        console.log(this.url);
        const getUrl = (endpoint.indexOf('http') > -1) ? endpoint : (this.url + endpoint);
        if (!options) {
            options = {};
        }

        // Support easy query params for GET requests
        let p = new HttpParams();
        if (params) {
            for (const k in params) {
                p = p.append(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.params = p;
        }
        if(!options.headers){
            options.headers = this.headers;
        }

    return this.http.get(getUrl, {params: p,headers:this.headers});
    }

    post(endpoint: string, body: any, options?: any) {
        if (!options) {
            options = {};
        }
        options.headers = this.headers;
        if(!options.headers){
            options.headers = this.headers;
        }
        return this.http.post(this.url + endpoint, body, options);
    }

    put(endpoint: string, body: any, options?: any) {
        if (!options) {
            options = {};
        }
        if(!options.headers){
            options.headers = this.headers;
        }
        return this.http.put(this.url + endpoint, body, options);
    }

    delete(endpoint: string, options?: any) {
        if (!options) {
            options = {};
        }
        if(!options.headers){
            options.headers = this.headers;
        }
        return this.http.delete(this.url + endpoint, options);
    }

    patch(endpoint: string, body: any, options?: any) {
        if (!options) {
            options = {};
        }
        if(!options.headers){
            options.headers = this.headers;
        }
        return this.http.put(this.url + endpoint, body, options);
    }

    private catchErrors() {

        return (res: Response) => {

            if (res.status === 401 || res.status === 403) {
                // console.log("Error_Token_Expired: redirecting to login.");
                // this.events.publish('user:logout');
            }
            return Observable.throw(res);
        };
    }
}
