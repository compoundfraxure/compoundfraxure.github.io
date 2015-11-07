function convertYGS() {
    "use strict";
    var input = document.getElementById("input").value;
    var two = Math.floor(Math.random()*2);
    var three = Math.floor(Math.random()*3);

    //1 Possible
    input = input.replace(/accent/gi, "acenst");
    input = input.replace(/aesthetically/gi, "ascetically");
    input = input.replace(/alone/gi, "lone");
    input = input.replace(/amazing/gi, "amazeing");
    input = input.replace(/and I/gi, "ansi");
    input = input.replace(/and/gi, "n");
    input = input.replace(/angels/gi, "angles");
    input = input.replace(/any/gi, "anu");
    input = input.replace(/appreciate/gi, "apreshiate");
    input = input.replace(/awesome/gi, "awsome");
    input = input.replace(/barbie/gi, "babrie");
    input = input.replace(/back and forth/gi, "backandfouth");
    input = input.replace(/be/gi, "b");
    input = input.replace(/because/gi, "cuz");
    input = input.replace(/believe/gi, "belive");
    input = input.replace(/better/gi, "betr");
    input = input.replace(/bieber/gi, "biber");
    input = input.replace(/bieber's/gi, "bibers");
    input = input.replace(/bitch/gi, "bich");
    input = input.replace(/bitches/gi, "biches");
    input = input.replace(/bites/gi, "bits");
    input = input.replace(/black/gi, "balacj");
    input = input.replace(/blanket/gi, "blnkette");
    input = input.replace(/buns/gi, "bunz");
    input = input.replace(/circumcised/gi, "curcumsaized");
    input = input.replace(/clearly/gi, "cleary");
    input = input.replace(/college/gi, "collage");
    input = input.replace(/comment/gi, "coment");
    input = input.replace(/commenting/gi, "comenting");
    input = input.replace(/crap/gi, "crab");
    input = input.replace(/dawson/gi, "dosin");
    input = input.replace(/deaf/gi, "death");
    input = input.replace(/delete/gi, "delethe");
    input = input.replace(/diaries/gi, "diarise");
    input = input.replace(/disappear/gi, "disapper");
    input = input.replace(/doesn't/gi, "dose&#39;t");
    input = input.replace(/douche/gi, "doushe");
    input = input.replace(/dumped/gi, "dimmed");
    input = input.replace(/english/gi, "engish");
    input = input.replace(/else/gi, "elce");
    input = input.replace(/ever/gi, "evar");
    input = input.replace(/everyone/gi, "evryone");
    input = input.replace(/every one/gi, "evryone");
    input = input.replace(/feature/gi, "feture");
    input = input.replace(/featured/gi, "feutured");
    input = input.replace(/for/gi, "4");
    input = input.replace(/freaks/gi, "freks");
    input = input.replace(/friending/gi, "freinding");
    input = input.replace(/fulfill/gi, "forfill");
    input = input.replace(/genuinely/gi, "genuenly");
    input = input.replace(/get/gi, "git");
    input = input.replace(/gets/gi, "gits");
    input = input.replace(/getting/gi, "getin");
    input = input.replace(/girlfriend/gi, "girlferind");
    input = input.replace(/gomez/gi, "tomas");
    input = input.replace(/good/gi, "god");
    input = input.replace(/great/gi, "grea");
    input = input.replace(/had/gi, "hahd");
    input = input.replace(/honeymoon/gi, "honymoon");
    input = input.replace(/hungry/gi, "hunfry");
    input = input.replace(/johnson/gi, "jhonson");
    input = input.replace(/I/g, "i");
    input = input.replace(/i am/gi, "iam");
    input = input.replace(/idea/gi, "idear");
    input = input.replace(/impossible/gi, "impocible");
    input = input.replace(/improving/gi, "impoving");
    input = input.replace(/isn't/gi, "isant");
    input = input.replace(/killed/gi, "killd");
    input = input.replace(/know/gi, "no");
    input = input.replace(/laid/gi, "layed");
    input = input.replace(/living/gi, "live&#39;ing");
    input = input.replace(/lumpy/gi, "lummpy");
    input = input.replace(/make/gi, "mak");
    input = input.replace(/making/gi, "makeing");
    input = input.replace(/married/gi, "merrid");
    input = input.replace(/me/gi, "meh");
    input = input.replace(/meant/gi, "ment");
    input = input.replace(/might/gi, "myt");
    input = input.replace(/much/gi, "mmuch");
    input = input.replace(/music/gi, "muique");
    input = input.replace(/must/gi, "hust");
    input = input.replace(/not/gi, "no");
    input = input.replace(/nothing/gi, "nouin");
    input = input.replace(/parody/gi, "paradoy");
    input = input.replace(/pregnant/gi, "pregnet");
    input = input.replace(/premiere/gi, "primeir");
    input = input.replace(/proof/gi, "poof");
    input = input.replace(/outros/gi, "extros");
    input = input.replace(/quiet/gi, "quite");
    input = input.replace(/rappers/gi, "rapers");
    input = input.replace(/rapper/gi, "raper");
    input = input.replace(/rapping/gi, "raping");
    input = input.replace(/recongnized/gi, "regodniced");
    input = input.replace(/right/gi, "rite");
    input = input.replace(/said/gi, "sed");
    input = input.replace(/see/gi, "c");
    input = input.replace(/seen/gi, "sean");
    input = input.replace(/selena/gi, "slena");
    input = input.replace(/self/gi, "salf");
    input = input.replace(/sense/gi, "sens");
    input = input.replace(/serial/gi, "serreal");
    input = input.replace(/seriously/gi, "serously");
    input = input.replace(/she's/gi, "shess");
    input = input.replace(/sick/gi, "sic");
    input = input.replace(/singer/gi, "singinger");
    input = input.replace(/single/gi, "singel");
    input = input.replace(/sound/gi, "sond");
    input = input.replace(/so/gi, "soo");
    input = input.replace(/son/gi, "song");
    input = input.replace(/sponge/gi, "spounge");
    input = input.replace(/squarepants/gi, "square(GAY)pants");
    input = input.replace(/stopped/gi, "stupped");
    input = input.replace(/stupidest/gi, "stupdiest");
    input = input.replace(/subscribers/gi, "subsribes");
    input = input.replace(/suck/gi, "suck");
    input = input.replace(/sugar/gi, "suger");
    input = input.replace(/supposed/gi, "suposted");
    input = input.replace(/tastiest/gi, "tastyist");
    input = input.replace(/that's/gi, "thas");
    input = input.replace(/theaters/gi, "theters");
    input = input.replace(/them/gi, "dhemm");
    input = input.replace(/then/gi, "than");
    input = input.replace(/threw/gi, "though");
    input = input.replace(/tobuscus/gi, "tobyusces");
    input = input.replace(/tool/gi, "toohl");
    input = input.replace(/treats/gi, "treets");
    input = input.replace(/trying/gi, "tring");
    input = input.replace(/videos/gi, "video&#39;s");
    input = input.replace(/wait/gi, "wit");
    input = input.replace(/want/gi, "whant");
    input = input.replace(/watch/gi, "wacth");
    input = input.replace(/well/gi, "weel");
    input = input.replace(/which/gi, "wich");
    input = input.replace(/whore/gi, "whoree");
    input = input.replace(/will/gi, "wiil");
    input = input.replace(/willow/gi, "willo");
    input = input.replace(/witch/gi, "wich");
    input = input.replace(/with/gi, "wit");
    input = input.replace(/wrapping/gi, "raping");
    input = input.replace(/your/gi, "you&#39;re");
    input = input.replace(/you're/gi, "your");
    input = input.replace(/youre/gi, "your");


    //2 Possible

    if (two === 0) {
        input = input.replace(/do not/gi, "doughnut");
        input = input.replace(/hating/gi, "hatin");
        input = input.replace(/hilarious/gi, "halourious");
        input = input.replace(/laugh/gi, "laungth");
        input = input.replace(/really/gi, "realy");
        input = input.replace(/subscribe/gi, "subcribe");
        input = input.replace(/terrible/gi, "terrble");
        input = input.replace(/to/gi, "too");

    }
    if (two === 1) {
        input = input.replace(/do not/gi, "donot");
        input = input.replace(/hating/gi, "hatein&#39;");
        input = input.replace(/hilarious/gi, "hillarious");
        input = input.replace(/laugh/gi, "laugth");
        input = input.replace(/really/gi, "rly");
        input = input.replace(/subscribe/gi, "subscibe");
        input = input.replace(/terrible/gi, "terriable");
        input = input.replace(/to/gi, "2");

    }

    //3 Possible

    if (three === 0) {
      input = input.replace(/are/gi, "r");
      input = input.replace(/stupid/gi, "stupied");
      input = input.replace(/you/gi, "u");
    }
    if (three === 1) {
      input = input.replace(/are/gi, "or");
      input = input.replace(/stupid/gi, "stubed");
      input = input.replace(/you/gi, "ya");
    }
    if (three === 2) {
      input = input.replace(/are/gi, "a");
      input = input.replace(/stupid/gi, "stuped");
      input = input.replace(/you/gi, "yu");
    }

    document.getElementById("output").innerHTML = input;
}
