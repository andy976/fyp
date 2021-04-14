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
        div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])),"yellow",j);;//Color update

        var key= number_size[j];
        var i=j-1;
        while(i>=0 && number_size[i]>key)
        {
            msg_update_insertion_swap_manual(key, number_size[i], action_count);
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i);//Color update
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"red",i+1);//Color update
            //msg_update_insertion_swap(number_size[i+1], number_size[i]);

            number_size[i+1]=number_size[i];

            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"red",i);//Height update
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"red",i+1);//Height update
    
            div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])),"blue",i);//Color update
            if(i==(j-1))
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"yellow",i+1);//Color update
            }
            else
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[i+1])),JSON.parse(JSON.stringify(number_size[i+1])),"blue",i+1);//Color update
            }
            i-=1;
        }
        number_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update_manual(JSON.parse(JSON.stringify(numberbar[t])),JSON.parse(JSON.stringify(number_size[t])),"green",t);//Color update
        }
    }
    div_update_manual(JSON.parse(JSON.stringify(numberbar[j-1])),JSON.parse(JSON.stringify(number_size[j-1])),"green",j-1);//Color update


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





function insertion_auto()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(numberbar[j],number_size[j],"yellow");//Color update

        var key= number_size[j];
        var i=j-1;
        while(i>=0 && number_size[i]>key)
        {
            msg_update_insertion_swap(key, number_size[i]);
            div_update(numberbar[i],number_size[i],"red");//Color update
            div_update(numberbar[i+1],number_size[i+1],"red");//Color update
            //msg_update_insertion_swap(number_size[i+1], number_size[i]);

            number_size[i+1]=number_size[i];

            div_update(numberbar[i],number_size[i],"red");//Height update
            div_update(numberbar[i+1],number_size[i+1],"red");//Height update
    
            div_update(numberbar[i],number_size[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(numberbar[i+1],number_size[i+1],"yellow");//Color update
            }
            else
            {
                div_update(numberbar[i+1],number_size[i+1],"blue");//Color update
            }
            i-=1;
        }
        number_size[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(numberbar[t],number_size[t],"green");//Color update
        }
    }
    div_update(numberbar[j-1],number_size[j-1],"green");//Color update

    enable_buttons();
}
