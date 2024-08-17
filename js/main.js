// Yi-Chia Chen

// planned improvement:
// 1. plus sign for adding items: show a pop up menu for adding items
// 2. click projects to stay unfolded and hightlight its tasks only
// 3. action menu: add to google calendar, copy text, delete
// 4. allow dragging (other list light up when hover, line indicating where it'd be inserted, drop on item to turn into description)
let todo = {};

function get_projects() {
    $.ajax({
        type: "POST",
        url: 'php/get_projects.php',
        success: parse_projects,
    });
}

function get_tasks() {
    $.ajax({
        type: "POST",
        url: 'php/get_tasks.php',
        success: parse_tasks,
    });
}

function get_descriptions() {
    $.ajax({
        type: "POST",
        url: 'php/get_descriptions.php',
        success: parse_descriptions,
    });
}

function parse_projects(data) {
    todo.projects = eval(data);
    todo.acronym_dict = {};
    for (let p of todo.projects) {
        todo.acronym_dict[p.id] = p.acronym;
        let item_text = "<span class='project-name'>[" + p.acronym + "]</span> " + p.name;
        let item_class = p.acronym;
        let item_id = 'projects-item-' + p.id;
        add_list_item($('#projects-list'), item_text, item_class, item_id);
    }
    get_descriptions();
}

function parse_tasks(data) {
    todo.tasks = eval(data);
    for (let t of todo.tasks) {
        if (t.priority == 0) {
            add_task_to_panel(t, 'someday');
        } else if (t.pending === null) {
            add_task_to_panel(t, 'next-tasks');
        } else {
            add_task_to_panel(t, 'waiting-for');
        }
    }
    set_hover();
}

function parse_descriptions(data) {
    todo.descriptions = eval(data);
    todo.description_dict = {};
    for (let d of todo.descriptions) {
        if (typeof todo.description_dict[d.taskId] === 'undefined') {
            todo.description_dict[d.taskId] = [d];
        } else {
            todo.description_dict[d.taskId].push(d);
        }
    }
    get_tasks();
}

function add_list_item(list_el, item_text, item_class, item_id) {
    list_el.append("<li class='" + item_class + "' id='" + item_id + "'>" + item_text + '</li>');
    return $('#' + item_id);
}

function add_task_to_panel(task, panel) {
    let list_el = $('#' + panel + '-list');
    let task_class = todo.acronym_dict[task.projectId];
    let task_text = "<span class='project-name'>[" + task_class + "]</span> " + task.name;
    if (task.pending !== null) {
        task_text += ' (' + task.pending + ')'
    }
    let task_id = 'task-' + task.id;
    let task_el = add_list_item(list_el, task_text, task_class, task_id);
    if (task.deadline !== null) {
        task_el.attr('title', task.deadline);
        task_el.addClass('deadline');
    }
    if (typeof todo.description_dict[task.id] !== 'undefined') {
        add_descriptions(panel, task.id, todo.description_dict[task.id]);
    }
}

function add_descriptions(panel, task_id, descriptions) {
    let description_list_id = 'task-' + task_id + '-descriptions';
    let description_list = create_description_list(panel, description_list_id);
    for (let d of descriptions) {
        let description_id = 'description-' + d.id;
        add_list_item(description_list, d.description, 'description', description_id);
    }
}

function create_description_list(panel, id) {
    let list_el = $('#' + panel + '-list');
    list_el.append("<ul class='description-list' id=" + id + '></ul>');
    return $('#' + id);
}

function set_hover() {
    $('li').hover(
        function () {
            let classes = $(this).attr('class');
            let project_name = classes.replace('deadline', '').replace(' ', '');
            if (project_name !== 'others') {
                $('.' + project_name).addClass('highlight-project');
            }
        }, function () {
            $('li').removeClass('highlight-project');
        }
    );
}

// display lists
$(document).ready(function () {
    get_projects();
});