import { Component, Input, OnChanges } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  // Este decorator Input faz com que este valor vire um atributo da minha tag!
  @Input()
  rating: number = 0;

  starWidth: number;
  faStar = faStar;

  ngOnChanges(): void {
    // A div de estrelas vai se adaptar a quantidade de estrelas que tiver dentro dela
    this.starWidth = this.rating * 90 / 5;
  }
}