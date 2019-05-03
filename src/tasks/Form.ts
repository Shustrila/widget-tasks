class Form {
    private readonly formClass : string;
    private readonly submitClass : string;
    private readonly label : string;
    private readonly input : string;
    private readonly fields : Array<string>;
    private readonly fieldsType : Array<string>;
    private readonly fieldsPlaceholder : Array<string>;

    constructor() {
        this.formClass = 'form';
        this.submitClass = 'form__submit';
        this.label = 'form__label';
        this.input = 'form__input';
        this.fields = ['title', 'desc'];
        this.fieldsType = ['text', 'text'];
        this.fieldsPlaceholder = ['Title', 'Description'];
    }

    public render() : HTMLFormElement {
        const form =  document.createElement('form');
        const submit = document.createElement('input');

        form.className = this.formClass;
        form.action = '/';

        for (let i = 0; i < this.fields.length; i++) {
            const input = document.createElement('input');
            const label = document.createElement('label');

            input.className = `${this.input} ${this.input}-${this.fields[i]}`;
            input.type = this.fieldsType[i];
            input.name = this.fields[i];
            input.placeholder = this.fieldsPlaceholder[i];

            label.className = `${this.label} ${this.label}-${this.fields[i]}`;
            label.appendChild(input);

            form.appendChild(label);
        }

        submit.className = this.submitClass;
        submit.type = 'submit';
        submit.value = 'Добавить задачу';

        form.appendChild(submit);

        return form;
    }
}

export default Form;
