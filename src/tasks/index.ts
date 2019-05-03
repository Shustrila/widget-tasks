import Form from './Form';
import ListTasks from './ListTasks';
import Storage from './Storage';
import Collect from './Сollect';

const form: Form = new Form();
const tasks: ListTasks = new ListTasks();
const storage: Storage = new Storage(localStorage);

const collect = new Collect(form, tasks, storage);

collect.init();
