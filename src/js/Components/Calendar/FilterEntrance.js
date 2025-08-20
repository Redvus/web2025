export class FilterEntrance {

    constructor() {
        this.initLayout();
        this.initFilterEnt();
    }

    initLayout() {
        this.calendarFilter = document.querySelector('.main-content__calendar_filter');

        this.filterChoiceEntrance = document.createElement('div');
        this.filterChoiceEntranceSelect = document.createElement('select');
        this.filterChoiceArrowEntrance = document.createElement('div');

        this.filterChoiceEntrance.classList = 'main-content__calendar_select';
        this.filterChoiceEntranceSelect.id = 'calendarSelectEntrance';
        this.filterChoiceArrowEntrance.classList = 'fa-solid fa-chevron-down main-content__calendar_arrow';

        this.filterOptionsEntrance = [
            {
                text: 'Условия участия',
                value: 'choiceEnt'
            },
            {
                text: 'Вход свободный',
                value: 'entAdmissionFree'
            },
            {
                text: 'Необходима регистрация',
                value: 'entRegistration'
            },
            {
                text: 'По пушкинской карте',
                value: 'entAccordingPushkin'
            },
            {
                text: 'Платно',
                value: 'entFee'
            },
        ];

        this.filterOptionsEntrance.forEach(option =>
            this.filterChoiceEntranceSelect.options.add(
                new Option(option.text, option.value, option.selected)
            )
        );

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceEntrance);
        this.filterChoiceEntrance.appendChild(this.filterChoiceEntranceSelect);
        this.filterChoiceEntrance.appendChild(this.filterChoiceArrowEntrance);
    }

    initFilterEnt() {

    }
}