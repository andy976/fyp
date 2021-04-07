    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])),"yellow",j);//Color update

            if(number_sizes2[j]>number_sizes2[j+1])
            {
                
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "red",j);//Color update
                update_bar(JSON.parse(JSON.stringify(numberbar2[j+1])),JSON.parse(JSON.stringify(number_sizes2[j+1])), "red",j+1);//Color update

                var temp=number_sizes2[j];
                number_sizes2[j]=number_sizes2[j+1];
                number_sizes2[j+1]=temp;

                msg_update_bubble_manual(JSON.parse(JSON.stringify(number_sizes2[j+1])), JSON.parse(JSON.stringify(number_sizes2[j])), action_count);
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "red",j);//Height update
                update_bar(JSON.parse(JSON.stringify(numberbar2[j+1])),JSON.parse(JSON.stringify(number_sizes2[j+1])), "red",j+1);//Height update
                
                //document.getElementById("Info_Cont1").innerHTML = number_sizes2[j+1] + " swapped with " + number_sizes2[j];
            }
            update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "blue",j);//Color update
        }
        update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "green",j);//Color update
    }
    update_bar(JSON.parse(JSON.stringify(numberbar2[0])),JSON.parse(JSON.stringify(number_sizes2[0])), "green",0);//Color update








    for(var j=0;j<array_size;j++)
    {
        update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])),"yellow",j);;//Color update

        var key= number_sizes2[j];
        var i=j-1;
        while(i>=0 && number_sizes2[i]>key)
        {
            msg_update_insertion_swap_manual(key, number_sizes2[i], action_count);
            update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"red",i);//Color update
            update_bar(JSON.parse(JSON.stringify(numberbar2[i+1])),JSON.parse(JSON.stringify(number_sizes2[i+1])),"red",i+1);//Color update
            //msg_update_insertion_swap(number_sizes2[i+1], number_sizes2[i]);

            number_sizes2[i+1]=number_sizes2[i];

            update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"red",i);//Height update
            update_bar(JSON.parse(JSON.stringify(numberbar2[i+1])),JSON.parse(JSON.stringify(number_sizes2[i+1])),"red",i+1);//Height update
    
            update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"blue",i);//Color update
            if(i==(j-1))
            {
                update_bar(JSON.parse(JSON.stringify(numberbar2[i+1])),JSON.parse(JSON.stringify(number_sizes2[i+1])),"yellow",i+1);//Color update
            }
            else
            {
                update_bar(JSON.parse(JSON.stringify(numberbar2[i+1])),JSON.parse(JSON.stringify(number_sizes2[i+1])),"blue",i+1);//Color update
            }
            i-=1;
        }
        number_sizes2[i+1]=key;

        for(var t=0;t<j;t++)
        {
            update_bar(JSON.parse(JSON.stringify(numberbar2[t])),JSON.parse(JSON.stringify(number_sizes2[t])),"green",t);//Color update
        }
    }
    update_bar(JSON.parse(JSON.stringify(numberbar2[j-1])),JSON.parse(JSON.stringify(number_sizes2[j-1])),"green",j-1);//Color update









    for(var i=0;i<array_size-1;i++)
    {
        update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"red",i);//Color update

        index_min=i;
        origin_min=i;
        msg_update_selection_manual(number_sizes2[origin_min], number_sizes2[index_min],action_count);
        for(var j=i+1;j<array_size;j++)
        {
            update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])),"yellow",j);//Color update

            if(number_sizes2[j]<number_sizes2[index_min])
            {
                if(index_min!=i)
                {
                    update_bar(JSON.parse(JSON.stringify(numberbar2[index_min])),JSON.parse(JSON.stringify(number_sizes2[index_min])),"blue",index_min);//Color update
                }
                index_min=j;
                update_bar(JSON.parse(JSON.stringify(numberbar2[index_min])),JSON.parse(JSON.stringify(number_sizes2[index_min])),"red",index_min);//Color update
                msg_update_selection_manual(number_sizes2[origin_min], number_sizes2[index_min],action_count);
            }
            else
            {
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])),"blue",j);//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=number_sizes2[index_min];
            number_sizes2[index_min]=number_sizes2[i];
            number_sizes2[i]=temp;
            msg_update_selection_swap_manual(number_sizes2[index_min], number_sizes2[i],action_count);
            update_bar(JSON.parse(JSON.stringify(numberbar2[index_min])),JSON.parse(JSON.stringify(number_sizes2[index_min])),"red",index_min);//Height update
            update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"red",i);//Height update
            update_bar(JSON.parse(JSON.stringify(numberbar2[index_min])),JSON.parse(JSON.stringify(number_sizes2[index_min])),"blue",index_min);//Color update
        }
        update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"green",i);//Color update
    }
    update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])),"green",i);//Color update



    
    
    
    
    
    
    
    
    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=number_sizes2[q++];
            
            update_bar(JSON.parse(JSON.stringify(numberbar2[q-1])),JSON.parse(JSON.stringify(number_sizes2[q-1])),"red",q-1);
        }
        else if(q>end)
        {
            Arr[k++]=number_sizes2[p++];
            
            update_bar(JSON.parse(JSON.stringify(numberbar2[p-1])),JSON.parse(JSON.stringify(number_sizes2[p-1])),"red",p-1);
        }
        else if(number_sizes2[p]<number_sizes2[q])
        {
            Arr[k++]=number_sizes2[p++];
            
            update_bar(JSON.parse(JSON.stringify(numberbar2[p-1])),JSON.parse(JSON.stringify(number_sizes2[p-1])),"red",p-1);
        }
        else
        {
            Arr[k++]=number_sizes2[q++];
            
            update_bar(JSON.parse(JSON.stringify(numberbar2[q-1])),JSON.parse(JSON.stringify(number_sizes2[q-1])),"red",q-1);
        }
    }

    msg_update_merge_manual(Arr);

    for(var t=0;t<k;t++)
    {
        number_sizes2[start++]=Arr[t];
        
        update_bar(JSON.parse(JSON.stringify(numberbar2[start-1])),JSON.parse(JSON.stringify(number_sizes2[start-1])),"green",start-1);
    }
















    var i = start + 1;
    var piv = number_sizes2[start];//make the first element as pivot element.
    //div_update(numberbar2[start],number_sizes2[start],"yellow");//Color update
    msg_update_quick(piv);
    update_bar(JSON.parse(JSON.stringify(numberbar2[start])),JSON.parse(JSON.stringify(number_sizes2[start])),"yellow",start);

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (number_sizes2[ j ] < piv)
            {
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "yellow",j);//Color update
                
                //if (i != j)
                msg_update_quick_swap_largesmall(piv, number_sizes2[i], number_sizes2[j], i+1);
                //else
                    //msg_update_quick_swap_largesmallequal(piv, number_sizes2[i]);

                update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])), "red",i);//Color update
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "red",j);//Color update


                var temp=number_sizes2[i];
                number_sizes2[i]=number_sizes2[j];
                number_sizes2[j]=temp;


                update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])), "red",i);//Height update
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "red",j);//Height update

                update_bar(JSON.parse(JSON.stringify(numberbar2[i])),JSON.parse(JSON.stringify(number_sizes2[i])), "blue",i);//Height update
                update_bar(JSON.parse(JSON.stringify(numberbar2[j])),JSON.parse(JSON.stringify(number_sizes2[j])), "blue",j);//Height update

                i += 1;
            }
    }
    if (start == i-1)
        msg_update_quick_swapwithpivotequal(number_sizes2[start], end+1);
    else
        msg_update_quick_swapwithpivot(number_sizes2[start], number_sizes2[i-1]);

    update_bar(JSON.parse(JSON.stringify(numberbar2[start])),JSON.parse(JSON.stringify(number_sizes2[start])), "red",start);//Color update
    update_bar(JSON.parse(JSON.stringify(numberbar2[i-1])),JSON.parse(JSON.stringify(number_sizes2[i-1])), "red",i-1);//Color update
    

    var temp=number_sizes2[start];//put the pivot element in its proper place.
    number_sizes2[start]=number_sizes2[i-1];
    number_sizes2[i-1]=temp;

    update_bar(JSON.parse(JSON.stringify(numberbar2[start])),JSON.parse(JSON.stringify(number_sizes2[start])), "red",start);//Height update
    update_bar(JSON.parse(JSON.stringify(numberbar2[i-1])),JSON.parse(JSON.stringify(number_sizes2[i-1])), "red",i-1);//Height update

    for(var t=start;t<i;t++)
    {
        update_bar(JSON.parse(JSON.stringify(numberbar2[t])),JSON.parse(JSON.stringify(number_sizes2[t])), "green",t);//Color update
        //console.log(numberbar2[t],JSON.parse(JSON.stringify(number_sizes2[t])));
        //console.log(action_count);
    }
    if (t == end) {
        update_bar(JSON.parse(JSON.stringify(numberbar2[t])),JSON.parse(JSON.stringify(number_sizes2[t])), "green",t);
        //console.log(end, "AAA");
    }


    return i-1;//return the position of the pivot