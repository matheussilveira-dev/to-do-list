class Task {

    constructor(data) {

        if (Object.hasOwn(data, "title")) {
            this.title = data.title;
        }

        if (Object.hasOwn(data, "description")) {
            this.description = data.description;
        }

        if (Object.hasOwn(data, "completed")) {
            this.completed = data.completed;
        }

    }
}

export default Task