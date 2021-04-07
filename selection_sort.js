function Selection_sort()
{
    if (mode == "auto"){
        selection_auto();
    } else {
        action_count = 0;
        print_action_count = 0;
        initalize();
        selection_manual();

    }
    

}


function selection_manual()
{
    c_delay=0;

    for (var i = 0; i < array_size; i++){
        origin_array[i] = JSON.parse(JSON.stringify(div_sizes[i]));
    }
    
    action_count = 0;
    print_action_count = 0;


    for(var i=0;i<array_size-1;i++)
    {
        div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"red",i);//Color update

        index_min=i;
        origin_min=i;
        msg_update_selection_manual(div_sizes[origin_min], div_sizes[index_min],action_count);
        for(var j=i+1;j<array_size;j++)
        {
            div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])),"yellow",j);//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update_manual(JSON.parse(JSON.stringify(divs[index_min])),JSON.parse(JSON.stringify(div_sizes[index_min])),"blue",index_min);//Color update
                }
                index_min=j;
                div_update_manual(JSON.parse(JSON.stringify(divs[index_min])),JSON.parse(JSON.stringify(div_sizes[index_min])),"red",index_min);//Color update
                msg_update_selection_manual(div_sizes[origin_min], div_sizes[index_min],action_count);
            }
            else
            {
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])),"blue",j);//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;
            msg_update_selection_swap_manual(div_sizes[index_min], div_sizes[i],action_count);
            div_update_manual(JSON.parse(JSON.stringify(divs[index_min])),JSON.parse(JSON.stringify(div_sizes[index_min])),"red",index_min);//Height update
            div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"red",i);//Height update
            div_update_manual(JSON.parse(JSON.stringify(divs[index_min])),JSON.parse(JSON.stringify(div_sizes[index_min])),"blue",index_min);//Color update
        }
        div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"green",i);//Color update
    }
    div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])),"green",i);//Color update


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






function selection_auto()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");//Color update

        index_min=i;
        origin_min=i;
        msg_update_selection(div_sizes[origin_min], div_sizes[index_min]);
        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
                msg_update_selection(div_sizes[origin_min], div_sizes[index_min]);
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;
            msg_update_selection_swap(div_sizes[index_min], div_sizes[i]);
            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    enable_buttons();
}



