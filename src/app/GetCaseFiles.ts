import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import {authenticateS3}  from './Services/auhenticateS3';
import {caseFiles} from './model/caseFiles.model';
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import { Observable } from "rxjs";
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class GetCaseFilesService {
  //allCases :caseFiles[] = [];
  
  constructor(private _authenticateS3:authenticateS3) {}

  
  getFile() {
    return new Promise((resolve , reject) => {
      const bucket = this._authenticateS3.s3Access();
      
      const params = {
        Bucket: 'probatiosystemupload', //BUCKET_NAME  
        Prefix: 'files/',      
      };
      
      bucket.listObjectsV2(params, function (err, data) {
        if (err) {
            console.log(err);
            return reject(err);
        } 
        else {
          
          //console.log(data);
          //data.Contents?.forEach(obj =>allCases.push(obj.));
          return resolve(data.Contents);    
            
           
            
        }
    
    })
    });
  }
}