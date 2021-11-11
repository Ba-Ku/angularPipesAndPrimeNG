import {Pipe, PipeTransform} from '@angular/core';
import {article} from './types'

@Pipe({
  name: 'articlePipe'
})
export class ArticlePipePipe implements PipeTransform {

  transform(article: article, showName=true, showId=true, showPrice=true, showProducingCompany=true): unknown {
    if (!showName && !showId && !showPrice && !showProducingCompany) {
      return null;
    } else if (showName && !showId && !showPrice && !showProducingCompany) {
      return article.name;
    } else if (!showName && showId && !showPrice && !showProducingCompany) {
      return article.id;
    } else if (!showName && !showId && showPrice && !showProducingCompany) {
      return article.price;
    } else if (!showName && !showId && !showPrice && showProducingCompany) {
      return article.producingCompany;
    } else if (showName && showId && !showPrice && !showProducingCompany) {
      return article.name + ' ' + article.id;
    } else if (showName && !showId && showPrice && !showProducingCompany) {
      return article.name + ' ' + article.price;
    } else if (showName && !showId && !showPrice && showProducingCompany) {
      return article.name + ' ' +article.producingCompany;
    } else if (!showName && showId && showPrice && !showProducingCompany) {
      return article.id + ' ' + article.price;
    } else if (!showName && showId && !showPrice && showProducingCompany) {
      return article.id + ' ' + article.producingCompany;
    } else if (!showName && !showId && showPrice && showProducingCompany) {
      return article.price + ' ' + article.producingCompany;
    } else if (showName && showId && showPrice && !showProducingCompany) {
      return article.name + ' ' + article.id + ' ' + article.price;
    } else if (showName && showId && !showPrice && showProducingCompany) {
      return article.name + ' ' + article.id + ' ' +article.producingCompany;
    } else if (showName && !showId && showPrice && showProducingCompany) {
      return article.name + ' ' + article.price + ' ' + article.producingCompany;
    } else if (!showName && showId && showPrice && showProducingCompany) {
      return article.id + ' ' + article.price + ' ' + article.producingCompany;
    } else {
      return article.name + ' ' + article.id + ' ' + article.price + ' ' + article.producingCompany;
    }

  }

}
