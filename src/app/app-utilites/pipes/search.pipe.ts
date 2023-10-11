import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CartPipe implements PipeTransform {

  transform(products: any, filterName: string): any {

    if (filterName) {
      const data = products.filter((productItem: any) => {
        return productItem.productName.toLowerCase().includes(filterName.toLowerCase()) 
      })

      return data

    } else {
      return products
    }

  }

}
