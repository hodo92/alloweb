import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { WishList } from '../../models/wishList';
import { MatDialog } from '@angular/material';
import { WishListSearchComponent } from '../wish-list-search/wish-list-search.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  public childId: number;
  public wishListData: WishList[];
  public progress;
  public balance = 20

  constructor(private wishListService: WishListService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.childId = params.id;
      console.log(this.childId);
    });
   }

  ngOnInit() {
    

    this.wishListService.getWishList(this.childId)
    this.wishListService.WishListUpdated.subscribe((data)=>{
      this.wishListData = data;
      for(let i=0; i< this.wishListData.length; i++){
        this.wishListData[i].progress = this.balance / this.wishListData[i].price * 100;
        console.log(this.wishListData[1].progress);
      }
   
      console.log(this.wishListData)
      
    })
  }

  openDialog(): void {

    let dialogRef = this.dialog.open(WishListSearchComponent, {
      data: this.childId,
      height: '300px',
      width: '500px'
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
