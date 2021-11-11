import {Component} from '@angular/core';
import {article} from "./types";


const articleList: article[] = [
  new article('Cherry Cola', 1, 2.5, 'Cola Company'),
  new article('Lemon Soda', 2, 1.5, 'Lemon Limited'),
  {name: 'Pure Water', id: 3, price: 1, producingCompany: 'Waterworks'}, //ducktyping
  {name: 'Orange Juice', id: 4, price: 2, producingCompany: 'OrangeCo'}
];

@Component({
  selector: 'app-root',
  template: `
    <h1 class="center">Welcome to a ngPrime and pipe demo!</h1>
    <br>
    <h3 class="center">Pipedemo</h3>
    <div>
      <p class="center">Tabview with custompipe!</p>
      <p-tabView>
        <p-tabPanel *ngFor="let article of articleList; let arrayIndex=index" [header]="(arrayIndex+1)+'. article'">
          Name: {{article | articlePipe :true :false :false :false}}
          <br>
          Id: {{article | articlePipe :false :true :false :false}}
          <br>
          Price: {{article | articlePipe :false :false :true :false}}
          <br>
          Company: {{article | articlePipe :false :false :false :true}}
        </p-tabPanel>
      </p-tabView>
    </div>
    <br>
    <div>
      <p class="center">Tabview without custompipe for comparison!</p>
      <p-tabView> <!-- variante ohne pipe zum vergleich -->
        <p-tabPanel *ngFor="let article of articleList; let arrayIndex = index" [header]="(arrayIndex+1)+'. article'">
          Name: {{article.name}}
          <br>
          Id: {{article.id}}
          <br>
          Price: {{article.price}}
          <br>
          Company: {{article.producingCompany}}
        </p-tabPanel>
      </p-tabView>
    </div>
    <br>
    <h3 class="center">PimeNg demo</h3>
    <div>
      <p class="center">Table demo</p>
      <p-table [value]="articleList" [rows]="2" [paginator]="true">
        <ng-template pTemplate="header">
          <tr>
            <th pSortableColumn="name">Name
              <p-sortIcon field="name"></p-sortIcon>
            </th>
            <th pSortableColumn="id">Id
              <p-sortIcon field="id"></p-sortIcon>
            </th>
            <th pSortableColumn="price">Price
              <p-sortIcon field="price"></p-sortIcon>
            </th>
            <th pSortableColumn="producingCompany">Company
              <p-sortIcon field="producingCompany"></p-sortIcon>
            </th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-article>
          <tr>
            <td>{{article.name}}</td>
            <td>{{article.id}}</td>
            <td>{{article.price}}</td>
            <td>{{article.producingCompany}}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>
    <br>
    <div>
      <p class="center">Graph demo</p>
      <p-chart type="doughnut" [data]="articleListGraphData" width="400" height="300"></p-chart>
    </div>
  `,
  styles: []
})
export class AppComponent {
  articleList = articleList;
  articleListGraphData = { //diese format ist unbedingt einzuhalten
    labels: this.getArticleNames(),//['Cola', 'Lemon Soda', 'Pure Water', 'Orange Juice'],//händisch geschrieben
    datasets: [{
      data: this.getArticlePrices(),//[2.5, 1.5, 1, 2],
      backgroundColor: ['red', 'yellow', 'blue', 'orange']
    }]
  }

  getArticleNames(): string[] {
    const arrayWithArticleNames: string[] = [];
    for (let article of articleList) {
      arrayWithArticleNames.push(article.name);
    }
    return arrayWithArticleNames;
  }

  getArticlePrices(): number[] {
    const arrayWithArticlePrices: number[] = [];
    for (let article of articleList) {
      arrayWithArticlePrices.push(article.price)
    }
    return arrayWithArticlePrices;
  }
}
