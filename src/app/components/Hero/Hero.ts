import {Hero} from '/app/classes/CHero';
import {bootstrap, Component} from 'angular2/angular2';

@Component({
  selector: 'hero',
  templateUrl: 'Hero.tpl.html',
  properties: ['hero : data']
});

class AppComponent {
  console.log(hero);
}

bootstrap(AppComponent);
