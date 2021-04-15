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
        origin_array[i] = JSON.parse(JSON.stringify(number_size[i]));
    }
    
    action_count = 0;
    print_action_count = 0;


    for(var i=0;i<array_size-1;i++)
    {
        div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i); 

        index_min=i;
        origin_min=i;
        msg_update_selection_manual(number_size[origin_min], number_size[index_min],action_count);
        for(var j=i+1;j<array_size;j++)
        {
            div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"yellow",j); 

            if(number_size[j]<number_size[index_min])
            {
                if(index_min!=i)
                {
                    div_update_manual(JSON.parse(JSON.stringify(numberbar[index_min])),JSON.parse(JSON.stringify(number_size[index_min])),"blue",index_min); 
                }
                index_min=j;
                div_update_manual(JSON.parse(JSON.stringify(numberbar[index_min])),JSON.parse(JSON.stringify(number_size[index_min])),"red",index_min); 
                msg_update_selection_manual(number_size[origin_min], number_size[index_min],action_count);
            }
            else
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"blue",j); 
            }
        }
        
        if(index_min!=i)
        {
            var temp=number_size[index_min];
            number_size[index_min]=number_size[i];
            number_size[i]=temp;
            msg_update_selection_swap_manual(number_size[index_min], number_size[i],action_count);
            div_update_manual(JSON.parse(JSON.stringify(numberbar[index_min])),JSON.parse(JSON.stringify(number_size[index_min])),"red",index_min); 
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i); 
            div_update_manual(JSON.parse(JSON.stringify(numberbar[index_min])),JSON.parse(JSON.stringify(number_size[index_min])),"blue",index_min); 
        }
        div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"green",i); 
    }
    div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"green",i); 


    
}






function selection_auto()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(numberbar[i],number_size[i],"red"); 

        index_min=i;
        origin_min=i;
        msg_update_selection(number_size[origin_min], number_size[index_min]);
        for(var j=i+1;j<array_size;j++)
        {
            div_update(numberbar[j],number_size[j],"yellow"); 

            if(number_size[j]<number_size[index_min])
            {
                if(index_min!=i)
                {
                    div_update(numberbar[index_min],number_size[index_min],"blue"); 
                }
                index_min=j;
                div_update(numberbar[index_min],number_size[index_min],"red"); 
                msg_update_selection(number_size[origin_min], number_size[index_min]);
            }
            else
            {
                div_update(numberbar[j],number_size[j],"blue"); 
            }
        }
        
        if(index_min!=i)
        {
            var temp=number_size[index_min];
            number_size[index_min]=number_size[i];
            number_size[i]=temp;
            msg_update_selection_swap(number_size[index_min], number_size[i]);
            div_update(numberbar[index_min],number_size[index_min],"red"); 
            div_update(numberbar[i],number_size[i],"red"); 
            div_update(numberbar[index_min],number_size[index_min],"blue"); 
        }
        div_update(numberbar[i],number_size[i],"green"); 
    }
    div_update(numberbar[i],number_size[i],"green"); 

    enable_buttons();
}



