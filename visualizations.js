/*

default setting去入唔同sort

名.addEventListener("EventType", function名)
    */

//We only have to change background-color and height of the sorting element.

var speed=50;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=100;
                break;
        case 2: speed=300;
                break;
        case 3: speed=500;
                break;
        case 4: speed=7500;
                break;
        case 5: speed=1000;
                break;
    }
    
    delay_time=100000/(Math.floor(array_size/5)*speed);        //Decrease numerator to increase speed.
}

var delay_time=100000/(Math.floor(array_size/5)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.
var manual_action = [];
var manual_print_action = [];
var manual_action_index = [];
var print_action_count = 0;
var origin_array = [];
var array_style = [];
var array_innerHTML = [];


function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.innerHTML = "<div align=\"center\"><font color = white>" + height + "</font></div>";
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
    
}

function div_update_manual(cont,height,color,index)
{
    var cont_temp = cont;
    cont_temp.innerHTML = "<div align=\"center\"><font color = white>" + height + "</font></div>";
    cont_temp.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
      
    if (action_count == 0) {
        for (var i = 0; i < array_size; i++) {
            array_style[(action_count*array_size)+i] = divs[i].style.cssText;
            array_innerHTML[(action_count*array_size)+i] = divs[i].innerHTML;
            //console.log(action_count, "AAA", i);
            //console.log(array_style[(action_count+1)*i]);
            //console.log(array_innerHTML[(action_count+1)*i]);
        }
    } else {
        for (var i = 0; i < array_size; i++) {
            array_style[(action_count*array_size)+i] = array_style[((action_count-1)*array_size)+i];
            array_innerHTML[(action_count*array_size)+i] = array_innerHTML[((action_count-1)*array_size)+i];
            //console.log((action_count), "BBB", i);
            //console.log(array_style[(action_count+1)*i]);
            //console.log(array_innerHTML[(action_count+1)*i]);
            //console.log(array_style[action_count, i]);
            //console.log(array_innerHTML[action_count, i]);
        }

    }
    array_style[(action_count*array_size)+index] = " margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    array_innerHTML[(action_count*array_size)+index] = "<div align=\"center\"><font color = white>" + height + "</font></div>";

    manual_action[action_count] = cont_temp;
    manual_action_index[action_count] = index;
    //console.log(action_count);
    action_count = action_count + 1;
}

