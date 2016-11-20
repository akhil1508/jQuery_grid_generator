$(document).ready(function(){
var length, width;    
    $('button').click(function(){
        $('#container').empty();
        length = prompt('Enter number of squares');
        width= prompt('Enter total length of square grid in pixels according to your requirement');
        console.log(length);
        
 for(var i=1; i<=length;i++){
        var current= 'row' + i;
        $('#container').append("<div class ='"+ current +"'></div>");
    }
$('div').css('display','block');
for(var j= 1; j<=length;j++){
    var holder = ".row"+j;
    for(var k=1;k<=length;k++){
    $(holder).append("<div class='box'></div>");
    $(holder).css('display','inline-block');
    

}
}
var val = (width/(2*length)).toString()+'px';
$('.box').css('padding',val);

        
$('.box').hover(function(){
    
    var randomRed=(Math.floor(Math.random()*255)).toString();
    var randomBlue=(Math.floor(Math.random()*255)).toString();
    var randomGreen=Math.floor((Math.random()*255)).toString();
 var rgb = "rgb(" + randomRed + ',' + randomBlue +',' + randomGreen +")";
        console.log(rgb);
        $(this).css('background-color',rgb);
});
});
});
   