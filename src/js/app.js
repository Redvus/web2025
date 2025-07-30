import '/scss/app.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/fontawesome.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/regular.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/solid.scss';
import '/fonts/fontawesome-free-7.0.0-web/scss/brands.scss';
import { Intro } from './Pages/Intro.js';
import { Nav } from './Components/Nav.js';
import { Header } from './Components/Header.js';
import { SidebarRight } from './Components/SidebarRight.js';
import { SidebarLeft } from './Components/SidebarLeft.js';
import { Footer } from './Components/Footer.js';

class Plugins {

    constructor() {
        new Intro();
        new Header();
        new SidebarRight();
        new SidebarLeft();
        new Nav();
        new Footer();
    }


}

export { Plugins }