"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = 'cart';
        this.products = [
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
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        templateUrl: 'app/products/product-list.component.html'
    })
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map