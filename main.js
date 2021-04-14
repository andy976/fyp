
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


var butts_algos=document.querySelectorAll(".algos button");
var number_size=[];
var numberbar=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";



function generate_array()
{
    inp_as=document.getElementById('a_size');
    array_size=inp_as.value;
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        number_size[i]=Math.floor(Math.random() *(70) ) + 10; // 10-80
        numberbar[i]=document.createElement("div");
        cont.appendChild(numberbar[i]);
        margin_size=0.1;
        numberbar[i].innerHTML = "<div align=\"center\"><font color = white>" + number_size[i] + "</font></div>";
        numberbar[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_size[i]) + "%;";
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
        number_size[i] = div_sizes1[i];
        numberbar[i]=document.createElement("div");
        cont.appendChild(numberbar[i]);
        margin_size=0.1;
        numberbar[i].innerHTML = "<div align=\"center\"><font color = white>" + number_size[i] + "</font></div>";
        numberbar[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_size[i]) + "%;";
    }
}

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}


function runalgo(algoname)
{
    disable_buttons();

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
    document.getElementById("Text_des1").innerHTML = "New random array generated!";
}

function tokenize()
{
    check_array = true;
    var excess_height = true;
    inp_array = document.getElementById("a_manual");

    inp_array = inp_array.value.replace(/[\s,.]+/g, ',');
    
    manual_array = inp_array.split(',').filter(item => item).map(Number);
    

    for (var i = 0; i < manual_array.length; i++) {
        if (isNaN(manual_array[i]))
            check_array = false;
        else {
            if ((manual_array[i] >= 100) || (manual_array[i] < 10))
                excess_height = false;
        }
        
    }
    if (check_array == false) {
        alert("Your input is invalid. Please check and input again!");
    }
    if (excess_height == false) {
        check_array = false;
        alert("Your input number should be within 10 - 100. Please check and input again!");
    }
    if ((manual_array.length < 5) || (manual_array.length > 15)) {
        check_array = false;
        alert("The array size should be within 5 - 15. Your current array size is "+ manual_array.length + ". Please input again!");
    }


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
        document.getElementById("Text_des1").innerHTML = "New manual array generated!";
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