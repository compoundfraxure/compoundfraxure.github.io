function convertYGS() {
	
	"use strict";
    var input = document.getElementById("input").value;
    var two   = Math.floor(Math.random() * 2);
    var three = Math.floor(Math.random() * 3);
    var four  = Math.floor(Math.random() * 4);
    var five  = Math.floor(Math.random() * 5);
    var six   = Math.floor(Math.random() * 6);
    var seven = Math.floor(Math.random() * 7);
    var eight = Math.floor(Math.random() * 8);
    var nine  = Math.floor(Math.random() * 9);
    
    
    input = input.replace(/\bwho\b/gi, "whu");
//1 Possible    input = input.replace(//gi, "");
    
    input = input.replace(/\ba\b/gi, "ah");
    input = input.replace(/accent/gi, "acenst");
    input = input.replace(/acceptance/gi, "acceptacne");
	input = input.replace(/acknowledge/gi, "egnolidge");
    input = input.replace(/aesthetic/gi, "ascetic");
	input = input.replace(/afraid/gi, "aftiaf");
    input = input.replace(/africa/gi, "aferica");
    input = input.replace(/again/gi, "agn");
	input = input.replace(/agony/gi, "aganee");
	input = input.replace(/album/gi, "albub");
    input = input.replace(/alley/gi, "aly");
    input = input.replace(/alone/gi, "lone");
    input = input.replace(/along/gi, "alone");
    input = input.replace(/alot/gi, "alout");
    input = input.replace(/always/gi, "awalys");
    input = input.replace(/and I/gi, "ansi");
    input = input.replace(/angel/gi, "angle");
    input = input.replace(/ankle/gi, "ancle");
    input = input.replace(/annoy/gi, "anonn");
    input = input.replace(/another/gi, "anarother");
    input = input.replace(/\bany\b/gi, "anu");
	input = input.replace(/ape/gi, "ap");
	input = input.replace(/apologies/gi, "apologisies");
    input = input.replace(/appreciate/gi, "apreshiate");
    input = input.replace(/as long/gi, "aslong");
    input = input.replace(/asshole/gi, "assholds");
	input = input.replace(/\bass\b/gi, "ace");
    input = input.replace(/audience/gi, "audeanse");
    input = input.replace(/authority/gi, "athoritay");
    input = input.replace(/babies/gi, "babahs");
    input = input.replace(/baby/gi, "baqby");
    input = input.replace(/barbie/gi, "babrie");
    input = input.replace(/back and forth/gi, "backandfouth");
	input = input.replace(/backyard/gi, "bckyard");
    input = input.replace(/banned/gi, "baned");
    input = input.replace(/\bban\b/gi, "bang");
    input = input.replace(/beauty/gi, "beuty");
    input = input.replace(/behind/gi, "behide");
    input = input.replace(/beyonce/gi, "beonce");
    input = input.replace(/bieber's/gi, "bibers");
    input = input.replace(/bieber/gi, "biber");
	input = input.replace(/bird/gi, "berd");
    input = input.replace(/bitching/gi, "bichting");
    input = input.replace(/bitches/gi, "biches");
    input = input.replace(/bites/gi, "bits");
    input = input.replace(/black/gi, "balacj");
    input = input.replace(/blanket/gi, "blnkette");
    input = input.replace(/blood/gi, "bloood");
	input = input.replace(/boob/gi, "bob");
    input = input.replace(/boss/gi, "boos");
    input = input.replace(/boycott/gi, "boycote");
    input = input.replace(/boys/gi, "boyz");
    input = input.replace(/breaking/gi, "brackin");
    input = input.replace(/break/gi, "brake");
    input = input.replace(/broadway/gi, "brodway");
    input = input.replace(/broke/gi, "borke");
    input = input.replace(/brought/gi, "broight");
    input = input.replace(/\bbro\b/gi, "bra");
    input = input.replace(/bugging/gi, "buging");
    input = input.replace(/bullied/gi, "bullyd");
    input = input.replace(/bumps/gi, "bombs");
    input = input.replace(/buns/gi, "bunz");
	input = input.replace(/burn/gi, "burd");
    input = input.replace(/burst/gi, "burted");
    input = input.replace(/button/gi, "buttoonn");
	input = input.replace(/calm/gi, "clam");
    input = input.replace(/canada/gi, "cananda");
    input = input.replace(/canadian/gi, "canaideien");
    input = input.replace(/\bcan\b/gi, "kan");
    input = input.replace(/\bcar\b/gi, "kar");
    input = input.replace(/channel/gi, "canal");
	input = input.replace(/chick/gi, "chik");
    input = input.replace(/childish/gi, "childing");
    input = input.replace(/\bchild\b/gi, "chield");
    input = input.replace(/chinese/gi, "chines");
    input = input.replace(/christmas/gi, "cristmas");
    input = input.replace(/circumcise/gi, "curcumsaize");
    input = input.replace(/clearly/gi, "cleary");
    input = input.replace(/cleavage/gi, "celvege");
    input = input.replace(/clever/gi, "cleaver");
    input = input.replace(/closest/gi, "closes");
    input = input.replace(/coincidence/gi, "quouncidences");
    input = input.replace(/complete/gi, "comepealt");
	input = input.replace(/controller/gi, "controler");
    input = input.replace(/costume/gi, "costum");
    input = input.replace(/college/gi, "collage");
    input = input.replace(/concert/gi, "cosert");
    input = input.replace(/condom/gi, "condemn");
    input = input.replace(/confuse/gi, "confsue");
    input = input.replace(/congratulations/gi, "congrutalions");
    input = input.replace(/conquered/gi, "concurred");
    input = input.replace(/conquer/gi, "concur");
    input = input.replace(/conscious/gi, "conches");
    input = input.replace(/correct/gi, "cerrert");
    input = input.replace(/could've/gi, "kould of");
    input = input.replace(/\bcould\b/gi, "kould");
    input = input.replace(/course/gi, "corse");
    input = input.replace(/crappier/gi, "crapper");
    input = input.replace(/\bcrap\b/gi, "crab");
    input = input.replace(/creeper/gi, "creaper");
    input = input.replace(/creepy/gi, "kreapy");
    input = input.replace(/crotch/gi, "crouch");
    input = input.replace(/cruel/gi, "crualy");
    input = input.replace(/cry/gi, "cray");
    input = input.replace(/dairy/gi, "diary");
    input = input.replace(/damn/gi, "dame");
	input = input.replace(/dancing/gi, "dacing");
    input = input.replace(/dangerous/gi, "dangerois");
	input = input.replace(/dare/gi, "dear");
    input = input.replace(/dawson/gi, "dosin");
    input = input.replace(/deaf/gi, "death");
    input = input.replace(/dear/gi, "deer");
    input = input.replace(/decision/gi, "disurgeon");
    input = input.replace(/delete/gi, "delethe");
    input = input.replace(/deliver/gi, "delivery");
    input = input.replace(/destiny/gi, "density");
    input = input.replace(/diaries/gi, "diarise");
	input = input.replace(/dictionary/gi, "dicktionary");
    input = input.replace(/difference/gi, "diverence");
    input = input.replace(/disappear/gi, "disapper");
    input = input.replace(/discs/gi, "dics");
    input = input.replace(/dizziness/gi, "dizzness");
    input = input.replace(/dumped/gi, "dimmed");
    input = input.replace(/dying/gi, "dieing");
    input = input.replace(/else/gi, "elce");
    input = input.replace(/embarasses/gi, "ambarses");
    input = input.replace(/embarassed/gi, "embressed");
	input = input.replace(/emotional/gi, "emocionant");
    input = input.replace(/energize/gi, "energyzeite");
    input = input.replace(/enjoy/gi, "enjoi");
    input = input.replace(/entertain/gi, "entretam");
    input = input.replace(/enterprise/gi, "enterpise");
    input = input.replace(/especially/gi, "specially");
    input = input.replace(/even/gi, "evan");
    input = input.replace(/everybody/gi, "eeverybody");
    input = input.replace(/everyone/gi, "evryone");
    input = input.replace(/every one/gi, "evryone");
    input = input.replace(/\bevery\b/gi, "evry");
	input = input.replace(/excited/gi, "exited");
    input = input.replace(/exist/gi, "exit");
    input = input.replace(/expect/gi, "expekt");
    input = input.replace(/extremely/gi, "extrely");
    input = input.replace(/\bex\b/gi, "ax");
    input = input.replace(/eyebrow/gi, "eyebrown");
    input = input.replace(/fall/gi, "fal");
    input = input.replace(/facepalm/gi, "faceplam");
    input = input.replace(/fame/gi, "faem");
    input = input.replace(/familiar/gi, "formiluar");
	input = input.replace(/farther/gi, "father");
    input = input.replace(/featured/gi, "feutured");
    input = input.replace(/feature/gi, "feture");
    input = input.replace(/finally/gi, "finaly");
    input = input.replace(/fine/gi, "fin");
    input = input.replace(/fool/gi, "foul");
    input = input.replace(/forever/gi, "4evr");
    input = input.replace(/forgettable/gi, "forgotable");
    input = input.replace(/\bfor\b/gi, "4");
    input = input.replace(/freak/gi, "frek");
	input = input.replace(/fuck/gi, "fuk");
    input = input.replace(/fulfill/gi, "forfill");
    input = input.replace(/garbage/gi, "grabage");
	input = input.replace(/\bgay\b/gi, "guy");
    input = input.replace(/george/gi, "gearge");
    input = input.replace(/genuinely/gi, "genuenly");
    input = input.replace(/get/gi, "git");
	input = input.replace(/girls/gi, "grilz");
    input = input.replace(/gomez/gi, "tomas");
    input = input.replace(/goose/gi, "goss");
    input = input.replace(/\bgot\b/gi, "qot");
    input = input.replace(/graduated/gi, "gradated");
    input = input.replace(/grand/gi, "grath");
	input = input.replace(/graphic/gi, "grafic");
    input = input.replace(/great/gi, "grea");
    input = input.replace(/gross/gi, "gorsse");
    input = input.replace(/ground/gi, "grond");
    input = input.replace(/had/gi, "hahd");
	input = input.replace(/haters/gi, "haterz");
    input = input.replace(/\bhate\b/gi, "hte");
    input = input.replace(/heard/gi, "heared");
    input = input.replace(/herself/gi, "heself");
    input = input.replace(/\bhe's\b/gi, "hi's");
    input = input.replace(/holidays/gi, "hoildays");
    input = input.replace(/homophobe/gi, "homofooobbbbbb");
    input = input.replace(/homosexual/gi, "hobosexual");
    input = input.replace(/honeymoon/gi, "honymoon");
    input = input.replace(/hook/gi, "hock");
    input = input.replace(/hope/gi, "houp");
    input = input.replace(/horrid/gi, "horred");
	input = input.replace(/horror/gi, "horrorr");
    input = input.replace(/\bhot\b/gi, "hottt");
    input = input.replace(/\bhow\b/gi, "who");
    input = input.replace(/huge/gi, "hugh");
    input = input.replace(/hunks/gi, "hunx");
    input = input.replace(/hunt/gi, "hut");
    input = input.replace(/hurt/gi, "heart");
    input = input.replace(/hysteric/gi, "historic");
    input = input.replace(/\bI\b/g, "i");
    input = input.replace(/i am/gi, "iam");
    input = input.replace(/i'm/gi, "um");
    input = input.replace(/idea/gi, "idear");
    input = input.replace(/idiot/gi, "idot");
    input = input.replace(/imagination/gi, "imagenation");
    input = input.replace(/impossible/gi, "impocible");
    input = input.replace(/impressed/gi, "impresses");
    input = input.replace(/improving/gi, "impoving");
    input = input.replace(/improve/gi, "impove");
    input = input.replace(/inappropriate/gi, "unopropriet");
    input = input.replace(/inconvenience/gi, "inconvenius");
    input = input.replace(/injures/gi, "inurs");
    input = input.replace(/internet/gi, "interent");
    input = input.replace(/isn't/gi, "isant");
    input = input.replace(/japanese/gi, "japaniese");
    input = input.replace(/jealousy/gi, "jealously");
    input = input.replace(/johnson/gi, "jhonson");
    input = input.replace(/johansson/gi, "johnsons");
    input = input.replace(/joke/gi, "jak");
    input = input.replace(/jonathan/gi, "jonatan");
	input = input.replace(/kick/gi, "kik");
	input = input.replace(/kidding/gi, "kitten");
    input = input.replace(/killed/gi, "killd");
	input = input.replace(/kitchen/gi, "kiten");
    input = input.replace(/knew/gi, "new");
    input = input.replace(/ladies/gi, "ladis");
    input = input.replace(/laid/gi, "layed");
	input = input.replace(/later/gi, "latter");
    input = input.replace(/laughed/gi, "lughed");
    input = input.replace(/laser/gi, "lazza");
    input = input.replace(/leg/gi, "lag");
    input = input.replace(/lesson/gi, "lasson");
	input = input.replace(/listened/gi, "lisent");
    input = input.replace(/living/gi, "live&#39;ing");
    input = input.replace(/loophole/gi, "lop hole");
    input = input.replace(/loop/gi, "lop");
	input = input.replace(/lopsided/gi, "loped sided");
    input = input.replace(/losers/gi, "loosers");
    input = input.replace(/lottery/gi, "lottary");
    input = input.replace(/lumpy/gi, "lummpy");
    input = input.replace(/lyrics/gi, "lurics");
    input = input.replace(/mad/gi, "madd");
    input = input.replace(/maker/gi, "maka");
    input = input.replace(/makes/gi, "meks");
    input = input.replace(/mart/gi, "markt");
    input = input.replace(/masturbating/gi, "masturbatig");
    input = input.replace(/match/gi, "mtch");
    input = input.replace(/maybe/gi, "maybeh");
    input = input.replace(/meant/gi, "ment");
    input = input.replace(/meeting room/gi, "meetin groom");
    input = input.replace(/meeting/gi, "meetin");
    input = input.replace(/\bmen\b/gi, "me");
    input = input.replace(/might/gi, "myt");
    input = input.replace(/milk/gi, "mild");
	input = input.replace(/momma/gi, "moma");
    input = input.replace(/money/gi, "monni");
    input = input.replace(/much/gi, "mmuch");
    input = input.replace(/mother/gi, "mutha");
    input = input.replace(/myself/gi, "mysef");
    input = input.replace(/narration/gi, "narroration");
    input = input.replace(/nazis/gi, "nazis");
    input = input.replace(/neighbor/gi, "neightboor");
    input = input.replace(/nerd/gi, "neard");
	input = input.replace(/never/gi, "nevet");
    input = input.replace(/\bnew\b/gi, "noo");
    input = input.replace(/nickel/gi, "nickle");
    input = input.replace(/normally/gi, "normly");
    input = input.replace(/nothing/gi, "nun");
    input = input.replace(/\bnot\b/gi, "no");
	input = input.replace(/number/gi, "nuber");
    input = input.replace(/nurturing/gi, "nuturing");
    input = input.replace(/obama/gi, "obma");
    input = input.replace(/officially/gi, "afisuasly");
    input = input.replace(/\boff\b/gi, "of");
    input = input.replace(/\bonce\b/gi, "1ce");
    input = input.replace(/\bone\b/gi, "whone");
    input = input.replace(/opinion/gi, "apeanyon");
    input = input.replace(/orgasms/gi, "orgamss");
    input = input.replace(/original/gi, "arigional");
    input = input.replace(/other/gi, "aother");
    input = input.replace(/outros/gi, "extros");
	input = input.replace(/overload/gi, "overlord");
    input = input.replace(/overreacting/gi, "everreating");
    input = input.replace(/pachelbel/gi, "pahclbel");
    input = input.replace(/packs/gi, "paicks");
    input = input.replace(/pajamas/gi, "pajumus");
    input = input.replace(/parody/gi, "paradoy");
	input = input.replace(/pathetic/gi, "patetic");
	input = input.replace(/patience/gi, "patients");
    input = input.replace(/peace/gi, "piece");
    input = input.replace(/photobomb/gi, "photobamb");
    input = input.replace(/physique/gi, "physice");
    input = input.replace(/pick/gi, "pic");
	input = input.replace(/plus/gi, "pulse");
    input = input.replace(/poison/gi, "poson");
    input = input.replace(/poker/gi, "pocer");
    input = input.replace(/precious/gi, "precicious");
    input = input.replace(/premiere/gi, "primeir");
    input = input.replace(/probably/gi, "proabbaly");
    input = input.replace(/proof/gi, "poof");
	input = input.replace(/property/gi, "propety");
    input = input.replace(/prophet/gi, "profect");
    input = input.replace(/proud/gi, "prou");
	input = input.replace(/psychic/gi, "psciquic");
    input = input.replace(/public/gi, "pubic");
    input = input.replace(/pumpkin/gi, "pumpken");
    input = input.replace(/propose/gi, "purpose");
    input = input.replace(/questioning/gi, "quesstionin");
    input = input.replace(/quickly/gi, "quikly");
    input = input.replace(/quiet/gi, "quite");
    input = input.replace(/raging/gi, "ragging");
    input = input.replace(/rappers/gi, "rapers");
    input = input.replace(/rapper/gi, "raper");
    input = input.replace(/rapping/gi, "raping");
	input = input.replace(/rated/gi, "ratted");
    input = input.replace(/read/gi, "reid");
    input = input.replace(/realise/gi, "relise");
    input = input.replace(/realize/gi, "relise");
    input = input.replace(/\breal\b/gi, "reall");
    input = input.replace(/recongnized/gi, "regodniced");
    input = input.replace(/rebecca/gi, "rebeca");
    input = input.replace(/refurbished/gi, "refebisted");
    input = input.replace(/religious/gi, "regilous");
    input = input.replace(/represent/gi, "rapresent");
    input = input.replace(/remain/gi, "reman");
    input = input.replace(/rematch/gi, "remach");
    input = input.replace(/remembrance/gi, "remembrence");
    input = input.replace(/requisites/gi, "requisits");
	input = input.replace(/respact/gi, "respact");
    input = input.replace(/responsible/gi, "responsibles");
    input = input.replace(/revelations/gi, "revalations");
    input = input.replace(/rims/gi, "rimz");
    input = input.replace(/road/gi, "rode");
    input = input.replace(/said/gi, "sed");
    input = input.replace(/satan/gi, "setan");
    input = input.replace(/saying/gi, "saiyan");
    input = input.replace(/\bsay\b/gi, "sey");
    input = input.replace(/scary/gi, "scray");
    input = input.replace(/scrubs/gi, "scubs");
    input = input.replace(/seconds/gi, "secodns");
    input = input.replace(/seen/gi, "sean");
    input = input.replace(/\bsea\b/gi, "see");
    input = input.replace(/seizure/gi, "sierzure");
    input = input.replace(/selena/gi, "slena");
    input = input.replace(/send/gi, "sended");
    input = input.replace(/scenes/gi, "sence");
    input = input.replace(/serial/gi, "serreal");
    input = input.replace(/seriously/gi, "serously");
    input = input.replace(/sexuality/gi, "saxuality");
    input = input.replace(/\bsex\b/gi, "sexx");
	input = input.replace(/shame/gi, "sham");
    input = input.replace(/shane/gi, "shaena");
    input = input.replace(/she's/gi, "shess");
	input = input.replace(/shit/gi, "shirt");
    input = input.replace(/shocked/gi, "shalked");
    input = input.replace(/shorties/gi, "shoteez");
    input = input.replace(/should/gi, "shound");
    input = input.replace(/sick/gi, "sic");
    input = input.replace(/sign/gi, "sine");
    input = input.replace(/singer/gi, "singinger");
    input = input.replace(/\bsing\b/gi, "sinq");
    input = input.replace(/single/gi, "singel");
    input = input.replace(/situation/gi, "sichiation");
    input = input.replace(/slapping/gi, "slaping");
    input = input.replace(/smack/gi, "smach");
    input = input.replace(/smallest/gi, "samllet");
    input = input.replace(/smell/gi, "smelll");
    input = input.replace(/smile/gi, "smyle");
	input = input.replace(/sneezed/gi, "snessed");
    input = input.replace(/\bsome\b/gi, "sumome");
    input = input.replace(/sound/gi, "sond");
    input = input.replace(/\bso\b/gi, "soo");
    input = input.replace(/\bson\b/gi, "song");
	input = input.replace(/spare/gi, "spar");
    input = input.replace(/speaking/gi, "spakin");
    input = input.replace(/speak/gi, "spoke");
    input = input.replace(/speechless/gi, "speakless");
	input = input.replace(/spoiler/gi, "spoliper");
    input = input.replace(/sponge/gi, "spounge");
    input = input.replace(/sprained/gi, "spraned");
    input = input.replace(/stopped/gi, "stupped");
    input = input.replace(/\bstop\b/gi, "stopp");
    input = input.replace(/straight/gi, "stragle");
    input = input.replace(/streaking/gi, "skreaking");
	input = input.replace(/stripper/gi, "streeper");
    input = input.replace(/subject/gi, "subjecf");
    input = input.replace(/subscribers/gi, "subsribes");
    input = input.replace(/succeed/gi, "sucseed");
    input = input.replace(/sucks/gi, "sux");
    input = input.replace(/sugar/gi, "suger");
    input = input.replace(/suicide/gi, "sewerside");
	input = input.replace(/super/gi, "supa");
    input = input.replace(/supposed/gi, "suposted");
    input = input.replace(/sure/gi, "shore");
    input = input.replace(/sweet/gi, "sweat");
    input = input.replace(/swinging/gi, "swining");
    input = input.replace(/synchronization/gi, "sycernanation");
    input = input.replace(/synchronized/gi, "sincronised");
    input = input.replace(/taking/gi, "takeing");
    input = input.replace(/tales/gi, "tails");
    input = input.replace(/talking/gi, "talkiinnq");
    input = input.replace(/tastiest/gi, "tastyist");
    input = input.replace(/thanks/gi, "thanx");
    input = input.replace(/theaters/gi, "theters");
    input = input.replace(/theft/gi, "thet");
    input = input.replace(/them/gi, "dhemm");
    input = input.replace(/then/gi, "than");
    input = input.replace(/theoretical/gi, "therotical");
    input = input.replace(/these/gi, "thesw");
    input = input.replace(/things/gi, "thangs");
    input = input.replace(/thinking/gi, "thunking");
    input = input.replace(/third/gi, "3th");
	input = input.replace(/thought/gi, "though");
    input = input.replace(/threatening/gi, "tretining");
    input = input.replace(/threw/gi, "though");
    input = input.replace(/through/gi, "threw");
    input = input.replace(/throw/gi, "through");
    input = input.replace(/tickets/gi, "tickes");
    input = input.replace(/tighter/gi, "titer");
    input = input.replace(/timbers/gi, "tembers");
    input = input.replace(/title/gi, "tital");
    input = input.replace(/tobuscus/gi, "tobyusces");
    input = input.replace(/together/gi, "2gether");
    input = input.replace(/tool/gi, "toohl");
    input = input.replace(/traumitized/gi, "tromitized");
    input = input.replace(/treats/gi, "treets");
    input = input.replace(/trolls/gi, "trolles");
    input = input.replace(/\btroll\b/gi, "trool");
    input = input.replace(/troubled/gi, "troubeled");
    input = input.replace(/trying/gi, "tring");
    input = input.replace(/tutorial/gi, "taturiol");
	input = input.replace(/turned/gi, "truned");
    input = input.replace(/type/gi, "typle");
    input = input.replace(/ugly/gi, "agli");
    input = input.replace(/under/gi, "uder");
    input = input.replace(/unknown/gi, "unknow");
    input = input.replace(/until/gi, "till");
    input = input.replace(/vain/gi, "vane");
    input = input.replace(/volume/gi, "valume");
    input = input.replace(/views/gi, "fews");
	input = input.replace(/viewed/gi, "wieved");
    input = input.replace(/virgin/gi, "virgine");
    input = input.replace(/wait/gi, "wit");
	input = input.replace(/walking/gi, "wakin");
    input = input.replace(/warm/gi, "worm");
    input = input.replace(/wasting/gi, "basting");
    input = input.replace(/waste/gi, "waist");
	input = input.replace(/watched/gi, "wagged");
    input = input.replace(/wear/gi, "ware");
    input = input.replace(/well/gi, "weel");
    input = input.replace(/whack/gi, "whackk");
    input = input.replace(/wheels/gi, "wheelz");
    input = input.replace(/where/gi, "whr");
    input = input.replace(/which/gi, "wich");
    input = input.replace(/whisper/gi, "whsipered");
    input = input.replace(/whole/gi, "hore");
    input = input.replace(/whores/gi, "whres");
    input = input.replace(/whore/gi, "whoree");
    input = input.replace(/\bwill\b/gi, "wiil");
    input = input.replace(/willow/gi, "willo");
    input = input.replace(/witch/gi, "wich");
    input = input.replace(/with or/gi, "wither");
    input = input.replace(/wonderful/gi, "wndrful");
    input = input.replace(/\bwon\b/gi, "worn");
    input = input.replace(/work/gi, "wonk");
    input = input.replace(/wouldn't/gi, "wouldent");
    input = input.replace(/wrapping/gi, "raping");
    input = input.replace(/write/gi, "right");
	input = input.replace(/yeah/gi, "yah");
    input = input.replace(/your/gi, "you&#39;re");
    input = input.replace(/you'll/gi, "your'll");
    input = input.replace(/you're/gi, "your");
    input = input.replace(/you've/gi, "use");

//2 Possible    input = input.replace(//gi, "");

    if (two === 0) {
        input = input.replace(/about/gi, "bout");
		input = input.replace(/accept/gi, "except");
        input = input.replace(/amazing/gi, "amazeing");
        input = input.replace(/asymmetric/gi, "uncimetric");
        input = input.replace(/atheist/gi, "athiest");
        input = input.replace(/\bback\b/gi, "bck");
        input = input.replace(/before/gi, "brfore");
        input = input.replace(/beginning/gi, "begging");
        input = input.replace(/being/gi, "beeing");
        input = input.replace(/believe/gi, "belive");
		input = input.replace(/better/gi, "betr");
        input = input.replace(/\bbe\b/gi, "b");
        input = input.replace(/birthday/gi, "birtday");
		input = input.replace(/boner/gi, "bonner");
        input = input.replace(/\bby\b/gi, "bi");
        input = input.replace(/can't/gi, "kant");
		input = input.replace(/ceiling/gi, "cieling");
        input = input.replace(/children/gi, "childeran");
		input = input.replace(/citizens/gi, "senices");
        input = input.replace(/comedy/gi, "comertry");
        input = input.replace(/comment/gi, "coment");
        input = input.replace(/congrats/gi, "congrate");
        input = input.replace(/dead/gi, "ded");
        input = input.replace(/didn't/gi, "dident");
        input = input.replace(/disgusting/gi, "discus sting");
        input = input.replace(/dog/gi, "dawg");
        input = input.replace(/do not/gi, "doughnut");
        input = input.replace(/doesn't/gi, "dose&#39;t");
        input = input.replace(/dumbass/gi, "dunbass");
        input = input.replace(/\bever\b/gi, "evar");
        input = input.replace(/feel/gi, "feal");
        input = input.replace(/genius/gi, "genuis");
        input = input.replace(/getting/gi, "getn");
		input = input.replace(/goodness/gi, "godness");
        input = input.replace(/good/gi, "god");
        input = input.replace(/grow/gi, "grop");
        input = input.replace(/guys/gi, "guise");
        input = input.replace(/harassing/gi, "hrasing");
        input = input.replace(/happy/gi, "hapy");
		input = input.replace(/happened/gi, "hapend");
        input = input.replace(/happen/gi, "happy");
		input = input.replace(/hater/gi, "hatter");
        input = input.replace(/height/gi, "hihet");
		input = input.replace(/\bhere\b/gi, "hear");
        input = input.replace(/\bhey\b/gi, "hay");
        input = input.replace(/incredible/gi, "uncredible");
		input = input.replace(/intelligent/gi, "intailigaient");
        input = input.replace(/interesting/gi, "intersting");
        input = input.replace(/\bjealous\b/gi, "jelious");
        input = input.replace(/laugh/gi, "laungth");
        input = input.replace(/listening/gi, "listing");
        input = input.replace(/little/gi, "kittle");
        input = input.replace(/\bmake\b/gi, "mak");
        input = input.replace(/making/gi, "makeing");
		input = input.replace(/\bman\b/gi, "mman");
        input = input.replace(/married/gi, "merrid");
		input = input.replace(/metal/gi, "mantel");
        input = input.replace(/\bme\b/gi, "meh");
        input = input.replace(/more/gi, "moar");
        input = input.replace(/music/gi, "muique");
        input = input.replace(/must/gi, "hust");
        input = input.replace(/\bmy\b/gi, "mah");
        input = input.replace(/nothing/gi, "nouin");
		input = input.replace(/offense/gi, "a fence");
		input = input.replace(/offence/gi, "a fence");
        input = input.replace(/\bpants\b/gi, "panths");
        input = input.replace(/pregnant/gi, "pregnet");
        input = input.replace(/quality/gi, "quelaty");
        input = input.replace(/really/gi, "realy");
        input = input.replace(/relationship/gi, "realtionship");
        input = input.replace(/religion/gi, "religoin");
		input = input.replace(/remember/gi, "rember");
		input = input.replace(/right/gi, "rite");
        input = input.replace(/school/gi, "skewl");
        input = input.replace(/\bsee\b/gi, "c");
        input = input.replace(/spelled/gi, "spelt");
        input = input.replace(/steroids/gi, "staroids");
		input = input.replace(/stupidest/gi, "stupdiest");
        input = input.replace(/suck/gi, "such");
        input = input.replace(/that's a/gi, "thatsa");
        input = input.replace(/\bthink\b/gi, "fink");
        input = input.replace(/threat/gi, "threath");
        input = input.replace(/\bto\b/gi, "too");
		input = input.replace(/troopers/gi, "stoper's");
        input = input.replace(/\bup\b/gi, "upp");
        input = input.replace(/videos/gi, "video&#39;s");
        input = input.replace(/\bvideo\b/gi, "viedo");
		input = input.replace(/watching/gi, "washin");
        input = input.replace(/when/gi, "wen");
        input = input.replace(/wrong/gi, "worng");
    }
    if (two === 1) {
        input = input.replace(/about/gi, "bowt");
		input = input.replace(/accept/gi, "accpet");
        input = input.replace(/amazing/gi, "amezing");
        input = input.replace(/asymmetric/gi, "unsimetric");
        input = input.replace(/atheist/gi, "athius");
        input = input.replace(/\bback\b/gi, "bak");
        input = input.replace(/before/gi, "befor");
        input = input.replace(/beginning/gi, "beging");
        input = input.replace(/being/gi, "beaning");
        input = input.replace(/believe/gi, "beleave");
		input = input.replace(/better/gi, "bether");
        input = input.replace(/\bbe\b/gi, "bee");
        input = input.replace(/birthday/gi, "birtdy");
		input = input.replace(/boner/gi, "bones");
        input = input.replace(/\bby\b/gi, "bye");
        input = input.replace(/can't/gi, "cunt");
		input = input.replace(/ceiling/gi, "cclieng");
        input = input.replace(/children/gi, "childern");
		input = input.replace(/citizens/gi, "bitizens");
        input = input.replace(/comedy/gi, "comady");
        input = input.replace(/comment/gi, "commant");
        input = input.replace(/congrats/gi, "conrats");
        input = input.replace(/dead/gi, "death");
        input = input.replace(/didn't/gi, "didant");
        input = input.replace(/disgusting/gi, "scustings");
        input = input.replace(/dog/gi, "god");
        input = input.replace(/do not/gi, "donot");
        input = input.replace(/doesn't/gi, "dosent");
        input = input.replace(/dumbass/gi, "dumass");
        input = input.replace(/\bever\b/gi, "evr");
        input = input.replace(/feel/gi, "fell");
        input = input.replace(/genius/gi, "genious");
        input = input.replace(/getting/gi, "getin");
        input = input.replace(/good/gi, "gud");
        input = input.replace(/grow/gi, "qrow");
        input = input.replace(/happy/gi, "ham");
		input = input.replace(/happened/gi, "happend");
		input = input.replace(/\bhappen\b/gi, "hopen");
        input = input.replace(/harassing/gi, "harsing");
		input = input.replace(/hater/gi, "hayter");
        input = input.replace(/height/gi, "hight");
		input = input.replace(/\bhere\b/gi, "her");
        input = input.replace(/\bhey\b/gi, "hwy");
        input = input.replace(/incredible/gi, "incrible");
        input = input.replace(/interesting/gi, "interdesting");
        input = input.replace(/\bjealous\b/gi, "jelous");
        input = input.replace(/laugh/gi, "laugth");
        input = input.replace(/listening/gi, "listrening");
        input = input.replace(/little/gi, "liitle");
        input = input.replace(/\bmake\b/gi, "mece");
        input = input.replace(/making/gi, "macking");
        input = input.replace(/married/gi, "marred");
		input = input.replace(/metal/gi, "mental");
        input = input.replace(/\bme\b/gi, "mii");
        input = input.replace(/more/gi, "mor");
        input = input.replace(/music/gi, "muic");
        input = input.replace(/must/gi, "most");
        input = input.replace(/\bmy\b/gi, "myh");
        input = input.replace(/nothing/gi, "nottin");
		input = input.replace(/offense/gi, "affence");
		input = input.replace(/offence/gi, "affence");
        input = input.replace(/\bpants\b/gi, "pents");
        input = input.replace(/pregnant/gi, "pregnat");
        input = input.replace(/quality/gi, "quility");
        input = input.replace(/really/gi, "rly");
        input = input.replace(/relationship/gi, "relionship");
        input = input.replace(/religion/gi, "religon");
		input = input.replace(/remember/gi, "member");
		input = input.replace(/right/gi, "write");
        input = input.replace(/school/gi, "skool");
        input = input.replace(/\bsee\b/gi, "she");
        input = input.replace(/spelled/gi, "speeled");
        input = input.replace(/steroids/gi, "esteroids");
		input = input.replace(/stupidest/gi, "stupid tes");
        input = input.replace(/subtitles/gi, "subtittles");
        input = input.replace(/suck/gi, "sux");
        input = input.replace(/that's a/gi, "tahta");
        input = input.replace(/\bthink\b/gi, "thank");
        input = input.replace(/threat/gi, "thret");
        input = input.replace(/\bto\b/gi, "2");
		input = input.replace(/troopers/gi, "stropers");
        input = input.replace(/\bup\b/gi, "uhp");
        input = input.replace(/videos/gi, "vidoas");
        input = input.replace(/\bvideo\b/gi, "vifeo");
		input = input.replace(/watching/gi, "wacting");
        input = input.replace(/when/gi, "whn");
        input = input.replace(/wrong/gi, "wronq");
    }

//3 Possible    input = input.replace(//gi, "");

        if (three === 0) {
			
            input = input.replace(/\band\b/gi, "nd");
            input = input.replace(/\bare\b/gi, "r");
			input = input.replace(/awesome/gi, "awome");
            input = input.replace(/because/gi, "cuz");
            input = input.replace(/commit/gi, "comit");
			input = input.replace(/\bdoes\b/gi, "doase");
            input = input.replace(/english/gi, "engish");
            input = input.replace(/friend/gi, "ferind");
			input = input.replace(/\bget\b/gi, "qet");
			input = input.replace(/\bgirl\b/gi, "gurl");
            input = input.replace(/hating/gi, "hatin");
            input = input.replace(/hungry/gi, "hungary");
            input = input.replace(/love/gi, "luv");
            input = input.replace(/people/gi, "ppl");
			input = input.replace(/self/gi, "salf");
            input = input.replace(/something/gi, "somthin");
			input = input.replace(/\bsong\b/gi, "snoog");
			input = input.replace(/subscribe/gi, "subcribe");
			input = input.replace(/terrible/gi, "terrble");
			input = input.replace(/\bthan\b/gi, "dan");
            input = input.replace(/that's/gi, "thas");
            input = input.replace(/want/gi, "whant");
            input = input.replace(/watch/gi, "watxh");
            
            
        }
        if (three === 1) {
			
            input = input.replace(/\band\b/gi, "n");
            input = input.replace(/\bare\b/gi, "or");
			input = input.replace(/awesome/gi, "awsome");
            input = input.replace(/because/gi, "cos");
            input = input.replace(/commit/gi, "comet");
			input = input.replace(/\bdoes\b/gi, "dose");
            input = input.replace(/english/gi, "elinglish");
            input = input.replace(/friend/gi, "freind");
			input = input.replace(/\bget\b/gi, "git");
			input = input.replace(/\bgirl\b/gi, "gyal");
            input = input.replace(/hating/gi, "hatein&#39;");
            input = input.replace(/hungry/gi, "hungrey");
            input = input.replace(/love/gi, "lobe");
            input = input.replace(/people/gi, "peppl");
			input = input.replace(/self/gi, "slef");
            input = input.replace(/something/gi, "somat");
			input = input.replace(/\bsong\b/gi, "sponge");
			input = input.replace(/subscribe/gi, "suscribe");
			input = input.replace(/terrible/gi, "terriable");
			input = input.replace(/\bthan\b/gi, "thn");
            input = input.replace(/that's/gi, "thtz");
            input = input.replace(/want/gi, "wont");
            input = input.replace(/watch/gi, "wash");
            
            
        }
        if (three === 2) {
			
            input = input.replace(/\band\b/gi, "ans");
            input = input.replace(/\bare\b/gi, "a");
			input = input.replace(/awesome/gi, "asome");
            input = input.replace(/because/gi, "bcuz");
            input = input.replace(/commit/gi, "commite");
			input = input.replace(/\bdoes\b/gi, "dos");
            input = input.replace(/english/gi, "engelish");
            input = input.replace(/friend/gi, "fredn");
			input = input.replace(/\bget\b/gi, "gat");
			input = input.replace(/\bgirl\b/gi, "gril");
            input = input.replace(/hating/gi, "hateing");
            input = input.replace(/hungry/gi, "hunfry");
            input = input.replace(/love/gi, "lov");
            input = input.replace(/people/gi, "peole");
			input = input.replace(/self/gi, "selphs");
            input = input.replace(/something/gi, "sum");
			input = input.replace(/\bsong\b/gi, "dong");
			input = input.replace(/subscribe/gi, "subscibe");
			input = input.replace(/terrible/gi, "tarroble");
			input = input.replace(/\bthan\b/gi, "tham");
            input = input.replace(/that's/gi, "thts");
            input = input.replace(/want/gi, "wnt");
            input = input.replace(/watch/gi, "wacth");
            
            
        }
    
//4 Possible    input = input.replace(//gi, "");

            if (four === 0) {
                input = input.replace(/beautiful/gi, "beatiful");
                input = input.replace(/bitch/gi, "bich");
                input = input.replace(/douche/gi, "doushe");
                input = input.replace(/first/gi, "1rd");
                input = input.replace(/please/gi, "plz");
				input = input.replace(/racist/gi, "racism");
                input = input.replace(/sense/gi, "seance");
				input = input.replace(/\bthat\b/gi, "dat");
				input = input.replace(/vagina/gi, "virgina");
                input = input.replace(/with/gi, "wit");
				
            }
            if (four === 1) {
                input = input.replace(/beautiful/gi, "beautifal");
                input = input.replace(/bitch/gi, "bich");
                input = input.replace(/douche/gi, "douesh");
                input = input.replace(/first/gi, "firts");
                input = input.replace(/please/gi, "pleas");
				input = input.replace(/racist/gi, "raisist");
                input = input.replace(/sense/gi, "sens");
				input = input.replace(/\bthat\b/gi, "tht");
				input = input.replace(/vagina/gi, "vigina");
                input = input.replace(/with/gi, "wiv");
				
            }
            if (four === 2) {
                input = input.replace(/beautiful/gi, "buetiful");
                input = input.replace(/bitch/gi, "bich");
                input = input.replace(/douche/gi, "dush");
                input = input.replace(/first/gi, "fisrt");
                input = input.replace(/please/gi, "ples");
				input = input.replace(/racist/gi, "rasict");
                input = input.replace(/sense/gi, "since");
				input = input.replace(/\bthat\b/gi, "daf");
				input = input.replace(/vagina/gi, "veghina");
                input = input.replace(/with/gi, "whit");
				
            }
            if (four === 3) {
                input = input.replace(/beautiful/gi, "biuthifull");
                input = input.replace(/bitch/gi, "beach");
                input = input.replace(/douche/gi, "dutch");
                input = input.replace(/first/gi, "frist");
                input = input.replace(/please/gi, "pliz");
				input = input.replace(/racist/gi, "racialist");
                input = input.replace(/sense/gi, "sence");
				input = input.replace(/\bthat\b/gi, "taht");
				input = input.replace(/vagina/gi, "vagine");
                input = input.replace(/with/gi, "wiff");
				
            }
    
//5 Possible    input = input.replace(//gi, "");

                if (five === 0) {
                    input = input.replace(/\bjust\b/gi, "jus");
					input = input.replace(/\bknow\b/gi, "no");
                    input = input.replace(/\bthe\b/gi, "duh");
                    input = input.replace(/this/gi, "diz");
                    input = input.replace(/thumb/gi, "thum");
					input = input.replace(/what/gi, "wat");
                    input = input.replace(/\byou\b/gi, "u");
                }
                if (five === 1) {
                    input = input.replace(/\bjust\b/gi, "jsut");
					input = input.replace(/\bknow\b/gi, "now");
                    input = input.replace(/\bthe\b/gi, "d");
                    input = input.replace(/this/gi, "dis");
                    input = input.replace(/thumb/gi, "dumb");
					input = input.replace(/what/gi, "when");
                    input = input.replace(/\byou\b/gi, "ya");
                }
                if (five === 2) {
                    input = input.replace(/\bjust\b/gi, "juss");
					input = input.replace(/\bknow\b/gi, "noe");
                    input = input.replace(/\bthe\b/gi, "da");
                    input = input.replace(/this/gi, "thids");
                    input = input.replace(/thumb/gi, "thub");
					input = input.replace(/what/gi, "wt");
                    input = input.replace(/\byou\b/gi, "yu");
                }
                if (five === 3) {
                    input = input.replace(/\bjust\b/gi, "juz");
					input = input.replace(/\bknow\b/gi, "kno");
                    input = input.replace(/\bthe\b/gi, "thee");
                    input = input.replace(/this/gi, "tis");
                    input = input.replace(/thumb/gi, "thump");
					input = input.replace(/what/gi, "want");
                    input = input.replace(/\byou\b/gi, "yuu");
                }
                if (five === 4) {
                    input = input.replace(/\bjust\b/gi, "jst");
					input = input.replace(/\bknow\b/gi, "knowe");
                    input = input.replace(/\bthe\b/gi, "tha");
                    input = input.replace(/this/gi, "thys");
                    input = input.replace(/thumb/gi, "tum");
					input = input.replace(/what/gi, "waht");
                    input = input.replace(/\byou\b/gi, "yhu");
                }
    
//6 Possible    input = input.replace(//gi, "");

                    if (six === 0) {
                        input = input.replace(/like/gi, "lkie");
						input = input.replace(/retard/gi, "retarded");
                    }
                    if (six === 1) {
                        input = input.replace(/like/gi, "liyke");
						input = input.replace(/retard/gi, "retad");
                    }
                    if (six === 2) {
                        input = input.replace(/like/gi, "likee");
						input = input.replace(/retard/gi, "returd");
                    }
                    if (six === 3) {
                        input = input.replace(/like/gi, "liek");
						input = input.replace(/retard/gi, "retart");
                    }
                    if (six === 4) {
                        input = input.replace(/like/gi, "liie");
						input = input.replace(/retard/gi, "restart");
                    }
                    if (six === 5) {
                        input = input.replace(/blike/gi, "lik");
						input = input.replace(/retard/gi, "redard");
                    }
    
//7 Possible    input = input.replace(//gi, "");

                        if (seven === 0) {
                            
                        }
                        if (seven === 1) {
                            
                        }
                        if (seven === 2) {
                           
                        }
                        if (seven === 3) {
                            
                        }
                        if (seven === 4) {
                            
                        }
                        if (seven === 5) {
                            
                        }
                        if (seven === 6) {
                            
                        }

    //8 Possible    input = input.replace(//gi, "");

                            if (eight === 0) {
                                input = input.replace(/hilarious/gi, "hallatious");
                            }
                            if (eight === 1) {
                                input = input.replace(/hilarious/gi, "hillarious");
                            }
                            if (eight === 2) {
                                input = input.replace(/hilarious/gi, "halariuse");
                            }
                            if (eight === 3) {
                                input = input.replace(/hilarious/gi, "halourious");
                            }
                            if (eight === 4) {
                                input = input.replace(/hilarious/gi, "halours");
                            }
                            if (eight === 5) {
                                input = input.replace(/hilarious/gi, "hilleriouse");
                            }
                            if (eight === 6) {
                                input = input.replace(/hilarious/gi, "halari");
                            }
                            if (eight === 7) {
                                input = input.replace(/hilarious/gi, "halrious");
                            }

//9 Possible    input = input.replace(//gi, "");

                                if (nine === 0) {
                                    input = input.replace(/stupid/gi, "stupied");
                                }
                                if (nine === 1) {
                                    input = input.replace(/stupid/gi, "stubed");
                                }
                                if (nine === 2) {
                                   input = input.replace(/stupid/gi, "stuped"); 
                                }
                                if (nine === 3) {
                                    input = input.replace(/stupid/gi, "stubid");
                                }
                                if (nine === 4) {
                                    input = input.replace(/stupid/gi, "stubit");
                                }
                                if (nine === 5) {
                                    input = input.replace(/stupid/gi, "stpud");
                                }
                                if (nine === 6) {
                                    input = input.replace(/stupid/gi, "studid");
                                }
                                if (nine === 7) {
                                    input = input.replace(/stupid/gi, "stuipid");
                                }
                                if (nine === 8) {
                                    input = input.replace(/stupid/gi, "stpuid");
                                }
// Conflicting Words
	input = input.replace(/life/gi, "like");
    
    document.getElementById("output").innerHTML = input;
	
}

//  input = input.replace(//gi, "");