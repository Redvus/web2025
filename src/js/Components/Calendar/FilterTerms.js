

export class FilterTerms {

    constructor() {
        this.initLayout();
        this.initTermsSelect();
        this.initFilterTerms();
    }

    initLayout() {
        this.calendarFilter = document.querySelector('.calendar__filter');

        this.filterChoiceTerms = document.createElement('div');
        this.filterChoiceTermsSelect = document.createElement('select');
        this.filterChoiceTermsArrow = document.createElement('div');

        this.filterChoiceTerms.classList = 'calendar__select';
        this.filterChoiceTermsSelect.id = 'calendarSelectTerms';
        this.filterChoiceTermsArrow.classList = 'fa-solid fa-chevron-down calendar__arrow';

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceTerms);
        this.filterChoiceTerms.appendChild(this.filterChoiceTermsSelect);
        this.filterChoiceTerms.appendChild(this.filterChoiceTermsArrow);

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceTerms);
        this.filterChoiceTerms.appendChild(this.filterChoiceTermsSelect);
        this.filterChoiceTerms.appendChild(this.filterChoiceTermsArrow);
    }

    initTermsSelect() {
        this.filterOptionsTerms = [
            {
                text: 'Форма мероприятия',
                value: 'choiceTerms'
            },
            {
                text: 'Лекция',
                value: 'termsLecture'
            },
            {
                text: 'Выставка',
                value: 'termsExhibition'
            },
            {
                text: 'Встреча',
                value: 'termsMeeting'
            },
            {
                text: 'Мастер-класс',
                value: 'termsMasterClass'
            },
            {
                text: 'Музыкальный вечер',
                value: 'termsMusicalEvening'
            },
            {
                text: 'Заседание клуба',
                value: 'termsClubMeeting'
            },
            {
                text: 'Интерактив',
                value: 'termsInteractivity'
            },
            {
                text: 'Спектакль',
                value: 'termsPerformance'
            },
            {
                text: 'Конференция',
                value: 'termsConferences'
            },
            {
                text: 'Фестиваль',
                value: 'termsFestivals'
            },
            {
                text: 'Беседа',
                value: 'termsConversation'
            },
            {
                text: 'Обзор книг',
                value: 'termsBookReview'
            },
            {
                text: 'Другие',
                value: 'termsOther'
            }
        ];

        this.filterOptionsTerms.forEach(option =>
            this.filterChoiceTermsSelect.options.add(
                new Option(option.text, option.value, option.selected)
            )
        );
    }

    initFilterTerms() {
        const
            calendarMonthDates = document.querySelectorAll('.calendar__month_date'),
            calendarSelectTerms = document.getElementById('calendarSelectTerms'),
            calendarEventSingleDev = document.querySelectorAll('.calendar__events_single'),
            activeDate = document.querySelectorAll('.cd-active')
        ;

        calendarSelectTerms.addEventListener("change", () => {
            let daysActiveLib = JSON.parse(localStorage.getItem('daysActiveLib'));
            // console.log(daysActiveLib);

            for (let i = 0; i < this.filterOptionsTerms.length; i++) {
                if (calendarSelectTerms.value === this.filterOptionsTerms[i].value) {
                    calendarEventSingleDev.forEach(evTerms => {
                        calendarMonthDates.forEach((dTerms, pos) => {
                            // if (dTerms.classList.contains('is-active')) {
                                if (evTerms.getAttribute('data-terms') !== this.filterOptionsTerms[i].value) {
                                    evTerms.style.display = 'none';
                                    evTerms.style.visibility = 'hidden';
                                } else {
                                    evTerms.style.display = 'block';
                                    evTerms.style.visibility = 'visible';
                                }

                                if (evTerms.getAttribute('data-terms') === this.filterOptionsTerms[i].value) {
                                    dTerms.classList.remove('is-active');
                                    if (evTerms.parentNode.id === dTerms.getAttribute('data-id')) {
                                        setTimeout(() => {
                                            dTerms.classList += ' is-active';
                                            let daysActiveTerms = this.filterOptionsTerms[i].value;
                                            localStorage.setItem(`daysActiveTerms`, JSON.stringify(daysActiveTerms));
                                        }, 20)
                                    } else if (evTerms.parentNode.id !== dTerms.getAttribute('data-id')) {
                                        setTimeout(() => {
                                            dTerms.style.opacity = '0.5';
                                            dTerms.style.userSelect = 'none';
                                            dTerms.style.pointerEvents = 'none';
                                        }, 20)
                                    }
                                }
                            // }
                        })
                    })
                } else if (calendarSelectTerms.value === this.filterOptionsTerms[0].value) {
                    calendarEventSingleDev.forEach(evTerms => {
                        calendarMonthDates.forEach((dTerms) => {
                            if (evTerms.getAttribute('data-terms') !== this.filterOptionsTerms[0].value) {
                                evTerms.style.display = 'block';
                                evTerms.style.visibility = 'visible';
                                dTerms.classList.remove('is-active');
                                dTerms.style.userSelect = 'auto';
                                dTerms.style.pointerEvents = 'auto';
                                dTerms.style.opacity = '1';
                                localStorage.setItem(`daysActiveTerms`, JSON.stringify(''));
                            }
                        })
                    })
                }
            }
        })
    }
}