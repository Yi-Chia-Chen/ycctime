// Yi-Chia Chen

// planned improvement:
// 1. select by keyboard
// 2. move by select and drag
// 3. click to add to google calendar

function CREATE_NEW_UNORERED_LIST(parent_element,level,id) {
    parent_element.append("<ul class='level"+level+"-list' id="+id+'></ul>');
    return $('#'+id);
}

function ADD_LIST_ITEM(list_element,item_text,item_id) {
    list_element.append('<li id='+item_id+'>'+item_text+'</li>');
    return $('#'+item_id);
}

function LOOP_FOR_ADDING_ITEMS(list, list_element) {
    for (let i=0; i<list.length; i++) {
        let now_element = ADD_LIST_ITEM(list_element, list[i].name, list_element.attr('id')+'-item-'+i);
        if (typeof list[i].deadline !== 'undefined') {
            now_element.attr('title', list[i].deadline);
            now_element.attr('class', 'pink');
        }

        if (typeof list[i].descriptions !== 'undefined') {
            let level1_list = CREATE_NEW_UNORERED_LIST(list_element, 1, list_element.attr('id')+'-list-'+i);
            let level1_descriptions = list[i].descriptions.split(':');

            if (level1_descriptions.length > 1) {
                for (let j=0; j<level1_descriptions.length; j+=2){
                    ADD_LIST_ITEM(level1_list, level1_descriptions[j], level1_list.attr('id')+'-item-'+i);
                    let level2_list = CREATE_NEW_UNORERED_LIST(level1_list, 2, level1_list.attr('id')+'-list-'+j);
                    let level2_descriptions = level1_descriptions[j+1].split('; ');
                    if (level2_descriptions.length>1){
                        for (let k=0; k<level2_descriptions.length; k++) {
                            ADD_LIST_ITEM(level2_list, level2_descriptions[k], level2_list.attr('id')+'-item-'+k);
                        }
                    }
                }
            } else {
                level1_descriptions = level1_descriptions[0].split('; ');
                for (let j=0; j<level1_descriptions.length; j++){
                    ADD_LIST_ITEM(level1_list, level1_descriptions[j], level1_list.attr('id')+'-item-'+j);
                }
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
});