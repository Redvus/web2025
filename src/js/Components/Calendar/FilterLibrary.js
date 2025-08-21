import {FilterTerms} from "./FilterTerms.js";

export class FilterLibrary {

    constructor() {
        this.initLayout();
        this.initLibrarySelect();
        this.initFilterLibrary();
    }

    initLayout() {
        this.calendarFilter = document.querySelector('.calendar__filter');

        this.filterChoiceLibrary = document.createElement('div');
        this.filterChoiceLibrarySelect = document.createElement('select');
        this.filterChoiceLibraryArrow = document.createElement('div');

        this.filterChoiceLibrary.classList = 'calendar__select';
        this.filterChoiceLibrarySelect.id = 'calendarSelectLibrary';
        this.filterChoiceLibraryArrow.classList = 'fa-solid fa-chevron-down calendar__arrow';

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceLibrary);
        this.filterChoiceLibrary.appendChild(this.filterChoiceLibrarySelect);
        this.filterChoiceLibrary.appendChild(this.filterChoiceLibraryArrow);
    }

    initLibrarySelect() {
        this.filterLibraryOptions = [
            {
                text: 'Выберите филиал',
                value: 'Выберите филиал'
            },
            {
                text: 'ЦГБ им. Н.К. Крупской',
                value: 'ЦГБ им. Н.К. Крупской'
            },
            {
                text: 'Библиотека №1',
                value: 'Библиотека №1'
            },
            {
                text: 'Библиотека №2',
                value: 'Библиотека №2'
            },
            {
                text: 'Библиотека №3',
                value: 'Библиотека №3'
            },
            {
                text: 'Библиотека №4',
                value: 'Библиотека №4'
            },
            {
                text: 'Библиотека №5',
                value: 'Библиотека №5'
            },
            {
                text: 'Библиотека №6',
                value: 'Библиотека №6'
            },
            {
                text: 'Библиотека №7',
                value: 'Библиотека №7'
            },
            {
                text: 'Библиотека №8',
                value: 'Библиотека №8'
            },
            {
                text: 'Библиотека №9',
                value: 'Библиотека №9'
            },
            {
                text: 'Библиотека №10',
                value: 'Библиотека №10'
            },
            {
                text: 'Библиотека №11',
                value: 'Библиотека №11'
            },
            {
                text: 'Библиотека №12',
                value: 'Библиотека №12'
            },
            {
                text: 'Библиотека №13',
                value: 'Библиотека №13'
            },
            {
                text: 'Библиотека №14',
                value: 'Библиотека №14'
            },
            {
                text: 'Библиотека №15',
                value: 'Библиотека №15'
            },
            {
                text: 'Библиотека №16',
                value: 'Библиотека №16'
            },
            {
                text: 'Библиотека №17',
                value: 'Библиотека №17'
            },
            {
                text: 'Библиотека №18',
                value: 'Библиотека №18'
            },
            {
                text: 'Библиотека №19',
                value: 'Библиотека №19'
            },
            {
                text: 'Библиотека №20',
                value: 'Библиотека №20'
            },
            {
                text: 'Библиотека №21',
                value: 'Библиотека №21'
            },
            {
                text: 'Библиотека №22',
                value: 'Библиотека №22'
            },
            {
                text: 'Библиотека №23',
                value: 'Библиотека №23'
            },
            {
                text: 'Библиотека №24',
                value: 'Библиотека №24'
            },
            {
                text: 'Библиотека №25',
                value: 'Библиотека №25'
            },
            {
                text: 'Библиотека №26',
                value: 'Библиотека №26'
            },
            {
                text: 'Библиотека №27',
                value: 'Библиотека №27'
            },
            {
                text: 'Библиотека №28',
                value: 'Библиотека №28'
            },
            {
                text: 'Библиотека №29',
                value: 'Библиотека №29'
            },
            {
                text: 'Библиотека №30',
                value: 'Библиотека №30'
            },
            {
                text: 'Библиотека №31',
                value: 'Библиотека №31'
            },
            {
                text: 'Библиотека №32',
                value: 'Библиотека №32'
            },
            {
                text: 'Библиотека №33',
                value: 'Библиотека №33'
            },
            {
                text: 'Библиотека №34',
                value: 'Библиотека №34'
            }
        ];

        this.filterLibraryOptions.forEach(option =>
            this.filterChoiceLibrarySelect.options.add(
                new Option(option.text, option.value, option.selected)
            )
        );
    }

    initFilterLibrary() {
        const
            calendarMonthDates = document.querySelectorAll('.calendar__month_date'),
            calendarSelectLibrary = document.getElementById('calendarSelectLibrary'),
            calendarEventSingleDev = document.querySelectorAll('.calendar__events_single')
        ;

        calendarSelectLibrary.addEventListener("change", () => {
            let daysActiveLib = JSON.parse(localStorage.getItem('daysActiveLib'));
            let daysActiveTerms = JSON.parse(localStorage.getItem('daysActiveTerms'));

            for (let i = 0; i < this.filterLibraryOptions.length; i++) {
                if (calendarSelectLibrary.value === this.filterLibraryOptions[i].value) {
                    calendarEventSingleDev.forEach(evLib => {
                        calendarMonthDates.forEach((dateLib, pos) => {
                            if (evLib.getAttribute('data-lib') !== this.filterLibraryOptions[i].value) {
                                evLib.style.display = 'none';
                                evLib.style.visibility = 'hidden';
                            } else {
                                evLib.style.display = 'block';
                                evLib.style.visibility = 'visible';
                            }

                            if (evLib.getAttribute('data-lib') === this.filterLibraryOptions[i].value) {
                                dateLib.classList.remove('cd-active');
                                if (evLib.parentNode.id === dateLib.getAttribute('data-id')) {
                                    setTimeout(() => {
                                        dateLib.classList += ' cd-active';
                                        let daysActiveLib = this.filterLibraryOptions[i].value;
                                        localStorage.setItem('daysActiveLib', JSON.stringify(daysActiveLib));
                                    }, 20)
                                } else if (evLib.parentNode.id !== dateLib.getAttribute('data-id')) {
                                    setTimeout(() => {
                                        dateLib.style.opacity = '0.5';
                                        dateLib.style.userSelect = 'none';
                                        dateLib.style.pointerEvents = 'none';
                                    }, 20)
                                }
                            }
                        });
                    })

                    if (calendarEventSingleDev.length !== null) {
                        calendarMonthDates.forEach((noneLib, pos) => {
                            if (noneLib.getAttribute('data-lib') !== this.filterLibraryOptions[0].value) {
                                // if (noneLib.classList.contains('cd-show')) {
                                //     noneLib.classList.remove('cd-show');
                                // }
                                noneLib.classList.remove('cd-active');
                                noneLib.style.opacity = '0.5';
                                noneLib.style.userSelect = 'none';
                                noneLib.style.pointerEvents = 'none';
                            }
                        });
                    }

                } else if (calendarSelectLibrary.value === this.filterLibraryOptions[0].value) {
                    calendarEventSingleDev.forEach(evLib => {
                        calendarMonthDates.forEach((dateLib) => {
                            if (evLib.getAttribute('data-lib') !== this.filterLibraryOptions[0].value) {
                                evLib.style.display = 'block';
                                evLib.style.visibility = 'visible';
                                dateLib.classList.remove('cd-active');
                                dateLib.style.userSelect = 'auto';
                                dateLib.style.pointerEvents = 'auto';
                                dateLib.style.opacity = '1';
                                localStorage.setItem('daysActiveLib', JSON.stringify(''));
                            }
                        });
                    });
                }
            }
        });
    }
}