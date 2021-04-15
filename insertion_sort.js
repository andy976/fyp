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
        origin_array[i] = JSON.parse(JSON.stringify(number_size[i]));
    }
    
    action_count = 0;
    print_action_count = 0;

    for(var j=0;j<array_size;j++)
    {
        div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"yellow",j);;

        var key= number_size[j];
        var i=j-1;
        while(i>=0 && number_size[i]>key)
        {
            msg_update_insertion_swap_manual(key, number_size[i], action_count);
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i);
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"red",i+1);

            number_size[i+1]=number_size[i];

            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i);
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"red",i+1);
    
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"blue",i);
            if(i==(j-1))
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"yellow",i+1);
            }
            else
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"blue",i+1);
            }
            i-=1;
        }
        number_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update_manual(JSON.parse(JSON.stringify(numberbar[t])),JSON.parse(JSON.stringify(number_size[t])),"green",t);
        }
    }
    div_update_manual(JSON.parse(JSON.stringify(numberbar[j-1])),JSON.parse(JSON.stringify(number_size[j-1])),"green",j-1);


}





function insertion_auto()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(numberbar[j],number_size[j],"yellow"); 

        var key= number_size[j];
        var i=j-1;
        while(i>=0 && number_size[i]>key)
        {
            msg_update_insertion_swap(key, number_size[i]);
            div_update(numberbar[i],number_size[i],"red"); 
            div_update(numberbar[i+1],number_size[i+1],"red"); 

            number_size[i+1]=number_size[i];

            div_update(numberbar[i],number_size[i],"red"); 
            div_update(numberbar[i+1],number_size[i+1],"red"); 
    
            div_update(numberbar[i],number_size[i],"blue"); 
            if(i==(j-1))
            {
                div_update(numberbar[i+1],number_size[i+1],"yellow"); 
            }
            else
            {
                div_update(numberbar[i+1],number_size[i+1],"blue"); 
            }
            i-=1;
        }
        number_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(numberbar[t],number_size[t],"green"); 
        }
    }
    div_update(numberbar[j-1],number_size[j-1],"green"); 

    enable_buttons();
}
