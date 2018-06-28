for (let product of data.json().findItemsByKeywordsResponse[0].searchResult[0].item) {
    this.wishData.push(product.title, product.subtitle, product.galleryURL, product.sellingStatus[0].currentPrice[0].__value__);
}


product.title[0], product.subtitle[0], product.galleryURL[0], product.sellingStatus.currentPrice[0].__value__ ; 



// correct line 
"title" + product.title[0], "desc" + product.subtitle[0], "img" + product.galleryURL[0], "desc" + product.sellingStatus[0].currentPrice[0].__value__