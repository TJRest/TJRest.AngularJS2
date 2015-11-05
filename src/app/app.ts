import {
    bootstrap,
    Component,
    FORM_DIRECTIVES,
    NgFor,
    NgIf
} from 'angular2/angular2';

import hero = require('/app/classes/CHero');

@Component({
    selector: 'my-app',
    templateUrl:'app/template.html',
    directives: [FORM_DIRECTIVES, NgFor, NgIf]
})
class AppComponent {
}
bootstrap(AppComponent);
