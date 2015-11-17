function convertYGS() {
    "use strict";
    var input = document.getElementById("input").value;
    var two   = Math.floor(Math.random() * 2);
    var three = Math.floor(Math.random() * 3);
    var four  = Math.floor(Math.random() * 4);
    var five  = Math.floor(Math.random() * 5);

    //1 Possible
    
    input = input.replace(/accent/gi, "acenst");
    input = input.replace(/aesthetically/gi, "ascetically");
    input = input.replace(/african/gi, "aferican");
    input = input.replace(/alley/gi, "aly");
    input = input.replace(/alone/gi, "lone");
    input = input.replace(/alot/gi, "alout");
    input = input.replace(/and I/gi, "ansi");
    input = input.replace(/\band\b/gi, "n");
    input = input.replace(/angels/gi, "angles");
    input = input.replace(/angel/gi, "angle");
    input = input.replace(/\bany\b/gi, "anu");
    input = input.replace(/appreciate/gi, "apreshiate");
    input = input.replace(/as long/gi, "aslong");
    input = input.replace(/audience/gi, "audeanse");
    input = input.replace(/awesome/gi, "awsome");
    input = input.replace(/barbie/gi, "babrie");
    input = input.replace(/back and forth/gi, "backandfouth");
    input = input.replace(/beautiful/gi, "buetiful");
    input = input.replace(/because/gi, "cuz");
    input = input.replace(/before/gi, "brfore");
    input = input.replace(/behind/gi, "behide");
    input = input.replace(/believe/gi, "belive");
    input = input.replace(/better/gi, "betr");
    input = input.replace(/\bbe\b/gi, "b");
    input = input.replace(/bieber's/gi, "bibers");
    input = input.replace(/bieber/gi, "biber");
    input = input.replace(/bitching/gi, "bichting");
    input = input.replace(/bitch/gi, "bich");
    input = input.replace(/bitches/gi, "biches");
    input = input.replace(/bites/gi, "bits");
    input = input.replace(/black/gi, "balacj");
    input = input.replace(/blanket/gi, "blnkette");
    input = input.replace(/boys/gi, "boyz");
    input = input.replace(/breaking/gi, "brackin");
    input = input.replace(/broke/gi, "borke");
    input = input.replace(/bullied/gi, "bullyd");
    input = input.replace(/buns/gi, "bunz");
    input = input.replace(/burst/gi, "burted");
    input = input.replace(/button/gi, "buttoonn");
    input = input.replace(/\bby\b/gi, "bi");
    input = input.replace(/canadian/gi, "canaideien");
    input = input.replace(/can't/gi, "kant");
    input = input.replace(/\bcan\b/gi, "kan");
    input = input.replace(/channel/gi, "canal");
    input = input.replace(/childish/gi, "childing");
    input = input.replace(/children/gi, "childern");
    input = input.replace(/\bchild\b/gi, "chield");
    input = input.replace(/chinese/gi, "chines");
    input = input.replace(/circumcised/gi, "curcumsaized");
    input = input.replace(/clearly/gi, "cleary");
    input = input.replace(/cleavage/gi, "celvege");
    input = input.replace(/closest/gi, "closes");
    input = input.replace(/coincidence/gi, "quouncidences");
    input = input.replace(/college/gi, "collage");
    input = input.replace(/comedy/gi, "comertry");
    input = input.replace(/commit/gi, "comit");
    input = input.replace(/concert/gi, "cosert");
    input = input.replace(/confuse/gi, "confsue");
    input = input.replace(/course/gi, "corse");
    input = input.replace(/crappier/gi, "crapper");
    input = input.replace(/\bcrap\b/gi, "crab");
    input = input.replace(/creepy/gi, "kreapy");
    input = input.replace(/crotches/gi, "crouches");
    input = input.replace(/cruelty/gi, "crualyty");
    input = input.replace(/cry/gi, "cray");
    input = input.replace(/dawson/gi, "dosin");
    input = input.replace(/deaf/gi, "death");
    input = input.replace(/decisions/gi, "disurgeons");
    input = input.replace(/dead/gi, "ded");
    input = input.replace(/delete/gi, "delethe");
    input = input.replace(/destiny/gi, "density");
    input = input.replace(/diaries/gi, "diarise");
    input = input.replace(/disappear/gi, "disapper");
    input = input.replace(/discs/gi, "dics");
    input = input.replace(/dislikers/gi, "dislkiers");
    input = input.replace(/douche/gi, "doushe");
    input = input.replace(/dumped/gi, "dimmed");
    input = input.replace(/else/gi, "elce");
    input = input.replace(/embarasses/gi, "ambarses");
    input = input.replace(/energized/gi, "energyzeited");
    input = input.replace(/entertaining/gi, "entretaming");
    input = input.replace(/especially/gi, "specially");
    input = input.replace(/everyone/gi, "evryone");
    input = input.replace(/every one/gi, "evryone");
    input = input.replace(/\bevery\b/gi, "evry");
    input = input.replace(/ever/gi, "evar");
    input = input.replace(/eyebrows/gi, "eyebrowns");
    input = input.replace(/fall/gi, "fal");
    input = input.replace(/feel/gi, "feal");
    input = input.replace(/featured/gi, "feutured");
    input = input.replace(/feature/gi, "feture");
    input = input.replace(/finally/gi, "finaly");
    input = input.replace(/forever/gi, "4evr");
    input = input.replace(/\bfor\b/gi, "4");
    input = input.replace(/freaks/gi, "freks");
    input = input.replace(/friending/gi, "freinding");
    input = input.replace(/fulfill/gi, "forfill");
    input = input.replace(/george/gi, "gearge");
    input = input.replace(/genuinely/gi, "genuenly");
    input = input.replace(/gets/gi, "gits");
    input = input.replace(/\bget\b/gi, "git");
    input = input.replace(/girlfriend/gi, "girlferind");
    input = input.replace(/gomez/gi, "tomas");
    input = input.replace(/great/gi, "grea");
    input = input.replace(/ground/gi, "grond");
    input = input.replace(/had/gi, "hahd");
    input = input.replace(/happy/gi, "hapy");
    input = input.replace(/hate/gi, "hte");
    input = input.replace(/herself/gi, "heself");
    input = input.replace(/homophobe/gi, "homofooobbbbbb");
    input = input.replace(/honeymoon/gi, "honymoon");
    input = input.replace(/hooker/gi, "hocker");
    input = input.replace(/horrid/gi, "horred");
    input = input.replace(/\bhot\b/gi, "hottt");
    input = input.replace(/hungry/gi, "hunfry");
    input = input.replace(/hunks/gi, "hunx");
    input = input.replace(/\bI\b/g, "i");
    input = input.replace(/i am/gi, "iam");
    input = input.replace(/idea/gi, "idear");
    input = input.replace(/impossible/gi, "impocible");
    input = input.replace(/impressed/gi, "impresses");
    input = input.replace(/improving/gi, "impoving");
    input = input.replace(/incredible/gi, "uncredible");
    input = input.replace(/injures/gi, "inurs");
    input = input.replace(/interesting/gi, "intersting");
    input = input.replace(/isn't/gi, "isant");
    input = input.replace(/japanese/gi, "japaniese");
    input = input.replace(/jealousy/gi, "jealously");
    input = input.replace(/johnson/gi, "jhonson");
    input = input.replace(/joke/gi, "jak");
    input = input.replace(/just/gi, "juss");
    input = input.replace(/killed/gi, "killd");
    input = input.replace(/laid/gi, "layed");
    input = input.replace(/lessons/gi, "lassons");
    input = input.replace(/like/gi, "likee");
    input = input.replace(/little/gi, "liitle");
    input = input.replace(/living/gi, "live&#39;ing");
    input = input.replace(/loophole/gi, "lop hole");
    input = input.replace(/love/gi, "luv");
    input = input.replace(/lumpy/gi, "lummpy");
    input = input.replace(/lyrics/gi, "lurics");
    input = input.replace(/mad/gi, "madd");
    input = input.replace(/maker/gi, "maka");
    input = input.replace(/\bmake\b/gi, "mak");
    input = input.replace(/making/gi, "makeing");
    input = input.replace(/married/gi, "merrid");
    input = input.replace(/\bme\b/gi, "meh");
    input = input.replace(/meant/gi, "ment");
    input = input.replace(/\bmen\b/gi, "me");
    input = input.replace(/might/gi, "myt");
    input = input.replace(/money/gi, "monni");
    input = input.replace(/more/gi, "moar");
    input = input.replace(/much/gi, "mmuch");
    input = input.replace(/must/gi, "hust");
    input = input.replace(/myself/gi, "mysef");
    input = input.replace(/narration/gi, "narroration");
    input = input.replace(/neighbor/gi, "neightboor");
    input = input.replace(/\bnot\b/gi, "no");
    input = input.replace(/obama/gi, "obma");
    input = input.replace(/\bone\b/gi, "whone");
    input = input.replace(/outros/gi, "extros");
    input = input.replace(/overreacting/gi, "everreating");
    input = input.replace(/pachelbel/gi, "pahclbel");
    input = input.replace(/parody/gi, "paradoy");
    input = input.replace(/photobomb/gi, "photobamb");
    input = input.replace(/pick/gi, "pic");
    input = input.replace(/poker/gi, "pocer");
    input = input.replace(/precious/gi, "precicious");
    input = input.replace(/premiere/gi, "primeir");
    input = input.replace(/probably/gi, "proabbaly");
    input = input.replace(/proof/gi, "poof");
    input = input.replace(/prophet/gi, "profect");
    input = input.replace(/proud/gi, "prou");
    input = input.replace(/quality/gi, "quelaty");
    input = input.replace(/quickly/gi, "quikly");
    input = input.replace(/quiet/gi, "quite");
    input = input.replace(/racist/gi, "raisist");
    input = input.replace(/rappers/gi, "rapers");
    input = input.replace(/rapper/gi, "raper");
    input = input.replace(/rapping/gi, "raping");
    input = input.replace(/recongnized/gi, "regodniced");
    input = input.replace(/rebecca/gi, "rebeca");
    input = input.replace(/relationship/gi, "realtionship");
    input = input.replace(/represent/gi, "rapresent");
    input = input.replace(/remember/gi, "rember");
    input = input.replace(/responsible/gi, "responsibles");
    input = input.replace(/retards/gi, "redards");
    input = input.replace(/retard/gi, "retarded");
    input = input.replace(/right/gi, "rite");
    input = input.replace(/road/gi, "rode");
    input = input.replace(/said/gi, "sed");
    input = input.replace(/\bsay\b/gi, "sey");
    input = input.replace(/school/gi, "skewl");
    input = input.replace(/seconds/gi, "secodns");
    input = input.replace(/seen/gi, "sean");
    input = input.replace(/\bsea\b/gi, "see");
    input = input.replace(/selena/gi, "slena");
    input = input.replace(/send/gi, "sended");
    input = input.replace(/scenes/gi, "sence");
    input = input.replace(/serial/gi, "serreal");
    input = input.replace(/seriously/gi, "serously");
    input = input.replace(/she's/gi, "shess");
    input = input.replace(/sick/gi, "sic");
    input = input.replace(/sign/gi, "sine");
    input = input.replace(/singer/gi, "singinger");
    input = input.replace(/\bsing\b/gi, "sinq");
    input = input.replace(/single/gi, "singel");
    input = input.replace(/situation/gi, "sichiation");
    input = input.replace(/smack/gi, "smach");
    input = input.replace(/smell/gi, "smelll");
    input = input.replace(/smile/gi, "smyle");
    input = input.replace(/sound/gi, "sond");
    input = input.replace(/\bso\b/gi, "soo");
    input = input.replace(/\bson\b/gi, "song");
    input = input.replace(/speaking/gi, "spakin");
    input = input.replace(/spelled/gi, "spelt");
    input = input.replace(/sponge/gi, "spounge");
    input = input.replace(/squarepants/gi, "square(GAY)pants");
    input = input.replace(/steroids/gi, "staroids");
    input = input.replace(/stopped/gi, "stupped");
    input = input.replace(/\bstop\b/gi, "stopp");
    input = input.replace(/streaking/gi, "skreaking");
    input = input.replace(/stupidest/gi, "stupdiest");
    input = input.replace(/subscribers/gi, "subsribes");
    input = input.replace(/suck/gi, "such");
    input = input.replace(/sugar/gi, "suger");
    input = input.replace(/suicide/gi, "sewerside");
    input = input.replace(/supposed/gi, "suposted");
    input = input.replace(/sure/gi, "shore");
    input = input.replace(/sweet/gi, "sweat");
    input = input.replace(/tales/gi, "tails");
    input = input.replace(/talking/gi, "talkiinnq");
    input = input.replace(/tastiest/gi, "tastyist");
    input = input.replace(/thanks/gi, "thanx");
    input = input.replace(/\bthan\b/gi, "dan");
    input = input.replace(/that's/gi, "thas");
    input = input.replace(/\bthe\b/gi, "duh");
    input = input.replace(/theaters/gi, "theters");
    input = input.replace(/them/gi, "dhemm");
    input = input.replace(/then/gi, "than");
    input = input.replace(/thinking/gi, "thunking");
    input = input.replace(/\bthink\b/gi, "fink");
    input = input.replace(/third/gi, "3th");
    input = input.replace(/this/gi, "tis");
    input = input.replace(/threat/gi, "threath");
    input = input.replace(/threw/gi, "though");
    input = input.replace(/throw/gi, "through");
    input = input.replace(/tickets/gi, "tickes");
    input = input.replace(/timbers/gi, "tembers");
    input = input.replace(/title/gi, "tital");
    input = input.replace(/tobuscus/gi, "tobyusces");
    input = input.replace(/tool/gi, "toohl");
    input = input.replace(/traumitized/gi, "tromitized");
    input = input.replace(/treats/gi, "treets");
    input = input.replace(/trolls/gi, "trolles");
    input = input.replace(/troubled/gi, "troubeled");
    input = input.replace(/trying/gi, "tring");
    input = input.replace(/tutorial/gi, "taturiol");
    input = input.replace(/type/gi, "typle");
    input = input.replace(/under/gi, "uder");
    input = input.replace(/vagina/gi, "virgina");
    input = input.replace(/videos/gi, "video&#39;s");
    input = input.replace(/wait/gi, "wit");
    input = input.replace(/waste/gi, "waist");
    input = input.replace(/watch/gi, "wacth");
    input = input.replace(/well/gi, "weel");
    input = input.replace(/whack/gi, "whackk");
    input = input.replace(/which/gi, "wich");
    input = input.replace(/whisper/gi, "whsipered");
    input = input.replace(/whore/gi, "whoree");
    input = input.replace(/\bwill\b/gi, "wiil");
    input = input.replace(/willow/gi, "willo");
    input = input.replace(/witch/gi, "wich");
    input = input.replace(/with or/gi, "wither");
    input = input.replace(/work/gi, "wonk");
    input = input.replace(/wrapping/gi, "raping");
    input = input.replace(/write/gi, "right");
    input = input.replace(/your/gi, "you&#39;re");
    input = input.replace(/you'll/gi, "your'll");
    input = input.replace(/you're/gi, "your");
    input = input.replace(/youre/gi, "your");
    input = input.replace(/you've/gi, "use");


    //2 Possible

    if (two === 0) {
        input = input.replace(/about/gi, "bout");
        input = input.replace(/amazing/gi, "amazeing");
        input = input.replace(/being/gi, "beeing");
        input = input.replace(/comment/gi, "coment");
        input = input.replace(/do not/gi, "doughnut");
        input = input.replace(/doesn't/gi, "dose&#39;t");
        input = input.replace(/english/gi, "engish");
        input = input.replace(/getting/gi, "getn");
        input = input.replace(/\bgirl\b/gi, "gurl");
        input = input.replace(/good/gi, "god");
        input = input.replace(/hating/gi, "hatin");
        input = input.replace(/know/gi, "no");
        input = input.replace(/laugh/gi, "laungth");
        input = input.replace(/listening/gi, "listing");
        input = input.replace(/music/gi, "muique");
        input = input.replace(/nothing/gi, "nouin");
        input = input.replace(/pregnant/gi, "pregnet");
        input = input.replace(/really/gi, "realy");
        input = input.replace(/\bsee\b/gi, "c");
        input = input.replace(/self/gi, "salf");
        input = input.replace(/something/gi, "somthin");
        input = input.replace(/subscribe/gi, "subcribe");
        input = input.replace(/terrible/gi, "terrble");
        input = input.replace(/\bthat\b/gi, "dat");
        input = input.replace(/\bto\b/gi, "too");
        input = input.replace(/want/gi, "whant");
        input = input.replace(/what/gi, "wat");
        input = input.replace(/with/gi, "wit");
    }
    if (two === 1) {
        input = input.replace(/about/gi, "bowt");
        input = input.replace(/amazing/gi, "amezing");
        input = input.replace(/being/gi, "beaning");
        input = input.replace(/comment/gi, "commant");
        input = input.replace(/do not/gi, "donot");
        input = input.replace(/doesn't/gi, "dosent");
        input = input.replace(/english/gi, "elinglish");
        input = input.replace(/getting/gi, "getin");
        input = input.replace(/\bgirl\b/gi, "gyal");
        input = input.replace(/good/gi, "gud");
        input = input.replace(/hating/gi, "hatein&#39;");
        input = input.replace(/know/gi, "noe");
        input = input.replace(/laugh/gi, "laugth");
        input = input.replace(/listening/gi, "listrening");
        input = input.replace(/music/gi, "muic");
        input = input.replace(/nothing/gi, "nottin");
        input = input.replace(/pregnant/gi, "pregnat");
        input = input.replace(/really/gi, "rly");
        input = input.replace(/\bsee\b/gi, "she");
        input = input.replace(/self/gi, "slef");
        input = input.replace(/something/gi, "somat");
        input = input.replace(/subscribe/gi, "subscibe");
        input = input.replace(/terrible/gi, "terriable");
        input = input.replace(/\bthat\b/gi, "tht");
        input = input.replace(/\bto\b/gi, "2");
        input = input.replace(/want/gi, "wont");
        input = input.replace(/what/gi, "when");
        input = input.replace(/with/gi, "wiv");
    }

    //3 Possible

    if (three === 0) {
        input = input.replace(/\bare\b/gi, "r");
        input = input.replace(/hilarious/gi, "halourious");
        input = input.replace(/please/gi, "pliz");
        input = input.replace(/sense/gi, "sens");
        input = input.replace(/thumbs/gi, "thums");
    }
    if (three === 1) {
        input = input.replace(/\bare\b/gi, "or");
        input = input.replace(/hilarious/gi, "hillarious");
        input = input.replace(/please/gi, "pleas");
        input = input.replace(/sense/gi, "sence");
        input = input.replace(/thumbs/gi, "dumbs");
    }
    if (three === 2) {
        input = input.replace(/\bare\b/gi, "a");
        input = input.replace(/hilarious/gi, "halours");
        input = input.replace(/please/gi, "ples");
        input = input.replace(/sense/gi, "seance");
        input = input.replace(/thumbs/gi, "thubs");
    }
    
    //4 Possible
    
    if (four === 0) {
        input = input.replace(/first/gi, "1rd");
        if (input.search("you're") < 0) {input = input.replace(/you/gi, "u"); }
    }
    if (four === 1) {
        input = input.replace(/first/gi, "firts");
        if (input.search("you're") < 0) {input = input.replace(/you/gi, "ya"); }
    }
    if (four === 2) {
        input = input.replace(/first/gi, "fisrt");
        if (input.search("you're") < 0) {input = input.replace(/you/gi, "yu"); }
    }
    if (four === 3) {
        input = input.replace(/first/gi, "frist");
        if (input.search("you're") < 0) {input = input.replace(/you/gi, "yuu"); }
    }
    
    //5 Possible
    
    if (five === 0) {
        input = input.replace(/stupid/gi, "stupied");
    }
    if (five === 1) {
        input = input.replace(/stupid/gi, "stubed");
    }
    if (five === 2) {
        input = input.replace(/stupid/gi, "stuped");
    }
    if (five === 3) {
        input = input.replace(/stupid/gi, "stubid");
    }
    if (five === 4) {
        input = input.replace(/stupid/gi, "stubit");
    }
    
    
    document.getElementById("output").innerHTML = input;
}

//  input = input.replace(//gi, "");