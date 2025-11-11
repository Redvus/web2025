
export class FilterAge {

    constructor() {
        this.initLayout();
        this.initFilterAge();
    }

    initLayout() {
        this.calendarFilter = document.querySelector('.main-content__calendar_filter');

        this.filterChoiceAge = document.createElement('div');
        this.filterChoiceAgeSelect = document.createElement('select');
        this.filterChoiceLibraryArrowAge = document.createElement('div');

        this.filterChoiceAge.classList = 'main-content__calendar_select';
        this.filterChoiceAgeSelect.id = 'calendarSelectEntrance';
        this.filterChoiceLibraryArrowAge.classList = 'fa-solid fa-chevron-down main-content__calendar_arrow';

        this.filterLibraryOptionsAge = [
            {
                text: 'Возраст',
                value: 'choiceLibrary'
            },
            {
                text: 'Библиотека №23',
                value: 'library_23'
            },
            {
                text: 'Библиотека №32',
                value: 'library_32'
            },
        ];

        this.filterLibraryOptionsAge.forEach(option =>
            this.filterChoiceAgeSelect.options.add(
                new Option(option.text, option.value, option.selected)
            )
        );

        // Appends
        this.calendarFilter.appendChild(this.filterChoiceAge);
        this.filterChoiceAge.appendChild(this.filterChoiceAgeSelect);
        this.filterChoiceAge.appendChild(this.filterChoiceLibraryArrowAge);
    }

    initFilterAge() {

    }
}