import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articlePipe'
})
export class ArticlePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
