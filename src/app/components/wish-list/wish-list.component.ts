import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { WishList } from '../../models/wishList';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent implements OnInit {
    products: any[] = null;
    public childId: number = 2 ;
    wishListData: WishList[] = new Array<WishList>();
    keyword : string ; 
    constructor(private wishListService : WishListService) {
        this.wishListService.WishListUpdated.subscribe((data) => {
            this.wishListData = data;
            // console.log(data);
            
        })
     }

  ngOnInit() {
      this.wishListService.getWishList(this.childId)
    }

    getItems() { 
        this.wishListService.findItemsByKeywords(this.keyword);
    }
}

