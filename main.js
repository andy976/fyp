/*

general function去唔同sort同visualize

    */

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_gen2=document.getElementById("a_generate2");
var inp_aspeed=document.getElementById("a_speed");
var inp_array = document.getElementById("a_manual");
var manual_array = new Array();
var inp_mode = document.getElementById("manual");
var inp_mode2 = document.getElementById("auto");
var inp_prev = document.getElementById("prev");
var inp_next = document.getElementById("next");
var mode;
var action_count = 0;
var check_array = true;

if (document.getElementById("manual").checked) {
    mode = "manual";
}
if (document.getElementById("auto").checked) {
    mode = "auto";
}
var stop;
var manual_next = false;

//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");
var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

//0308 24:41 addEventListener click可以唔要
//inp_gen.addEventListener("click",generate_array);

//inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    inp_as=document.getElementById('a_size');
    array_size=inp_as.value;
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() *(70) ) + 10; // 10-80
        //div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML = "<div align=\"center\"><font color = white>" + div_sizes[i] + "</font></div>";
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
    
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

function generate_array_manual(array_size1, div_sizes1)
{
    array_size = array_size1;

    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i] = div_sizes1[i];
        //div_sizes[i]=Math.floor(Math.random() *(70) ) + 10; // 10-80
        //div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML = "<div align=\"center\"><font color = white>" + div_sizes[i] + "</font></div>";
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}


function runalgo(algoname)
{
    disable_buttons();

    //this.classList.add("butt_selected");
    //switch(this.innerHTML)
    switch(algoname)
    {
        
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
    }
}


function msg()
{
    generate_array();
    document.getElementById("Info_Cont1").innerHTML = "New random array generated!";
}

function tokenize()
{
    check_array = true;
    inp_array = document.getElementById("a_manual");
    //alert(inp_array.value);
    //inp_array = inp_array.value.replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ',');
    inp_array = inp_array.value.replace(/[\s,.]+/g, ',');
    
    manual_array = inp_array.split(',').filter(item => item).map(Number);
    
    //manual_array = JSON.parse(manual_array);
    //alert(manual_array);
    for (var i = 0; i < manual_array.length; i++) {
        if (isNaN(manual_array[i]))
            check_array = false;
    }
    if (check_array == false) {
        alert("Your input is invalid. Please check and input again!");
    }
    if ((manual_array.length < 5) || (manual_array.length > 15)) {
        check_array = false;
        alert("The array size should be within 5 - 15. Your current array size is "+ manual_array.length + ". Please input again!");
    }
    //alert(manual_array);
    /*for (var i = 0; i < inp_array.length; i++) { 
        manual_array[i] = parseInt(manual_array[i], 10); 
    } 
    //manual_array = inp_array.split(',').map(Number);
    alert(manual_array);*/

}

function initalize()
{
    manual_action = [];
    manual_print_action = [];
    manual_action_index = [];
    action_count = 0;
    array_style = [];
    array_innerHTML = [];

    print_action_count = 0;
}


function msg_manual()
{
    tokenize();
    if (check_array == true) {
        generate_array_manual(manual_array.length, manual_array); // size, array of sizes
        document.getElementById("Info_Cont1").innerHTML = "New manual array generated!";
    }
}



function mode_selection()
{
    if (document.getElementById("manual").checked) {
        mode = "manual";
    }
    if (document.getElementById("auto").checked) {
        mode = "auto";
    }

}