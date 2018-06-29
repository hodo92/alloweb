import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { WishList } from '../../models/wishList';


@Component({
  selector: 'app-wish-list-search',
  templateUrl: './wish-list-search.component.html',
  styleUrls: ['./wish-list-search.component.css']
})

export class WishListSearchComponent implements OnInit {
    products: any[] = null;
    public childId: number = 2 ;
    wishSearchData: any = new Array<any>();
    keyword : string ; 
    constructor(private wishListService : WishListService) {
        this.wishListService.EbayDataUpdated.subscribe((data) => {
            this.wishSearchData = data;
            // console.log(data);

        })
     }

  ngOnInit() {
     // this.wishListService.getWishList(this.childId)
   
    }

    getItems() { 
        this.wishListService.findItemsByKeywords(this.keyword)
        this.wishListService.EbayDataUpdated.subscribe((data)=>{
        
           this.wishSearchData = data;
            console.log(this.wishSearchData);
            
        })
        
    }
    addToWishList(item){
        
        let itemToAdd = {
            user_id : this.childId,
            goal_id: null,
            title: item.title[0],
            description: "description",
            price: item.sellingStatus[0].currentPrice[0].__value__,
            goal_img: item.galleryURL[0],
            link: item.viewItemURL[0],
            status: false 
        }
        
        this.wishListService.addToWishList(itemToAdd)
        
    }

}

