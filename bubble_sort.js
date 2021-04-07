

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
        origin_array[i] = JSON.parse(JSON.stringify(div_sizes[i]));
    }

    action_count = 0;
    print_action_count = 0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])),"yellow",j);//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "red",j);//Color update
                div_update_manual(JSON.parse(JSON.stringify(divs[j+1])),JSON.parse(JSON.stringify(div_sizes[j+1])), "red",j+1);//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                //var temp2=div_sizes[j].textContent;
                //div_sizes[j].textContent=div_sizes[j+1].textContent;
                //div_sizes[j+1].textContent=temp2.textContent;
                msg_update_bubble_manual(JSON.parse(JSON.stringify(div_sizes[j+1])), JSON.parse(JSON.stringify(div_sizes[j])), action_count);
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "red",j);//Height update
                div_update_manual(JSON.parse(JSON.stringify(divs[j+1])),JSON.parse(JSON.stringify(div_sizes[j+1])), "red",j+1);//Height update
                
                //document.getElementById("Info_Cont1").innerHTML = div_sizes[j+1] + " swapped with " + div_sizes[j];
            }
            div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "blue",j);//Color update
        }
        div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "green",j);//Color update
    }
    div_update_manual(JSON.parse(JSON.stringify(divs[0])),JSON.parse(JSON.stringify(div_sizes[0])), "green",0);//Color update

    /*cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i] = origin_array[i];
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].innerHTML = "<div align=\"center\"><font color = white>" + div_sizes[i] + "</font></div>";
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
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
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                //var temp2=div_sizes[j].textContent;
                //div_sizes[j].textContent=div_sizes[j+1].textContent;
                //div_sizes[j+1].textContent=temp2.textContent;
                msg_update_bubble(div_sizes[j+1], div_sizes[j]);
                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
                
                //document.getElementById("Info_Cont1").innerHTML = div_sizes[j+1] + " swapped with " + div_sizes[j];
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}