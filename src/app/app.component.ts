import { Component, Pipe } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UploadS3Service } from './UploadS3';
import { GetCaseFilesService } from './GetCaseFiles';
//import{TransformPipe }from './Transform.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'ProbationSystemUpload';
  files: File[] = [];
  allfiles: any = [];
  renderFile: any = [];
  responseList :any= [];
  constructor(
    private uploadService: UploadS3Service,
    private getcasefile: GetCaseFilesService,
    private toaster: ToastrService,
   // private transformer: TransformPipe,
  ) {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  
  async onFileUpdate() {
    console.log(this.files);
    if (this.files.length < 1) {
      this.toaster.error('Please Select Drop your File first');
      return;
    }

    for (let i = 0; i < this.files.length; i += 1) {
      let file = this.files[i];

      let filePath =
        'files/' + 2021 + '_' + file.name; // to create unique name for avoiding being replaced
      try {
        let response = await this.uploadService.uploadFile(file, filePath);
        
        console.log(response);
        

        this.toaster.success(file.name + 'uploaded Successfully :)');
        const url = (response as any).Location;
        this.renderFile.push(url);
        this.renderFile.g();        
      } catch (error) {
        this.toaster.error('Something went wrong! ');
      }
    }
    this.files = [];
  }
  async onFileList() {
    
    this.responseList=  await this.getcasefile.getFile();
    
    console.log(this.responseList);

    
  }
}