function msg_update_bubble(firstnum, secnum) 
{
    window.setTimeout(function(){
        document.getElementById("Info_Cont1").innerHTML = "Bubble sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    }, c_delay);

}

function msg_update_bubble_manual(firstnum, secnum, stepcount) 
{
    manual_print_action[action_count] = "Bubble sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    console.log("print at ", action_count, manual_print_action[action_count]);

}

function msg_update_selection(indexnum, minnum) 
{
    window.setTimeout(function(){
        document.getElementById("Info_Cont1").innerHTML = "Selection sort is running.<br></br> Current step: <br></br>" + "Current number to be swapped is " + indexnum + "<br></br>Current mininum number is " + minnum;
    }, c_delay);

}

function msg_update_selection_manual(indexnum, minnum, stepcount) 
{
    manual_print_action[action_count] = "Selection sort is running.<br></br> Current step: <br></br>" + "Current number to be swapped is " + indexnum + "<br></br>Current mininum number is " + minnum;
    console.log("print at ", action_count, manual_print_action[action_count]);

}

function msg_update_selection_swap(firstnum, secnum) 
{
    window.setTimeout(function(){
        document.getElementById("Info_Cont1").innerHTML = "Selection sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    }, c_delay);

}

function msg_update_selection_swap_manual(firstnum, secnum, stepcount) 
{
    manual_print_action[action_count] = "Selection sort is running.<br></br> Current step: <br></br>" + firstnum + " swapped with " + secnum;
    console.log("print at ", action_count, manual_print_action[action_count]);

}

function msg_update_insertion_swap(firstnum, secnum)
{
    window.setTimeout(function(){
        document.getElementById("Info_Cont1").innerHTML = "Insertion sort is running.<br></br> The number " + firstnum + " is inserted before the number " + secnum + "<br></br>";
    }, c_delay);
}

function msg_update_insertion_swap_manual(firstnum, secnum, stepcount) 
{
    manual_print_action[action_count] = "Insertion sort is running.<br></br> The number " + firstnum + " is inserted before the number " + secnum + "<br></br>";
    console.log("print at ", action_count, manual_print_action[action_count]);

}

function msg_update_merge(array)
{
    window.setTimeout(function(){
        document.getElementById("Info_Cont1").innerHTML = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer. <br></br> The current sorted array is " + array;
    }, c_delay);
}

function msg_update_merge_manual(array)
{
    manual_print_action[action_count] = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer. <br></br> The current sorted array is " + array;
}

function msg_update_quick(pivot)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "Current pivot is " + pivot + ". <br></br>" + "It will divide the number bars into two sides which are smaller and larger than the pivot.";
    
    if (mode == "auto") {
        window.setTimeout(function(){
            document.getElementById("Info_Cont1").innerHTML = display;
        }, c_delay);
    }
    else {
        manual_print_action[action_count] = display;
    }

}

function msg_update_quick_swapwithpivot(pivot, smallernum)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "As the number is split in two sides (smaller and larger side). <br></br> Swap pivot " + pivot + " with the smaller number "+ smallernum +" with the largest index.";
    
    if (mode == "auto") {
        window.setTimeout(function(){
            document.getElementById("Info_Cont1").innerHTML = display;
        }, c_delay);
    }
    else {
        manual_print_action[action_count] = display;
    }
}

function msg_update_quick_swapwithpivotequal(pivot, index)
{
    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "As there is no number less than pivot on the right till the "+ index +"th elements, so pivot " + pivot + " remains at the position.";

    if (mode == "auto") {
        window.setTimeout(function(){
            document.getElementById("Info_Cont1").innerHTML = display;
        }, c_delay);
    }
    else {
        manual_print_action[action_count] = display;
    }
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

    if (mode == "auto") {
        window.setTimeout(function(){
            document.getElementById("Info_Cont1").innerHTML = display;
        }, c_delay);
    }
    else {
        manual_print_action[action_count] = display;
    }
}

function msg_update_quick_swap_largesmallequal(pivot, index, equal)
{

    var display = "Quick sort is running.<br></br> Current step: <br></br>" + "Pivot is " + pivot + ". <br></br>" +"As there is no number larger than pivot on the right till the "+ index +"th elements, so the number " + equal + " remains at the position.";

    if (mode == "auto") {
        window.setTimeout(function(){
            document.getElementById("Info_Cont1").innerHTML = display;
        }, c_delay);
    }
    else {
        manual_print_action[action_count] = display;
    }
}

function next()
{

    divs[manual_action_index[print_action_count]].innerHTML = manual_action[print_action_count].innerHTML;
    divs[manual_action_index[print_action_count]].style = manual_action[print_action_count].style;
    
    if (manual_print_action[print_action_count] != null) {
        document.getElementById("Info_Cont1").innerHTML = manual_print_action[print_action_count];
    }
    
    print_action_count += 1;
    
    if (print_action_count == action_count) {
        enable_buttons();
        inp_next.disabled = true;
        inp_prev.disabled = true;
    }

}

function prev() 
{
    if (print_action_count >= 1) {

        print_action_count -= 1;

        for (var i = 0; i < array_size; i++) {
            divs[i].innerHTML = array_innerHTML[(print_action_count*array_size)+i];
            divs[i].style = array_style[(print_action_count*array_size)+i];

        }


        //cont.innerHTML = "";
        //divs[manual_action_index[print_action_count]].innerHTML = manual_action[print_action_count].innerHTML;
        //divs[manual_action_index[print_action_count]].style = manual_action[print_action_count].style;
        
        if (manual_print_action[print_action_count] != null) {
            document.getElementById("Info_Cont1").innerHTML = manual_print_action[print_action_count];
        }
        
        //print_action_count -= 1;
    }

}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_gen2.disabled=false;
            inp_aspeed.disabled=false;
            inp_array.disabled=false;
            inp_mode.disabled=false;
            inp_mode2.disabled=false;
        }
    },c_delay+=delay_time);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_gen2.disabled=true;
        inp_aspeed.disabled=true;
        inp_array.disabled=true;
        inp_mode.disabled=true;
        inp_mode2.disabled=true;
        if (mode == "manual") {
            inp_prev.disabled=false;
            inp_next.disabled=false;
        }
    }
}
