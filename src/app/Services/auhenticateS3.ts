import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class authenticateS3 {
  
  constructor() {}
  
  s3Access(){
    
      const bucket = new S3({
        accessKeyId: '', // ACCESS_KEY_ID
        secretAccessKey: '', // SECRET_ACCESS_KEY
        region: 'us-east-1', // BUCKET_REGION
      });
      return bucket;

    }
}
