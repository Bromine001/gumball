var counter = 0;

$(document).ready(function(){
scoreUpdate();
});
                            //Section of functions for new divs !! NOT CALLED BY USER


function newGran()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= gran ></div>");
    more();
}
function newPapa()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= papa ></div>");
    more();
}
function newMama()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= papa ></div>");
    more();
}
function newBaby()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= baby ></div>");
    more();
}
function newSis()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= sis ></div>");
    more();
}
function newBro()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= bro ></div>");
    more();
}
function newCus()
{
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= cus ></div>");
    more();
}

               //General functions called by functions. not called by user. 
var more = function()
{
       
        $("#" + counter).css( "background", getRandomColor());
    
        var rCount = (Math.floor(Math.random() * 25));
        if (rCount % 4 == 0) {
            $("#" + counter).css( "border-style", "dotted");
        }
        else if (counter % 5 == 1) {
            $("#" + counter).css( "border-style", "solid");
        }
        else if (counter % 5 == 2) {
            $("#" + counter).css( "border-style", "dashed");
        }
        else if (counter % 5 == 3) {
            $("#" + counter).css( "border-style", "double");
        }
        var width = (Math.floor(Math.random() * 55));
        $("#" + counter).css( "border-width", width);
        $("#" + counter).css( "border-color", getRandomColor);
}

var getRandomColor = function()
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var scoreUpdate = function()
{
    $("#score").html("Score: " + counter);
}


function clickMain()
{ 
    newGran();
    $("#main").hide();
    scoreUpdate();
}

function clickGran()                                                //XXXXXXXXXXXXXX
{
    newPapa();
    scoreUpdate();
    if (counter > 20) {
       clickCus();
    }
}

function clickPapa()
{
    if (counter % 15 == 0) {
        for (i = 4; i >= 0; i --)
        {
            newBro();
        }
    }
    else
    {
        newMama();
    }
    
    if (counter % 3 == 0)
    {
        newSis();
    }
    else
    {
        newMama();
    }
    scoreUpdate();
}

function clickMama()
{
    counter += 1;
    
    if (Math.random() > .7) {
        newBro();
        newPapa();
        newSis();
        newGran();
        
    }
    else
    {
        newBaby();
    }
    scoreUpdate();
}


function clickBro()                                             //XXXXXXXXXXXXXX
{
    
    if (Math.random() > .5)
    {
        newSis();
    }
    else
    {
        newCus();
        for (i = 10; i >= 0; i --)
        {
            newPapa();
        }
    }
    scoreUpdate();
}
function clickSis()
{
    counter += 1;
    if (counter % 7 == 0)
    {
        newCus();
    }
    else
    {
        newBro();
    }
    scoreUpdate();
}

var clickBaby = function()
{
    newGran();
    newPapa();
    scoreUpdate();
}


 

function clickCus()
{
    counter ++;
    var x = counter % 12;
    
    if (counter > 100) {
        $(".gran").remove();
        $(".papa").remove();
        $(".mama").remove();
        $(".baby").remove();
        $(".cus").remove();
        $(".bro").remove();
        $(".sis").remove();
        $("#main").show();
        //updateScore();
        alert ("Game over! Your final score was " + counter);
        counter = 0;
    }
    
    else
    {
        if (x == 0)
        {
            $(".papa").remove();
        }
        else if (x == 1)
        {
            $(".cus").remove();
        }
        else if (x == 2)
        {
            $(".bro").remove();
        }
        else if (x == 3)
        {
            $(".sis").remove();
        }
        else if (x == 4)
        {
            $(".baby").remove();
        }
        else if (x == 5) {
            $(".gran").remove();
        }
        else
        {
            clickGran();
        }
    }
    scoreUpdate();
}





$( "#main" ).on( "click", clickMain);
$("body").on ( "click", ".gran", clickGran);
$("body").on ( "click", ".papa", clickPapa);
$("body").on ( "click", ".mama", clickMama);
$("body").on ( "click", ".baby", clickBaby);
$("body").on ( "click", ".bro", clickBro);
$("body").on ( "click", ".sis", clickSis);
$("body").on ( "click", ".cus", clickCus);
$("body").on ( "click", "#restart", function()
              { location.reload();
              });


