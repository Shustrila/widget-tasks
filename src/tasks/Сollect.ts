class Collect {
    private readonly root : string;
    private form : object;
    private listTasks : object;
    private storage : object;

    constructor(form : object, listTasks : object, storage : object) {
        this.root = '[data-widget=tasks]';
        this.form = form;
        this.listTasks = listTasks;
        this.storage = storage;
    }

    public init() : void {
        const root = document.querySelector(this.root);
        const form = (<HTMLFormElement>this.form).render();

        form.addEventListener('submit', this.FormEventSubmit);

        root.appendChild(form);
        console.log(form);
    }

    private FormEventSubmit(e : any) : void {
        const title = e.target.elements['title'];
        const desc = e.target.elements['desc'];

        e.preventDefault();

        console.log(title.value, desc.value)
    }
}

export default Collect;
