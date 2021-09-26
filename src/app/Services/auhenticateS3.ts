import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class authenticateS3 {
  
  constructor() {}
  
  s3Access(){
    
      const bucket = new S3({
        accessKeyId: 'AKIA23ODCK2YM765OYE4', // ACCESS_KEY_ID
        secretAccessKey: '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', // SECRET_ACCESS_KEY
        region: 'us-east-1', // BUCKET_REGION
      });
      return bucket;

    }
}