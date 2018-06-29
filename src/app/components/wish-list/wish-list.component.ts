import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { WishList } from '../../models/wishList';
import { MatDialog } from '@angular/material';
import { WishListSearchComponent } from '../wish-list-search/wish-list-search.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  public childId = 2;
  public wishListData: WishList[];

  constructor(private wishListService: WishListService, public dialog: MatDialog) { }

  ngOnInit() {
    this.wishListService.getWishList(this.childId)
    this.wishListService.WishListUpdated.subscribe((data)=>{
      this.wishListData = data
      console.log(this.wishListData)
    })
  }

  openDialog(): void {

    let dialogRef = this.dialog.open(WishListSearchComponent, {
      data: this.childId
    });

    dialogRef.afterClosed().subscribe(result => {
      //window.location.reload();
      console.log('The dialog was closed');
    });
  }

  removeWish(wish){

    this.wishListService.removeFromWishList(wish);
  }
}
