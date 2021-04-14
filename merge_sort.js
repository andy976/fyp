
function Merge()
{
    c_delay=0;
    if (mode == "auto") {
        merge_partition_auto(0,array_size-1);
        document.getElementById("Text_des1").innerHTML = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer.";
        enable_buttons();
    } else {
        for (var i = 0; i < array_size; i++){
            origin_array[i] = JSON.parse(JSON.stringify(number_size[i]));
        }
        action_count = 0;
        print_action_count = 0;
        initalize();
        document.getElementById("Text_des1").innerHTML = "Merge sort is running.<br></br> Current step: <br></br>" + "The number bars in red are sorting. <br></br> The number bars in yellow are in divide and conquer.";
        merge_partition_manual(0,array_size-1);
        
    }
}

function merge_sort_manual(start,mid,end)
{
    var p=start,q=mid+1;

    var merge_array=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            merge_array[k++]=number_size[q++];

            div_update_manual(JSON.parse(JSON.stringify(numberbar[q-1])),JSON.parse(JSON.stringify(number_size[q-1])),"red",q-1);
        }
        else if(q>end)
        {
            merge_array[k++]=number_size[p++];
 
            div_update_manual(JSON.parse(JSON.stringify(numberbar[p-1])),JSON.parse(JSON.stringify(number_size[p-1])),"red",p-1);
        }
        else if(number_size[p]<number_size[q])
        {
            merge_array[k++]=number_size[p++];
  
            div_update_manual(JSON.parse(JSON.stringify(numberbar[p-1])),JSON.parse(JSON.stringify(number_size[p-1])),"red",p-1);
        }
        else
        {
            merge_array[k++]=number_size[q++];
            
            div_update_manual(JSON.parse(JSON.stringify(numberbar[q-1])),JSON.parse(JSON.stringify(number_size[q-1])),"red",q-1);
        }
    }

    msg_update_merge_manual(merge_array);

    for(var t=0;t<k;t++)
    {
        number_size[start++]=merge_array[t];
        
        div_update_manual(JSON.parse(JSON.stringify(numberbar[start-1])),JSON.parse(JSON.stringify(number_size[start-1])),"green",start-1);
    }
}

function merge_sort_auto(start,mid,end)
{
    var p=start;
    var q=mid+1;

    var merge_array=[];
    var k=0;

    

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            merge_array[k++]=number_size[q++];
            div_update(numberbar[q-1],number_size[q-1],"red");//Color update
        }
        else if(q>end)
        {
            merge_array[k++]=number_size[p++];
            div_update(numberbar[p-1],number_size[p-1],"red");//Color update
        }
        else if(number_size[p]<number_size[q])
        {
            merge_array[k++]=number_size[p++];
            div_update(numberbar[p-1],number_size[p-1],"red");//Color update
        }
        else
        {
            merge_array[k++]=number_size[q++];
            div_update(numberbar[q-1],number_size[q-1],"red");//Color update
        }
    }

    msg_update_merge(merge_array);

    for(var t=0;t<k;t++)
    {
        number_size[start++]=merge_array[t];
        div_update(numberbar[start-1],number_size[start-1],"green");//Color update
    }
    

}

function merge_partition_manual(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);

        div_update_manual(JSON.parse(JSON.stringify(numberbar[mid])),JSON.parse(JSON.stringify(number_size[mid])),"yellow",mid);

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
        div_update(numberbar[mid],number_size[mid],"yellow");//Color update

        merge_partition_auto(start,mid);
        merge_partition_auto(mid+1,end);

        merge_sort_auto(start,mid,end);
    }
}
