import ListTasks from "./ListTasks";

class All extends ListTasks {
    constructor(title: string) {
        super(title);
        this.wrapperClass = 'all-tasks';
    }

    generateItemUi() {
        const item = document.createElement('li');
        const pinned = document.createElement('button');
        const remove = document.createElement('button');

        item.appendChild(pinned);
        item.appendChild(remove);

        return item;
    }


}

export default All;
