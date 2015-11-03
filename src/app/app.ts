import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl:'app/template.html',
  directives: [FORM_DIRECTIVES]
})
class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  public save = function(){
      alert(Hero.name + " saved!");
  }
}
bootstrap(AppComponent);
