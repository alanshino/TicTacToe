$(document).ready(function(){
    
    var turns=0;
    
    var spot1=$('#spot1');
    var spot2=$('#spot2');
    var spot3=$('#spot3');
    var spot4=$('#spot4');
    var spot5=$('#spot5');
    var spot6=$('#spot6');
    var spot7=$('#spot7');
    var spot8=$('#spot8');
    var spot9=$('#spot9');
    
    $.fn.checkWin=function(player){
        if (spot1.hasClass(player) && spot2.hasClass(player) && spot3.hasClass(player) ||
            spot4.hasClass(player) && spot5.hasClass(player) && spot6.hasClass(player) ||
            spot7.hasClass(player) && spot8.hasClass(player) && spot9.hasClass(player) ||
            spot1.hasClass(player) && spot4.hasClass(player) && spot7.hasClass(player) ||
            spot2.hasClass(player) && spot5.hasClass(player) && spot8.hasClass(player) ||
            spot3.hasClass(player) && spot6.hasClass(player) && spot9.hasClass(player) ||
            spot1.hasClass(player) && spot5.hasClass(player) && spot9.hasClass(player) ||
            spot3.hasClass(player) && spot5.hasClass(player) && spot7.hasClass(player) 
           ){
                alert(player+' true');
                return true;
            }else{
                alert(player+' false');
                return false;
            }
    }
    
    $.fn.reset=function(){
        $('#board li').text("+");
        $('#board li').removeClass('o');
        $('#board li').removeClass('x');
        $('#board li').removeClass('disabled');
    };
    
    $('#board li').on('click',function(){
        if($(this).hasClass('disabled')){
            alert('this spot is alresdy filled');
        }else if(turns%2==0){
            $(this).text('o');
            $(this).addClass('o disabeld');
            turns++;
            if ($.fn.checkWin('o')){
                alert('winner: o');
                $.fn.reset();
            }
        }else if (turns%2==1){
            $(this).text('x');
            $(this).addClass('x disabled');
            turns++;
            if ($.fn.checkWin('x')){
                alert('winner: x');
                $.fn.reset();
            }
        }
    })
    
    $('#reset').on('click',function(){
        $.fn.reset();
    })
})