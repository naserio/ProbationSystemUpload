import {Deserializable} from "./deserializable.model";


export class caseFiles implements Deserializable{
    private ETag: string;
    private key: string;
    //private type: string;
    private lastModified: string;
    private size: number;
    private StorageClass: string;

    
  
    constructor(ETag: string, key: string, /*type: string,*/ 
        lastModified: string, size: number, StorageClass: string)
    {
      this.ETag = ETag;
      this.key = key;
      //this.type = type;
      this.lastModified = lastModified;
      this.size = size;
      this.StorageClass = StorageClass;
    }
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  
    getEtag(): string {
        return `${this.ETag}`;
      }
    getName(): string {
      return `${this.key}`;
    }
  
    // getType(): string {
    //     return `${this.type}`;
    // }
    getLastUpdated(): string {
        return `${this.lastModified}`;
      }
    
      getSize(): number {
          return this.size;
      }
      getStorageClass(): string {
        return `${this.StorageClass}`;
      }
  }