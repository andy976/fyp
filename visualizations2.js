var manual_action1 = [];
var manual_print_action1 = [];
var manual_action_index1 = [];
var manual_action2 = [];
var manual_print_action2 = [];
var manual_action_index2 = [];
var print_action_count = 0;
var origin_array = [];
var array_style1 = [];
var array_innerHTML1 = [];
var array_style2 = [];
var array_innerHTML2 = [];
var action_count1 = 0;
var action_count2 = 0;
var mode = "manual";


function update_bar(cont,height,color,index)
{
    var cont_temp = cont;

    cont_temp.innerHTML = "<div align=\"center\"><font color = white>" + height + "</font></div>";
    cont_temp.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    
    if (algonum == 1) {

        if (action_count1 == 0) {
            for (var i = 0; i < array_size; i++) {
                array_style1[(action_count1*array_size)+i] = numberbar1[i].style.cssText;
                array_innerHTML1[(action_count1*array_size)+i] = numberbar1[i].innerHTML;
                
            }
        } else {
            for (var i = 0; i < array_size; i++) {
                array_style1[(action_count1*array_size)+i] = array_style1[((action_count1-1)*array_size)+i];
                array_innerHTML1[(action_count1*array_size)+i] = array_innerHTML1[((action_count1-1)*array_size)+i];
                
            }
    
        }
        array_style1[(action_count1*array_size)+index] = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        array_innerHTML1[(action_count1*array_size)+index] = "<div align=\"center\"><font color = white>" + height + "</font></div>";
    
        manual_action1[action_count1] = cont_temp;
        manual_action_index1[action_count1] = index;
        
        action_count1 = action_count1 + 1;

    }

    if (algonum == 2) {

        if (action_count2 == 0) {
            for (var i = 0; i < array_size; i++) {
                array_style2[(action_count2*array_size)+i] = numberbar2[i].style.cssText;
                array_innerHTML2[(action_count2*array_size)+i] = numberbar2[i].innerHTML;
                
            }
        } else {
            for (var i = 0; i < array_size; i++) {
                array_style2[(action_count2*array_size)+i] = array_style2[((action_count2-1)*array_size)+i];
                array_innerHTML2[(action_count2*array_size)+i] = array_innerHTML2[((action_count2-1)*array_size)+i];
                
            }
    
        }
        array_style2[(action_count2*array_size)+index] = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        array_innerHTML2[(action_count2*array_size)+index] = "<div align=\"center\"><font color = white>" + height + "</font></div>";
    
        manual_action2[action_count2] = cont_temp;
        manual_action_index2[action_count2] = index;
        
        action_count2 = action_count2 + 1;

    }
    

}



function msg_update_bubble_manual(firstnum, secnum, stepcount) 
{
    if (algo1 == "bubble")
        manual_print_action1[action_count1] = "Bubble sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    if (algo2 == "bubble")
        manual_print_action2[action_count2] = "Bubble sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;

}

function msg_update_selection_manual(indexnum, minnum, stepcount) 
{
    if (algo1 == "selection")
        manual_print_action1[action_count1] = "Selection sort is running.<br></br> Current step: <br></br>" + "Current number to be swapped is " + indexnum + "<br></br>Current mininum number is " + minnum;
    
    if (algo2 == "selection")
        manual_print_action2[action_count2] = "Selection sort is running.<br></br> Current step: <br></br>" + "Current number to be swapped is " + indexnum + "<br></br>Current mininum number is " + minnum;
}

function msg_update_selection_swap_manual(firstnum, secnum, stepcount) 
{
    if (algo1 == "selection")
        manual_print_action1[action_count1] = "Selection sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    
    if (algo2 == "selection")
        manual_print_action2[action_count2] = "Selection sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;

}

function msg_update_insertion_swap_manual(firstnum, secnum, stepcount) 
{
    if (algo1 == "insertion")
        manual_print_action1[action_count1] = "Insertion sort is running.<br></br> The number " + firstnum + " is inserted before the number " + secnum + "<br></br>";
    
    if (algo2 == "insertion")
        manual_print_action2[action_count2] = "Insertion sort is running.<br></br> The number " + firstnum + " is inserted before the number " + secnum + "<br></br>";

}

function msg_update_merge_manual(array)
{
    if (algo1 == "merge")
        manual_print_action1[action_count1] = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer. <br></br> The current sorted array is " + array;
    
    if (algo2 == "merge")
        manual_print_action2[action_count2] = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer. <br></br> The current sorted array is " + array;

}

