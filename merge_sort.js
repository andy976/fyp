
function Merge()
{
    c_delay=0;
    if (mode == "auto") {
        merge_partition_auto(0,array_size-1);
        document.getElementById("Info_Cont1").innerHTML = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer.";
        enable_buttons();
    } else {
        for (var i = 0; i < array_size; i++){
            origin_array[i] = JSON.parse(JSON.stringify(div_sizes[i]));
        }
        action_count = 0;
        print_action_count = 0;
        initalize();
        document.getElementById("Info_Cont1").innerHTML = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer.";
        merge_partition_manual(0,array_size-1);
        
    }
}

function merge_sort_manual(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            //div_update(divs[q-1],div_sizes[q-1],"red");//Color update
            div_update_manual(JSON.parse(JSON.stringify(divs[q-1])),JSON.parse(JSON.stringify(div_sizes[q-1])),"red",q-1);
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            //div_update(divs[p-1],div_sizes[p-1],"red");//Color update
            div_update_manual(JSON.parse(JSON.stringify(divs[p-1])),JSON.parse(JSON.stringify(div_sizes[p-1])),"red",p-1);
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            //div_update(divs[p-1],div_sizes[p-1],"red");//Color update
            div_update_manual(JSON.parse(JSON.stringify(divs[p-1])),JSON.parse(JSON.stringify(div_sizes[p-1])),"red",p-1);
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            //div_update(divs[q-1],div_sizes[q-1],"red");//Color update
            div_update_manual(JSON.parse(JSON.stringify(divs[q-1])),JSON.parse(JSON.stringify(div_sizes[q-1])),"red",q-1);
        }
    }

    msg_update_merge_manual(Arr);

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        //div_update(divs[start-1],div_sizes[start-1],"green");//Color update
        div_update_manual(JSON.parse(JSON.stringify(divs[start-1])),JSON.parse(JSON.stringify(div_sizes[start-1])),"green",start-1);
    }
}

function merge_sort_auto(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    //msg_update_merge();

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");//Color update
        }
    }

    msg_update_merge(Arr);

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"green");//Color update
    }
    

}

function merge_partition_manual(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        //div_update(divs[mid],div_sizes[mid],"yellow");//Color update
        div_update_manual(JSON.parse(JSON.stringify(divs[mid])),JSON.parse(JSON.stringify(div_sizes[mid])),"yellow",mid);

        merge_partition_manual(start,mid);
        merge_partition_manual(mid+1,end);

        merge_sort_manual(start,mid,end);
    }
}

function merge_partition_auto(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");//Color update

        merge_partition_auto(start,mid);
        merge_partition_auto(mid+1,end);

        merge_sort_auto(start,mid,end);
    }
}
