function Insertion()
{
    if (mode == "auto"){
        insertion_auto();
    } else {
        initalize();
        insertion_manual();
    }
    

}

function insertion_manual()
{
    c_delay=0;
    
    for (var i = 0; i < array_size; i++){
        origin_array[i] = JSON.parse(JSON.stringify(div_sizes[i]));
    }
    
    action_count = 0;
    print_action_count = 0;

    for(var j=0;j<array_size;j++)
    {
        div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])),"yellow",j);;//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            msg_update_insertion_swap_manual(key, div_sizes[i], action_count);
            div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"red",i);//Color update
            div_update_manual(JSON.parse(JSON.stringify(divs[i+1])),JSON.parse(JSON.stringify(div_sizes[i+1])),"red",i+1);//Color update
            //msg_update_insertion_swap(div_sizes[i+1], div_sizes[i]);

            div_sizes[i+1]=div_sizes[i];

            div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"red",i);//Height update
            div_update_manual(JSON.parse(JSON.stringify(divs[i+1])),JSON.parse(JSON.stringify(div_sizes[i+1])),"red",i+1);//Height update
    
            div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"blue",i);//Color update
            if(i==(j-1))
            {
                div_update_manual(JSON.parse(JSON.stringify(divs[i+1])),JSON.parse(JSON.stringify(div_sizes[i+1])),"yellow",i+1);//Color update
            }
            else
            {
                div_update_manual(JSON.parse(JSON.stringify(divs[i+1])),JSON.parse(JSON.stringify(div_sizes[i+1])),"blue",i+1);//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update_manual(JSON.parse(JSON.stringify(divs[t])),JSON.parse(JSON.stringify(div_sizes[t])),"green",t);//Color update
        }
    }
    div_update_manual(JSON.parse(JSON.stringify(divs[j-1])),JSON.parse(JSON.stringify(div_sizes[j-1])),"green",j-1);//Color update


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





function insertion_auto()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            msg_update_insertion_swap(key, div_sizes[i]);
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update
            //msg_update_insertion_swap(div_sizes[i+1], div_sizes[i]);

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}
