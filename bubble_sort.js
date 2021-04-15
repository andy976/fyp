

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
            div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"yellow",j);

            if(number_size[j]>number_size[j+1])
            {
                
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j);
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j+1])),JSON.parse(JSON.stringify(number_size[j+1])), "red",j+1);

                var temp=number_size[j];
                number_size[j]=number_size[j+1];
                number_size[j+1]=temp;

                msg_update_bubble_manual(JSON.parse(JSON.stringify(number_size[j+1])), JSON.parse(JSON.stringify(number_size[j])), action_count);
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j);
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j+1])),JSON.parse(JSON.stringify(number_size[j+1])), "red",j+1);
                
            }
            div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "blue",j);
        }
        div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "green",j);
    }
    div_update_manual(JSON.parse(JSON.stringify(numberbar[0])),JSON.parse(JSON.stringify(number_size[0])), "green",0);

    
}


function bubble_auto()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(numberbar[j],number_size[j],"yellow");

            if(number_size[j]>number_size[j+1])
            {
                div_update(numberbar[j],number_size[j], "red");
                div_update(numberbar[j+1],number_size[j+1], "red");

                var temp=number_size[j];
                number_size[j]=number_size[j+1];
                number_size[j+1]=temp;

                msg_update_bubble(number_size[j+1], number_size[j]);
                div_update(numberbar[j],number_size[j], "red");
                div_update(numberbar[j+1],number_size[j+1], "red");
                
            }
            div_update(numberbar[j],number_size[j], "blue");
        }
        div_update(numberbar[j],number_size[j], "green");
    }
    div_update(numberbar[0],number_size[0], "green");

    enable_buttons();
}