import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, Headers} from "@angular/http";

import { Observable } from 'rxjs/Rx';

import { Payload } from "../models/payload";

import 'rxjs/add/operator/toPromise';
import {environment} from "../../environments/environment";

@Injectable()
export class MyService {

    private baseUrl;
    private user="multichainrpc";
    private pass="4zztwXfBEUfga6uGQVUFiqSqsSdEEKjsPrXXhZd86xkD";

    constructor(private http:Http) {
      this.baseUrl = "http://127.0.0.1:5000/";
    }

    getinfo():Promise<any> {
        return this.callAPI('getinfo','get',null,null,null);
    }

    getpeerinfo():Promise<any> {
        return this.callAPI('getpeerinfo','get',null,null,null);
    }
    
    callAPI(url: string, httpMethod: string, params: URLSearchParams, headers: Headers, body: string) : Promise<any>{
        switch (httpMethod) {

            case 'get':
                return this.http.get(this.baseUrl+url, {search: params}).toPromise()
                  .then(response => response.json())
                  .catch((error: Error) => console.log(error));

            case 'post':
                return this.http.post(this.baseUrl + url, body, {
                headers: headers,
                search: params
                }).toPromise().then(response => response.json())
                .catch((error: Error) => console.log(error));

            case 'put':
                return this.http.put(url, body, {
                headers: headers,
                search: params
                }).toPromise()
                .catch((error: Error) => console.log(error));

            case 'delete':
                return this.http.delete(url, {search: params}).toPromise()
                  .catch((error: Error) => console.log(error));

            default:
                throw new Error('Unsupported http method');

        }
  }

  private handleError(error: any) {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
