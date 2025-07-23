import '/scss/app.scss';
import '/fonts/fontawesome-free-6.1.0-web/scss/fontawesome.scss';
import '/fonts/fontawesome-free-6.1.0-web/scss/regular.scss';
import '/fonts/fontawesome-free-6.1.0-web/scss/solid.scss';
import '/fonts/fontawesome-free-6.1.0-web/scss/brands.scss';
import { Intro } from './Pages/Intro.js';

class Plugins {

    constructor() {
        new Intro();
    }


}

export { Plugins }