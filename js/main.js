// Yi-Chia Chen

// planned improvement:
// 1. use MySQL (set up WAMP)
// CREATE DATABASE ToDo
// CREATE TABLE Projects (
//     ID tinyint NOT NULL AUTO_INCREMENT,
//     Acronym varchar(20) UNIQUE,
//     Name tinytext NOT NULL,
//     PRIMARY KEY (ID)
// );
// CREATE TABLE Tasks (
//     ID int NOT NULL AUTO_INCREMENT,
//     ProjectID tinyint NOT NULL,
//     Name tinytext NOT NULL,
//     Deadline date,
//     Description text(1000),
//     Priority tinyint,
//     Pending tinytext,
//     PRIMARY KEY (ID),
//     FOREIGN KEY (ProjectID) REFERENCES Projects(ID)
// );
// CREATE VIEW NextTasks AS
// SELECT DISTINCT ON (ProjectID) * FROM Tasks
// WHERE Pending IS NULL
// ORDER BY Priority DESC NULLS LAST;
//
// 2. select by clicking and up down left right keys
//     a. keep visible
//     b. action menu: add to google calendar, copy text, (required server to edit) delete
//     c. (required server to edit) allow dragging (show trach bin, other list light up when hover, line indicating where it'd be inserted, drop on item to add a sublist)
//     d. (required server to edit) plus sign show up for adding items
//
// 3. plus sign for adding items
//     a. clicking the sign call a pop up menu for items

function create_new_unordered_list(parent_element, id) {
    parent_element.append("<ul class='level1-list' id=" + id + '></ul>');
    return $('#' + id);
}

function add_list_item(list_element, item_text, item_class, item_id) {
    item_text = item_text.replace('[', "<span class='project-name'>[").replace(']', "]</span>");
    list_element.append("<li class='" + item_class + "' id='" + item_id + "'>" + item_text + '</li>');
    return $('#' + item_id);
}

function add_level_0_items(list_el, item_obj, index) {
    let el = add_list_item(list_el, item_obj.name, item_obj.acronym, list_el.attr('id') + '-item-' + index);
    if (typeof item_obj.deadline !== 'undefined') {
        el.attr('title', item_obj.deadline);
        el.addClass('deadline');
    }
}

function add_descriptions_items(list_el, item_obj, index) {
    let level1_list = create_new_unordered_list(list_el, list_el.attr('id') + '-level1-' + index);
    for (let j = 0; j < item_obj.descriptions.length; j++) {
        add_list_item(level1_list, item_obj.descriptions[j], 'others', level1_list.attr('id') + '-item-' + index + '-' + j);
    }
}

function add_next_items(list_el, item_obj, index) {
    let level1_list = $('#' + list_el.attr('id') + '-level1-' + index);
    if (level1_list.length == 0) {
        level1_list = create_new_unordered_list(list_el, list_el.attr('id') + '-level1-' + index);
    }
    for (let j = 0; j < item_obj.next.length; j++) {
        add_list_item(level1_list, item_obj.next[j], 'others', level1_list.attr('id') + '-item-' + index + '-next-' + j);
    }
}


function loop_for_adding_items(list, list_element) {
    for (let i = 0; i < list.length; i++) {
        add_level_0_items(list_element, list[i], i);

        if (typeof list[i].descriptions !== 'undefined') {
            add_descriptions_items(list_element, list[i], i);
        }

        if (list_element.attr('id') == 'projects-list') {
            if (typeof list[i].next !== 'undefined') {
                add_next_items(list_element, list[i], i);
            }
        }
    }
}

// display lists
$(document).ready(function () {

    loop_for_adding_items(projects, $('#projects-list'));
    loop_for_adding_items(next_tasks, $('#next-tasks-list'));
    loop_for_adding_items(waiting_for, $('#waiting-for-list'));
    loop_for_adding_items(someday, $('#someday-list'));

    $('li').hover(
        function () {
            const CLASSES = $(this).attr('class');
            const PROJECT_NAME = CLASSES.replace('deadline', '').replace(' ', '');
            if (PROJECT_NAME !== 'others') {
                $('.' + PROJECT_NAME).addClass('highlight-project');
            }
        }, function () {
            $('li').removeClass('highlight-project');
        }
    );

});