import {Component, bootstrap} from 'angular2/angular2';
import hero = require('../classes/CHero');

@Comment({
    selector: '<hero></hero>',
    template:`
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div><label>name: </label>{{hero.name}}</div>
      `
})

class Hero {
    public hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };
}



bootstrap(Hero);
