import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
keyword:string;
currentPage:number=1;
size :number=10;
imageData=[];
totalPages:number;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onLoadImage(){
    this.imageData=[];
    this.doSearch();
   
  }

  doSearch(){
    this.http.get('https://pixabay.com/api/?key=15374904-1a42da5c6c59c64699e588135&q='+this.keyword+'&per_page='+this.size+'&page='+this.currentPage)
    .subscribe(FormData =>{
      FormData['hits'].forEach(element => {
        this.imageData.push(element);
      });
      // recuperer le nombre de pages
      this.totalPages = FormData['totalHits']/this.size;
    },
    error =>{console.log(error)});
  }

  loadData(evt){
if(this.currentPage<this.totalPages){
  console.log(this.currentPage+'/'+this.totalPages);
    ++this.currentPage;
    this.doSearch();
    evt.target.complete();
    //pour arréter le chargement une fois finis
    if(this.currentPage>=this.totalPages){
      evt.target.disabled=true;
    }
}

  }

}
