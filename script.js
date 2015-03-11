var counter = 0;


function clickMain()
{ 
    counter += 1;
    $("body").prepend("<div id=" + counter + " class= gran ></div>");
    var color = getRandomColor();
    $("#" + counter).css( "background", color);
    $("#main").hide();
}


function clickGran()                                                //XXXXXXXXXXXXXX
{
    counter += 1;
    
    $("body").prepend("<div id=" + counter + " class= papa ></div>");
    var color = getRandomColor();
    $("#" + counter).css( "background", color);
    more();
    
    if (counter > 20) {
       clickCus();
    }
}

function clickPapa()
{
    counter += 1;
    
    if (counter > 15) {
        for (i = 12; i >= 0; i --)
        {
            more();
        }
    }
    else
    {
        more();
    }
    
    if (counter % 3 == 0) {
        $("body").prepend("<div id=" + counter + " class= sis></div>");
        var color = getRandomColor();
        $("#" + counter).css( "background", color);
    }
    else
    {
    $("body").prepend("<div id=" + counter + " class= mama></div>");
    var color = getRandomColor();
    $("#" + counter).css( "background", color);
    
    more();
    }
}

function clickMama()
{
    counter += 1;
    
    if (Math.random() > .7) {
        clickBro();
        clickPapa();
        clickSis();
        clickGran();
        
    }
    else
    {
        $("body").prepend("<div id=" + counter + " class= baby></div>");
        var color = getRandomColor();
        $("#" + counter).css( "background", color);
        //more();
        //more();
        //more();
    }
}


function clickBro()                                             //XXXXXXXXXXXXXX
{
    counter += 1;
    
    if (Math.random() > .5) {
    $("body").prepend("<div id=" + counter + " class= sis></div>");
    var color = getRandomColor();
    $("#" + counter).css( "background", color);
    more();
    }
    else
    {
        clickCus();
        for (i = 10; i >= 0; i --)
        {
            more();
        }
    }
}
function clickSis()
{
    counter += 1;
    if (counter % 7 == 0)
    {
        $("body").prepend("<div id=" + counter + " class= cus></div>");
         var color = getRandomColor();
        $("#" + counter).css( "background", color);
        
    }
    else
    {
        $("body").prepend("<div id=" + counter + " class= bro></div>");
        var color = getRandomColor();
        $("#" + counter).css( "background", color);
        //more();
        //more();
        //more();
        //more();
    }
}
var clickBaby = function()
{
    clickGran();
        
        more();

    clickPapa();
        $("#" + counter).css( "border", "12px dotted firebrick");
        more();


   more();
}

var more = function()
{
        var rCount = (Math.floor(Math.random() * counter));
        if (rCount % 5 <= 1) {
            $("#" + rCount).css( "border-style", "dotted");
        }
        if (counter % 5 == 2) {
            $("#" + rCount).css( "border-style", "solid");
        }
        if (counter % 5 == 3) {
            $("#" + rCount).css( "border-style", "dashed");
        }
        if (counter % 5 == 4) {
            $("#" + rCount).css( "border-style", "double");
        }
        var width = (Math.floor(Math.random() * 34));
        $("#" + rCount).css( "border-width", width);
        $("#" + rCount).css( "border-color", getRandomColor);
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
            for (i = 25; i >= 0; i --)
            {
                more();
            }
        }
    } 
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


