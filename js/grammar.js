function convertYGS() {
    "use strict";
    var input = document.getElementById("input").value;
    var two = Math.floor(Math.random()*2);
    
    //1 Possible
    input = input.replace(/accent/gi, "acenst");
    input = input.replace(/alone/gi, "lone");
    input = input.replace(/barbie/gi, "babrie");
    input = input.replace(/back and forth/gi, "backandfouth");
    input = input.replace(/be/gi, "b");
    input = input.replace(/believe/gi, "belive");
    input = input.replace(/bitches/gi, "biches");
    input = input.replace(/blanket/gi, "blnkette");
    input = input.replace(/circumcised/gi, "curcumsaized");
    input = input.replace(/college/gi, "collage");
    input = input.replace(/comment/gi, "coment");
    input = input.replace(/commenting/gi, "comenting");
    input = input.replace(/disappear/gi, "disapper");
    input = input.replace(/douche/gi, "doushe");
    input = input.replace(/english/gi, "engish");
    input = input.replace(/else/gi, "elce");
    input = input.replace(/ever/gi, "evar");
    input = input.replace(/everyone/gi, "evryone");
    input = input.replace(/every one/gi, "evryone");
    input = input.replace(/feature/gi, "feture");
    input = input.replace(/featured/gi, "feutured");
    input = input.replace(/friending/gi, "freinding");
    input = input.replace(/fucking/gi, "fuking");
    input = input.replace(/genuinely/gi, "genuenly");
    input = input.replace(/get/gi, "git");
    input = input.replace(/gets/gi, "gits");
    input = input.replace(/getting/gi, "getin");
    input = input.replace(/girlfriend/gi, "girlferind");
    input = input.replace(/great/gi, "grea");
    input = input.replace(/had/gi, "hahd");
    input = input.replace(/I/g, "i");
    input = input.replace(/i am/gi, "iam");
    input = input.replace(/idea/gi, "idear");
    input = input.replace(/isn't/gi, "isant");
    input = input.replace(/know/gi, "no");
    input = input.replace(/laid/gi, "layed");
    input = input.replace(/make/gi, "mak");
    input = input.replace(/making/gi, "makeing");
    input = input.replace(/me/gi, "meh");
    input = input.replace(/must/gi, "hust");
    input = input.replace(/nothing/gi, "nouin");
    input = input.replace(/parody/gi, "paradoy");
    input = input.replace(/rappers/gi, "rapers");
    input = input.replace(/rapper/gi, "raper");
    input = input.replace(/rapping/gi, "raping");
    input = input.replace(/right/gi, "rite");
    input = input.replace(/said/gi, "sed");
    input = input.replace(/seen/gi, "sean");
    input = input.replace(/sense/gi, "sens");
    input = input.replace(/serial/gi, "serreal");
    input = input.replace(/sick/gi, "sic");
    input = input.replace(/single/gi, "singel");
    input = input.replace(/sound/gi, "sond");
    input = input.replace(/so/gi, "soo");
    input = input.replace(/sponge/gi, "spounge");
    input = input.replace(/squarepants/gi, "square(GAY)pants");
    input = input.replace(/stupidest/gi, "stupdiest");
    input = input.replace(/subscribers/gi, "subsribes");
    input = input.replace(/suck/gi, "suck");
    input = input.replace(/sugar/gi, "suger");
    input = input.replace(/supposed/gi, "suposted");
    input = input.replace(/tastiest/gi, "tastyist");
    input = input.replace(/to/gi, "too");
    input = input.replace(/tool/gi, "toohl");
    input = input.replace(/treats/gi, "treets");
    input = input.replace(/videos/gi, "video&#39;s");
    input = input.replace(/want/gi, "whant");
    input = input.replace(/watch/gi, "wacth");
    input = input.replace(/well/gi, "weel");
    input = input.replace(/willow/gi, "willo");
    input = input.replace(/wrapping/gi, "raping");
    input = input.replace(/you/gi, "u");
    input = input.replace(/your/gi, "you&#39;re");
    input = input.replace(/you're/gi, "your");
    input = input.replace(/youre/gi, "your");
    
        
    //2 Possible
    
    if (two === 0) {
        input = input.replace(/do not/gi, "doughnut");
    }
    if (two === 1) {
        input = input.replace(/do not/gi, "donot");
    }
    
    document.getElementById("output").innerHTML = input;
}