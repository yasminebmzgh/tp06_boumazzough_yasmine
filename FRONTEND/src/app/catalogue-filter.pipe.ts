import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './models/product.model';
@Pipe({
  name: 'catalogueFilter'
})
export class CatalogueFilterPipe implements PipeTransform {

  transform(list: Product[], value: string): Product[] {
    return value ? list.filter(item => item.title === value || item.price === parseFloat(value) || item.reference === value) : list;
  }

}
