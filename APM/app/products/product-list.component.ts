import {Component} from '@angular/core';
@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string='Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage : boolean = false;
    listFilter : string = 'cart';
    products : any[] = [
    {
        "productId": 1,
        "productName": "Cricket Bat",
        "productCode": "CRC-MRF",
        "releaseDate": "April 24, 1989",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 28,
        "starRating": 4.8,
        "imageUrl": "http://www.cricketdirect.co.uk/imagecache/cd468506-3242-4b55-9365-a2de009b1e27_500x500.jpg"
    },
    {
        "productId": 2,
        "productName": "Cricket Ball",
        "productCode": "Stumper-101",
        "releaseDate": "March 28, 1994",
        "description": "15 gallon capacity rolling garden cart",
        "price": 10.28,
        "starRating": 4.2,
        "imageUrl": "https://4.imimg.com/data4/HJ/WV/NSDMERP-31789370/stumpercricketball-500x500.png"
    },
    
];
toggleImage(): void{
    this.showImage = !this.showImage;
}
}