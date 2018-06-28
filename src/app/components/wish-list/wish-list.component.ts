import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { WishList } from '../../models/wishList';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  public childId = 2;
  public wishListData: WishList[];

  constructor(private wishListService: WishListService) { }

  ngOnInit() {
    this.wishListService.getWishList(this.childId)
    this.wishListService.WishListUpdated.subscribe((data)=>{
      this.wishListData = data
      console.log(this.wishListData)
    })
  }

}