function msg_update_quick(pivot)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "Current pivot is " + pivot + ". <br></br>" + "It will divide the number bars into two sides which are smaller and larger than the pivot.";
    
    if (algo1 == "quick")
        manual_print_action1[action_count1] = display;

    if (algo2 == "quick")
        manual_print_action2[action_count2] = display;
    

}

function msg_update_quick_swapwithpivot(pivot, smallernum)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "As the number is split in two sides (smaller and larger side). <br></br> Swap pivot " + pivot + " with the smaller number "+ smallernum +" with the largest index.";
    
    if (algo1 == "quick")
        manual_print_action1[action_count1] = display;

    if (algo2 == "quick")
        manual_print_action2[action_count2] = display;
}

function msg_update_quick_swapwithpivotequal(pivot, index)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "As there is no number less than pivot on the right till the "+ index +"th elements, so pivot " + pivot + " remains at the position.";

    if (algo1 == "quick")
        manual_print_action1[action_count1] = display;

    if (algo2 == "quick")
        manual_print_action2[action_count2] = display;
}

function msg_update_quick_swap_largesmall(pivot, large, small, index)
{
    var numberword;
    switch (index) {
        case 1: numberword = "st";
                break;
        case 2: numberword = "nd";
                break;
        case 3: numberword = "rd";
                break;
        default: numberword = "th";
                
    }
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "Pivot is " + pivot + ". <br></br>" +"Place the number that smaller than pivot (" + small + " < " + pivot + ") in the " + index + numberword + " element. <br></br>" + large + " swapped with " + small + ".";

    if (algo1 == "quick")
        manual_print_action1[action_count1] = display;

    if (algo2 == "quick")
        manual_print_action2[action_count2] = display;
}

function msg_update_quick_swap_largesmallequal(pivot, index, equal)
{

    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "Pivot is " + pivot + ". <br></br>" +"As there is no number larger than pivot on the right till the "+ index +"th elements, so the number " + equal + " remains at the position.";

    if (algo1 == "quick")
        manual_print_action1[action_count1] = display;

    if (algo2 == "quick")
        manual_print_action2[action_count2] = display;
}


function next()
{
    if (print_action_count < action_count1) {
        numberbar1[manual_action_index1[print_action_count]].innerHTML = manual_action1[print_action_count].innerHTML;
        numberbar1[manual_action_index1[print_action_count]].style = manual_action1[print_action_count].style;
        if (manual_print_action1[print_action_count] != null) {
            document.getElementById("Text_des1").innerHTML = manual_print_action1[print_action_count];
        }

    }

    if (print_action_count < action_count2) {
        numberbar2[manual_action_index2[print_action_count]].innerHTML = manual_action2[print_action_count].innerHTML;
        numberbar2[manual_action_index2[print_action_count]].style = manual_action2[print_action_count].style;
        if (manual_print_action2[print_action_count] != null) {
            document.getElementById("Text_des2").innerHTML = manual_print_action2[print_action_count];
        }

    } 
    
    print_action_count += 1;
    
    if (print_action_count == Math.max(action_count1, action_count2)) {
        enable_buttons();
        inp_next.disabled = true;
        inp_prev.disabled = true;
    }

}

function prev() 
{
    if (print_action_count >= 1) {

        print_action_count -= 1;

        if (print_action_count < action_count1) {
            for (var i = 0; i < array_size; i++) {
                numberbar1[i].innerHTML = array_innerHTML1[(print_action_count*array_size)+i];
                numberbar1[i].style = array_style1[(print_action_count*array_size)+i];
            }
            if (manual_print_action1[print_action_count] != null) {
                document.getElementById("Text_des1").innerHTML = manual_print_action1[print_action_count];
            }
        }

        if (print_action_count < action_count2) {
            for (var i = 0; i < array_size; i++) {
                numberbar2[i].innerHTML = array_innerHTML2[(print_action_count*array_size)+i];
                numberbar2[i].style = array_style2[(print_action_count*array_size)+i];
            }
            if (manual_print_action2[print_action_count] != null) {
                document.getElementById("Text_des2").innerHTML = manual_print_action2[print_action_count];
            }
        }

        
    }

}

function enable_buttons()
{
    inp_gen.disabled=false;
    inp_but.disabled=false;
    inp_array.disabled=false;

}

function disable_buttons()
{
    inp_gen.disabled=true;
    inp_but.disabled=true;
    inp_array.disabled=true;
}