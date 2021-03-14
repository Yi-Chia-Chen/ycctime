// Yi-Chia Chen

// planned improvement:
// 1. select by clicking and up down left right keys
//     a. keep visible
//     b. action menu: add to google calendar, copy text, (required server to edit) delete
//     c. (required server to edit) allow dragging (show trach bin, other list light up when hover, line indicating where it'd be inserted, drop on item to add a sublist)
//     d. (required server to edit) plus sign show up for adding items
// 2. use database instead
// 3. plus sign for adding items
//     a. clicking the sign call a pop up menue for items

function CREATE_NEW_UNORERED_LIST(parent_element,id) {
    parent_element.append("<ul class='level1-list' id="+id+'></ul>');
    return $('#'+id);
}

function ADD_LIST_ITEM(list_element,item_text,item_class, item_id) {
    item_text = item_text.replace('[', "<span class='project-name'>[").replace(']', "]</span>");
    list_element.append("<li class='"+item_class+"' id='"+item_id+"'>"+item_text+'</li>');
    return $('#'+item_id);
}

function ADD_LEVEL_0_ITEMS(list_el, item_obj, index) {
    let el = ADD_LIST_ITEM(list_el, item_obj.name, item_obj.acronym, list_el.attr('id')+'-item-'+index);
    if (typeof item_obj.deadline !== 'undefined') {
        el.attr('title', item_obj.deadline);
        el.addClass('deadline');
    }
}

function ADD_DESCRIPTIONS_ITEMS(list_el, item_obj, index) {
    let level1_list = CREATE_NEW_UNORERED_LIST(list_el, list_el.attr('id')+'-level1-'+index);
    for (let j=0; j<item_obj.descriptions.length; j++){
        ADD_LIST_ITEM(level1_list, item_obj.descriptions[j], 'others', level1_list.attr('id')+'-item-'+index+'-'+j);
    }
}

function ADD_NEXT_ITEMS(list_el, item_obj, index) {
    let level1_list = $('#'+list_el.attr('id')+'-level1-'+index);
    if (level1_list.length == 0) {
        level1_list = CREATE_NEW_UNORERED_LIST(list_el, list_el.attr('id')+'-level1-'+index);
    }
    for (let j=0; j<item_obj.next.length; j++){
        ADD_LIST_ITEM(level1_list, item_obj.next[j], 'others', level1_list.attr('id')+'-item-'+index+'-next-'+j);
    }
}


function LOOP_FOR_ADDING_ITEMS(list, list_element) {
    for (let i=0; i<list.length; i++) {
        ADD_LEVEL_0_ITEMS(list_element, list[i], i);

        if (typeof list[i].descriptions !== 'undefined') {
            ADD_DESCRIPTIONS_ITEMS(list_element, list[i], i);
        }

        if (list_element.attr('id') == 'projects-list') {
            if (typeof list[i].next !== 'undefined') {
                ADD_NEXT_ITEMS(list_element, list[i], i);
            }
        }
    }
}

// display lists
$(document).ready(function() {

    LOOP_FOR_ADDING_ITEMS(projects, $('#projects-list'));
    LOOP_FOR_ADDING_ITEMS(next_actions, $('#next-actions-list'));
    LOOP_FOR_ADDING_ITEMS(waiting_for, $('#waiting-for-list'));
    LOOP_FOR_ADDING_ITEMS(someday, $('#someday-list'));

    $('li').hover(
        function() {
            const CLASSES = $(this).attr('class');
            const PROJECT_NAME = CLASSES.replace('deadline','').replace(' ','');
            if (PROJECT_NAME !== 'others'){
                $('.'+PROJECT_NAME).addClass('highlight-project');
            }
        }, function() {
            $('li').removeClass('highlight-project');
        }
    );

});