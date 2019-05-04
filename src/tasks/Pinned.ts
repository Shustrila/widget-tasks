import ListTasks from './ListTasks';

class Pinned extends ListTasks {
    constructor(title: string) {
        super(title);
        this.wrapperClass = 'pinned-tasks';
    }

    public generateItemUi() {
        const item = document.createElement('li');

        return item;
    }
}

export default Pinned;
