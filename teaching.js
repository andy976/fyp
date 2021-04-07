var photo = document.getElementById("photo");
var teaching = document.getElementById("teaching");
var cal = document.getElementById("cal");
var video = document.getElementById("video");

window.onload = function(){
    teach("Summary");
}


function teach(display)
{
    switch (display) {
        case "Bubble": bubble();
        break;
        case "Selection": selection();
        break;
        case "Insertion": insertion();
        break;
        case "Merge": merge();
        break;
        case "Quick": quick();
        break;
        case "Summary": summary();
        break;
    }


}

function bubble()
{
    photo.innerHTML = "<img src=\"" + "bubble.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "bubble_time.png" + "\" >";
    cal.innerHTML = "<h3>Time Complexity = n*(n+1+1) = n*(n+2) = n^2 + 2n = Θ(n^2)</h3>";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=Yffvd3pkTW4\">Click here for video explanation for bubble sort</a>";

}

function selection()
{
    photo.innerHTML = "<img src=\"" + "selection.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "selection_time.png" + "\" >";
    cal.innerHTML = "<h3>Time Complexity = n*[1+n*(1+1)+1+1] = n*(2n+3) = 2n^2 + 3n = Θ(n^2)</h3>";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=PhNlp_q7mQk\">Click here for video explanation for selection sort</a>";



}

function insertion()
{
    photo.innerHTML = "<img src=\"" + "insertion.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "insertion_time.png" + "\" >";
    cal.innerHTML = "<h3>Time Complexity = n*[1+1+n*(1+1)+1] = n*(2n+3) = 2n^2 + 3n = Θ(n^2)</h3>";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=p6jppwMbB0k\">Click here for video explanation for insertion sort</a>";



}

function merge()
{
    photo.innerHTML = "<img src=\"" + "merge.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "merge_time.png" + "\" >";
    cal.innerHTML = "<h3>T(n) = T(n/2) + T(n/2) + Θ(n) <br> Time Complexity = Θ(n lg n)</h3>";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=MBxqi6GrfN8\">Click here for video explanation for merge sort</a>";



}

function quick()
{
    photo.innerHTML = "<img src=\"" + "quick.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "quick_time.png" + "\" >";
    cal.innerHTML = "<h3>T(n) = T(n/2) + T(n/2) + Θ(n) <br> Time Complexity = Θ(n lg n)</h3>";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=-qOVVRIZzao\">Click here for video explanation for quick sort</a>";



}


function summary()
{
    photo.innerHTML = "<img src=\"" + "summary.png" + "\" >";
    teaching.innerHTML = "<img src=\"" + "summary2.png" + "\" >";
    cal.innerHTML = "";
    video.innerHTML = "<a href=\"https://www.youtube.com/watch?v=9TlHvipP5yA\">Click here for video explanation for general time complexity analysis</a>";


}