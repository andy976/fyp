

function Quick()
{
    c_delay=0;
    if (mode == "auto") {
        quick_sort_auto(0,array_size-1);

        enable_buttons();
    } else {
        for (var i = 0; i < array_size; i++){
            origin_array[i] = JSON.parse(JSON.stringify(div_sizes[i]));
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
    var piv = div_sizes[start] ;//make the first element as pivot element.
    //div_update(divs[start],div_sizes[start],"yellow");//Color update
    msg_update_quick(piv);
    div_update_manual(JSON.parse(JSON.stringify(divs[start])),JSON.parse(JSON.stringify(div_sizes[start])),"yellow",start);

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "yellow",j);//Color update
                
                //if (i != j)
                msg_update_quick_swap_largesmall(piv, div_sizes[i], div_sizes[j], i+1);
                //else
                    //msg_update_quick_swap_largesmallequal(piv, div_sizes[i]);

                div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])), "red",i);//Color update
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "red",j);//Color update


                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;


                div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])), "red",i);//Height update
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "red",j);//Height update

                div_update_manual(JSON.parse(JSON.stringify(divs[i])),JSON.parse(JSON.stringify(div_sizes[i])), "blue",i);//Height update
                div_update_manual(JSON.parse(JSON.stringify(divs[j])),JSON.parse(JSON.stringify(div_sizes[j])), "blue",j);//Height update

                i += 1;
            }
    }
    if (start == i-1)
        msg_update_quick_swapwithpivotequal(div_sizes[start], end+1);
    else
        msg_update_quick_swapwithpivot(div_sizes[start], div_sizes[i-1]);
 
    div_update_manual(JSON.parse(JSON.stringify(divs[start])),JSON.parse(JSON.stringify(div_sizes[start])), "red",start);//Color update
    div_update_manual(JSON.parse(JSON.stringify(divs[i-1])),JSON.parse(JSON.stringify(div_sizes[i-1])), "red",i-1);//Color update
    

    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update_manual(JSON.parse(JSON.stringify(divs[start])),JSON.parse(JSON.stringify(div_sizes[start])), "red",start);//Height update
    div_update_manual(JSON.parse(JSON.stringify(divs[i-1])),JSON.parse(JSON.stringify(div_sizes[i-1])), "red",i-1);//Height update

    for(var t=start;t<i;t++)
    {
        div_update_manual(JSON.parse(JSON.stringify(divs[t])),JSON.parse(JSON.stringify(div_sizes[t])), "green",t);//Color update
        //console.log(divs[t],JSON.parse(JSON.stringify(div_sizes[t])));
        //console.log(action_count);
    }
    if (t == end) {
        div_update_manual(JSON.parse(JSON.stringify(divs[t])),JSON.parse(JSON.stringify(div_sizes[t])), "green",t);
        //console.log(end, "AAA");
    }


    return i-1;//return the position of the pivot
}

function quick_partition_auto (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start] ;//make the first element as pivot element.

    msg_update_quick(piv);
    div_update(divs[start],div_sizes[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[ j ] < piv)
            {
                div_update(divs[j],div_sizes[j],"yellow");//Color update

                //if (i != j)
                msg_update_quick_swap_largesmall(piv, div_sizes[i], div_sizes[j], i+1);
                //else
                    //msg_update_quick_swap_largesmallequal(piv, div_sizes[i]);

                div_update(divs[i],div_sizes[i],"red");//Color update
                div_update(divs[j],div_sizes[j],"red");//Color update
            

                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;


                div_update(divs[i],div_sizes[i],"red");//Height update
                div_update(divs[j],div_sizes[j],"red");//Height update

                div_update(divs[i],div_sizes[i],"blue");//Height update
                div_update(divs[j],div_sizes[j],"blue");//Height update

                i += 1; // index that pivot is just less than only that number
            }
    }
    if (start == i-1)
        msg_update_quick_swapwithpivotequal(div_sizes[start], end+1);
    else
        msg_update_quick_swapwithpivot(div_sizes[start], div_sizes[i-1]);
    
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    

    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;
    
    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }
    if (t == end) {
        div_update(divs[t],div_sizes[t],"green");

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
        //msg_update_quick(div_size[piv_pos]);
        quick_sort_auto(start, piv_pos-1);
        quick_sort_auto(piv_pos+1, end);
    }
}
