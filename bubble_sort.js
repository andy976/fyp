

function Bubble()
{
    if (mode == "auto"){
        bubble_auto();
    } else {
        initalize();
        bubble_manual();
    }
    
}


function bubble_manual()
{
    c_delay=0;
    for (var i = 0; i < array_size; i++){
        origin_array[i] = JSON.parse(JSON.stringify(number_size[i]));
    }

    action_count = 0;
    print_action_count = 0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"yellow",j);//Color update

            if(number_size[j]>number_size[j+1])
            {
                
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j);//Color update
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j+1])),JSON.parse(JSON.stringify(number_size[j+1])), "red",j+1);//Color update

                var temp=number_size[j];
                number_size[j]=number_size[j+1];
                number_size[j+1]=temp;

                //var temp2=number_size[j].textContent;
                //number_size[j].textContent=number_size[j+1].textContent;
                //number_size[j+1].textContent=temp2.textContent;
                msg_update_bubble_manual(JSON.parse(JSON.stringify(number_size[j+1])), JSON.parse(JSON.stringify(number_size[j])), action_count);
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j);//Height update
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j+1])),JSON.parse(JSON.stringify(number_size[j+1])), "red",j+1);//Height update
                
                //document.getElementById("Info_Cont1").innerHTML = number_size[j+1] + " swapped with " + number_size[j];
            }
            div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "blue",j);//Color update
        }
        div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "green",j);//Color update
    }
    div_update_manual(JSON.parse(JSON.stringify(numberbar[0])),JSON.parse(JSON.stringify(number_size[0])), "green",0);//Color update

    /*cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        number_size[i] = origin_array[i];
        numberbar[i]=document.createElement("div");
        cont.appendChild(numberbar[i]);
        margin_size=0.1;
        numberbar[i].innerHTML = "<div align=\"center\"><font color = white>" + number_size[i] + "</font></div>";
        numberbar[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (number_size[i]) + "%;";
    }*/

    //enable_buttons();
}


function bubble_auto()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(numberbar[j],number_size[j],"yellow");//Color update

            if(number_size[j]>number_size[j+1])
            {
                div_update(numberbar[j],number_size[j], "red");//Color update
                div_update(numberbar[j+1],number_size[j+1], "red");//Color update

                var temp=number_size[j];
                number_size[j]=number_size[j+1];
                number_size[j+1]=temp;

                //var temp2=number_size[j].textContent;
                //number_size[j].textContent=number_size[j+1].textContent;
                //number_size[j+1].textContent=temp2.textContent;
                msg_update_bubble(number_size[j+1], number_size[j]);
                div_update(numberbar[j],number_size[j], "red");//Height update
                div_update(numberbar[j+1],number_size[j+1], "red");//Height update
                
                //document.getElementById("Info_Cont1").innerHTML = number_size[j+1] + " swapped with " + number_size[j];
            }
            div_update(numberbar[j],number_size[j], "blue");//Color update
        }
        div_update(numberbar[j],number_size[j], "green");//Color update
    }
    div_update(numberbar[0],number_size[0], "green");//Color update

    enable_buttons();
}