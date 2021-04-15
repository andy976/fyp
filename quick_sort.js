

function Quick()
{
    c_delay=0;
    if (mode == "auto") {
        quick_sort_auto(0,array_size-1);

        enable_buttons();
    } else {
        for (var i = 0; i < array_size; i++){
            origin_array[i] = JSON.parse(JSON.stringify(number_size[i]));
        }
        action_count = 0;
        print_action_count = 0;
        initalize();
        quick_sort_manual(0,array_size-1);

    }
}

function quick_partition_manual (start, end)
{
    var i = start + 1;
    var piv = number_size[start] ;
    msg_update_quick(piv);
    div_update_manual(JSON.parse(JSON.stringify(numberbar[start])),JSON.parse(JSON.stringify(number_size[start])),"yellow",start);

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (number_size[ j ] < piv)
            {
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "yellow",j); 
                
                
                msg_update_quick_swap_largesmall(piv, number_size[i], number_size[j], i+1);
                

                div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])), "red",i); 
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j); 


                var temp=number_size[i];
                number_size[i]=number_size[j];
                number_size[j]=temp;


                div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])), "red",i); 
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "red",j); 

                div_update_manual(JSON.parse(JSON.stringify(numberbar[i])),JSON.parse(JSON.stringify(number_size[i])), "blue",i); 
                div_update_manual(JSON.parse(JSON.stringify(numberbar[j])),JSON.parse(JSON.stringify(number_size[j])), "blue",j); 

                i += 1;
            }
    }
    if (start == i-1)
        msg_update_quick_swapwithpivotequal(number_size[start], end+1);
    else
        msg_update_quick_swapwithpivot(number_size[start], number_size[i-1]);
 
    div_update_manual(JSON.parse(JSON.stringify(numberbar[start])),JSON.parse(JSON.stringify(number_size[start])), "red",start); 
    div_update_manual(JSON.parse(JSON.stringify(numberbar[i-1])),JSON.parse(JSON.stringify(number_size[i-1])), "red",i-1); 
    

    var temp=number_size[start];//put the pivot element in its proper place.
    number_size[start]=number_size[i-1];
    number_size[i-1]=temp;

    div_update_manual(JSON.parse(JSON.stringify(numberbar[start])),JSON.parse(JSON.stringify(number_size[start])), "red",start); 
    div_update_manual(JSON.parse(JSON.stringify(numberbar[i-1])),JSON.parse(JSON.stringify(number_size[i-1])), "red",i-1); 

    for(var t=start;t<i;t++)
    {
        div_update_manual(JSON.parse(JSON.stringify(numberbar[t])),JSON.parse(JSON.stringify(number_size[t])), "green",t); 
        
    }
    if (t == end) {
        div_update_manual(JSON.parse(JSON.stringify(numberbar[t])),JSON.parse(JSON.stringify(number_size[t])), "green",t);
        
    }


    return i-1;
}

function quick_partition_auto (start, end)
{
    var i = start + 1;
    var piv = number_size[start] ;//make the first element as pivot element.

    msg_update_quick(piv);
    div_update(numberbar[start],number_size[start],"yellow");

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (number_size[ j ] < piv)
            {
                div_update(numberbar[j],number_size[j],"yellow");

                
                msg_update_quick_swap_largesmall(piv, number_size[i], number_size[j], i+1);
                
                    

                div_update(numberbar[i],number_size[i],"red");
                div_update(numberbar[j],number_size[j],"red");
            

                var temp=number_size[i];
                number_size[i]=number_size[j];
                number_size[j]=temp;


                div_update(numberbar[i],number_size[i],"red");
                div_update(numberbar[j],number_size[j],"red");

                div_update(numberbar[i],number_size[i],"blue");
                div_update(numberbar[j],number_size[j],"blue");

                i += 1; // index that pivot is just less than only that number
            }
    }
    if (start == i-1)
        msg_update_quick_swapwithpivotequal(number_size[start], end+1);
    else
        msg_update_quick_swapwithpivot(number_size[start], number_size[i-1]);
    
    div_update(numberbar[start],number_size[start],"red");
    div_update(numberbar[i-1],number_size[i-1],"red");
    

    var temp=number_size[start];
    number_size[start]=number_size[i-1];
    number_size[i-1]=temp;
    
    div_update(numberbar[start],number_size[start],"red");
    div_update(numberbar[i-1],number_size[i-1],"red");

    for(var t=start;t<i;t++)
    {
        div_update(numberbar[t],number_size[t],"green");
    }
    if (t == end) {
        div_update(numberbar[t],number_size[t],"green");

    }

    return i-1;//return the position of the pivot
}


function quick_sort_manual(start, end)
{
    if(start < end)
    {
       
        var piv_pos = quick_partition_manual(start, end);     
        quick_sort_manual(start, piv_pos-1);
        quick_sort_manual(piv_pos+1, end);
    }
}

 function quick_sort_auto(start, end)
{
    if(start < end)
    {
        
        var piv_pos = quick_partition_auto(start, end);
        
        quick_sort_auto(start, piv_pos-1);
        quick_sort_auto(piv_pos+1, end);
    }
}
