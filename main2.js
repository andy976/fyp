var numberbar1=[]; //divs
var numberbar2=[];

var number_sizes1=[];
var number_sizes2=[]; //div_sizes

var margin_size;

var inp_prev = document.getElementById("prev");
var inp_next = document.getElementById("next");

var inp_gen=document.getElementById("generate");
var inp_but=document.getElementById("run_button");

var cont1=document.getElementById("Number_bars1"); // cont
cont1.style="flex-direction:row";

var cont2=document.getElementById("Number_bars2"); // cont
cont2.style="flex-direction:row";

var inp_array = document.getElementById("a_manual");
var manual_array = new Array();


var algo1 = document.querySelector('input[name="algo1"]:checked').value;
var algo2 = document.querySelector('input[name="algo2"]:checked').value;

var algonum;

var temp_num;
var check_array = true;

function generate_array()
{
    array_size=7; // init = 7
    cont1.innerHTML="";
    cont2.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        temp_num = Math.floor(Math.random() *(70) ) + 10; // 10-80
        
        number_sizes1[i] = temp_num;
        number_sizes2[i] = temp_num;
        //div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        
        numberbar1[i]=document.createElement("div");
        numberbar2[i]=document.createElement("div");
        
        cont1.appendChild(numberbar1[i]);
        cont2.appendChild(numberbar2[i]);
        
        margin_size=0.1;
        
        numberbar1[i].innerHTML = "<div align=\"center\"><font color = white>" + number_sizes1[i] + "</font></div>";
        numberbar1[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_sizes1[i]) + "%;";

        numberbar2[i].innerHTML = "<div align=\"center\"><font color = white>" + number_sizes2[i] + "</font></div>";
        numberbar2[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_sizes2[i]) + "%;";
    }
    
}

function update_array_size()
{
    array_size=7;
    generate_array();
}

function generate_array_manual(array_size1, div_sizes1)
{
    array_size = array_size1;

    cont1.innerHTML="";
    cont2.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        temp_num = div_sizes1[i];
        
        number_sizes1[i] = temp_num;
        number_sizes2[i] = temp_num;
        //div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        
        numberbar1[i]=document.createElement("div");
        numberbar2[i]=document.createElement("div");
        
        cont1.appendChild(numberbar1[i]);
        cont2.appendChild(numberbar2[i]);
        
        margin_size=0.1;
        
        numberbar1[i].innerHTML = "<div align=\"center\"><font color = white>" + number_sizes1[i] + "</font></div>";
        numberbar1[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_sizes1[i]) + "%;";

        numberbar2[i].innerHTML = "<div align=\"center\"><font color = white>" + number_sizes2[i] + "</font></div>";
        numberbar2[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_sizes2[i]) + "%;";
    }
}

window.onload=update_array_size();



function mode_selection()
{
    algo1 = document.querySelector('input[name="algo1"]:checked').value;
    algo2 = document.querySelector('input[name="algo2"]:checked').value;
    
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

function newarray()
{
    tokenize();
    if (check_array == true) {
        generate_array_manual(manual_array.length, manual_array); // size, array of sizes
    }

}

function initalize()
{
    manual_action1 = [];
    manual_print_action1 = [];
    manual_action_index1 = [];
    action_count1 = 0;
    array_style1 = [];
    array_innerHTML1 = [];

    manual_action2 = [];
    manual_print_action2 = [];
    manual_action_index2 = [];
    action_count2 = 0;
    array_style2 = [];
    array_innerHTML2 = [];

    print_action_count = 0;
}

function run()
{
    initalize();
    disable_buttons();
    inp_prev.disabled = false;
    inp_next.disabled = false;

    simu();
    
    /*switch (algo1) {
        case "bubble": 
    }*/

}