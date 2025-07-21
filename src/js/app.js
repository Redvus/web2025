// if (import.meta.env.DEV) {
//     import('/main.css');
// }
import '/scss/app.scss';

class Plugins {
    constructor() {
        // if (import.meta.env.DEV) {
            this.initLayout(); // Скрывать для build
        // }
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector('.wrapper');

        this.sidebar = document.createElement('div');
        this.sidebar.className = 'sidebar';

        this.sidebarStatic = document.createElement('div');
        this.sidebarStatic.className = 'sidebar-static';

        this.header = document.createElement('div');
        this.header.className = 'header header--desktop';
        this.header.innerHTML = `
            <div class="header__logo">
                <a href="/" class="header__logo_link">
                    <img src="/assets/dev/images/smibsLogoDev.png" alt="Logo" class="header__logo-img">
                </a>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton"></a>
        `;

        this.mainContent = document.createElement('div');
        this.mainContent.className = 'main-content';

        this.mainContentInside = document.createElement('div');
        this.mainContentInside.className = 'main-content__inside';

        this.footer = document.createElement('div');
        this.footer.className = 'footer';
        this.footerTopBlock = document.createElement('div');

        //Appends
        this.wrapper.appendChild(this.header);
        this.body.appendChild(this.footer);
        this.wrapper.appendChild(this.sidebar);
        // this.wrapper.appendChild(this.sidebarStatic);
        // this.wrapper.appendChild(this.mainContent);
        // this.mainContent.appendChild(this.mainContentInside);
    }
}

export { Plugins }