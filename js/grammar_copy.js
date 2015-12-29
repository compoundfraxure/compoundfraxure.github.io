function convertYGS() {
	
	"use strict";
	var input = document.getElementById("input").value;
	var caps  = document.getElementById("capsLock").checked;
    
	var two      = Math.floor(Math.random() * 2);
	var three    = Math.floor(Math.random() * 3);
	var four     = Math.floor(Math.random() * 4);
	var five     = Math.floor(Math.random() * 5);
	var six      = Math.floor(Math.random() * 6);
	var seven    = Math.floor(Math.random() * 7);
	var eight    = Math.floor(Math.random() * 8);
	var nine     = Math.floor(Math.random() * 9);
	var ten      = Math.floor(Math.random() * 10);
	var eleven   = Math.floor(Math.random() * 11);
	var twelve   = Math.floor(Math.random() * 12);
	var thirteen = Math.floor(Math.random() * 13);
    
    
	
	input = input.replace(/live/gi, "life");
	input = input.replace(/long/gi, "log");
	input = input.replace(/\bof\b/gi, "if");
	input = input.replace(/\bwho\b/gi, "whu");

//1 Possible	input = input.replace(//gi, "");
    
	input = input.replace(/\ba\b/gi, "ah");
	input = input.replace(/abomination/gi, "abomitantion");
	input = input.replace(/abuse/gi, "aduse");
	input = input.replace(/acceptance/gi, "acceptacne");
	input = input.replace(/ache/gi, "ace");
	input = input.replace(/acknowledge/gi, "egnolidge");
	input = input.replace(/actual/gi, "atchil");
	input = input.replace(/adhd/gi, "80hd");
	input = input.replace(/aesthetic/gi, "ascetic");
	input = input.replace(/afraid/gi, "aftiaf");
	input = input.replace(/africa/gi, "aferica");
	input = input.replace(/after/gi, "afta");
	input = input.replace(/against/gi, "aginst");
	input = input.replace(/again/gi, "agn");
	input = input.replace(/agony/gi, "aganee");
	input = input.replace(/album/gi, "albub");
	input = input.replace(/alcohol/gi, "alkahall");
	input = input.replace(/alley/gi, "aly");
	input = input.replace(/allow/gi, "a low");
	input = input.replace(/alone/gi, "lone");
	input = input.replace(/along/gi, "alone");
	input = input.replace(/although/gi, "altho");
	input = input.replace(/always/gi, "awalys");
	input = input.replace(/\band I\b/gi, "ansi");
	input = input.replace(/angel/gi, "angle");
	input = input.replace(/ankle/gi, "ancle");
	input = input.replace(/annoy/gi, "anonn");
	input = input.replace(/anorexi/gi, "anerexi");
	input = input.replace(/answer/gi, "ansah");
	input = input.replace(/anybody/gi, "annyboddy");
	input = input.replace(/\ban\b/gi, "a");
	input = input.replace(/ape/gi, "ap");
	input = input.replace(/apologies/gi, "apologisies");
	input = input.replace(/apologize/gi, "apaligise");
	input = input.replace(/apology/gi, "apologize");
	input = input.replace(/appreciate/gi, "apreshiate");
	input = input.replace(/apprentice/gi, "aprennter");
	input = input.replace(/around/gi, "arond");
	input = input.replace(/as long/gi, "aslong");
	input = input.replace(/assembly/gi, "assembery");
	input = input.replace(/\bass\b/gi, "ace");
	input = input.replace(/audience/gi, "audeanse");
	input = input.replace(/authority/gi, "athoritay");
	input = input.replace(/autopsy/gi, "autism");
	input = input.replace(/aware/gi, "wear");
	input = input.replace(/babies/gi, "babahs");
	input = input.replace(/baby/gi, "baqby");
	input = input.replace(/bagel/gi, "beagle");
	input = input.replace(/barbie/gi, "babrie");
	input = input.replace(/back and forth/gi, "backandfouth");
	input = input.replace(/backyard/gi, "bckyard");
	input = input.replace(/become/gi, "bcm");
	input = input.replace(/beelzebub/gi, "beezlebub");
	input = input.replace(/behind/gi, "behide");
	input = input.replace(/believing/gi, "belevin");
	input = input.replace(/\bbet\b/gi, "beat");
	input = input.replace(/beyonce/gi, "beonce");
	input = input.replace(/biblical/gi, "biblicl");
	input = input.replace(/bieber's/gi, "bibers");
	input = input.replace(/bieber/gi, "biber");
	input = input.replace(/bird/gi, "berd");
	input = input.replace(/bitching/gi, "bichting");
	input = input.replace(/bitches/gi, "biches");
	input = input.replace(/bites/gi, "bits");
	input = input.replace(/blanket/gi, "blnkette");
	input = input.replace(/blasphemy/gi, "blastphimy");
	input = input.replace(/blow/gi, "bellow");
	input = input.replace(/bomb/gi, "bamb");
	input = input.replace(/boob/gi, "bob");
	input = input.replace(/boring/gi, "boarding");
	input = input.replace(/both/gi, "bolth");
	input = input.replace(/boycott/gi, "boycote");
	input = input.replace(/boys/gi, "boyz");
	input = input.replace(/breed/gi, "breet");
	input = input.replace(/brother/gi, "brothr");
	input = input.replace(/brought/gi, "broight");
	input = input.replace(/bugging/gi, "buging");
	input = input.replace(/bullet/gi, "bullit");
	input = input.replace(/bullied/gi, "bullyd");
	input = input.replace(/bump/gi, "bomb");
	input = input.replace(/buns/gi, "bunz");
	input = input.replace(/burn/gi, "burd");
	input = input.replace(/burst/gi, "burted");
	input = input.replace(/button/gi, "buttoonn");
	input = input.replace(/\bbuy\b/gi, "boy");
	input = input.replace(/calm/gi, "clam");
	input = input.replace(/canada/gi, "cananda");
	input = input.replace(/canadian/gi, "canaideien");
	input = input.replace(/cartoon/gi, "caroon");
	input = input.replace(/\bcar\b/gi, "kar");
	input = input.replace(/certain/gi, "curten");
	input = input.replace(/chapter/gi, "chanter");
	input = input.replace(/chick/gi, "chik");
	input = input.replace(/childish/gi, "childing");
	input = input.replace(/chinese/gi, "chines");
	input = input.replace(/choice/gi, "choise");
	input = input.replace(/christmas/gi, "cristmas");
	input = input.replace(/cinnamon/gi, "synonym");
	input = input.replace(/circumcise/gi, "curcumsaize");
	input = input.replace(/clearly/gi, "cleary");
	input = input.replace(/cleavage/gi, "celvege");
	input = input.replace(/clever/gi, "cleaver");
	input = input.replace(/closest/gi, "closes");
	input = input.replace(/clue/gi, "cleu");
	input = input.replace(/coincidence/gi, "quouncidences");
	input = input.replace(/controller/gi, "controler");
	input = input.replace(/costume/gi, "costum");
	input = input.replace(/\bcost\b/gi, "coasted");
	input = input.replace(/college/gi, "collage");
	input = input.replace(/color/gi, "coloer");
	input = input.replace(/colour/gi, "coloer");
	input = input.replace(/concert/gi, "cosert");
	input = input.replace(/condom/gi, "condemn");
	input = input.replace(/confuse/gi, "confsue");
	input = input.replace(/confusion/gi, "cunfusion");
	input = input.replace(/congratulations/gi, "congrutalions");
	input = input.replace(/conquered/gi, "concurred");
	input = input.replace(/conquer/gi, "concur");
	input = input.replace(/conscious/gi, "conches");
	input = input.replace(/cook/gi, "cock");
	input = input.replace(/copy/gi, "cop");
	input = input.replace(/correct/gi, "cerrert");
	input = input.replace(/could've/gi, "kould of");
	input = input.replace(/\bcould\b/gi, "kould");
	input = input.replace(/country/gi, "conty");
	input = input.replace(/couple/gi, "cuple");
	input = input.replace(/course/gi, "corse");
	input = input.replace(/crappier/gi, "crapper");
	input = input.replace(/creepy/gi, "kreapy");
	input = input.replace(/crotch/gi, "crouch");
	input = input.replace(/cute/gi, "cat");
	input = input.replace(/cutting/gi, "cutin");
	input = input.replace(/dairy/gi, "diary");
	input = input.replace(/dancing/gi, "dacing");
	input = input.replace(/dangerous/gi, "dangerois");
	input = input.replace(/dare/gi, "dear");
	input = input.replace(/dawson/gi, "dosin");
	input = input.replace(/deaf/gi, "death");
	input = input.replace(/dear/gi, "deer");
	input = input.replace(/decision/gi, "disurgeon");
	input = input.replace(/definitely/gi, "defiantly");
	input = input.replace(/delete/gi, "delethe");
	input = input.replace(/delight/gi, "delifht");
	input = input.replace(/deliver/gi, "delivery");
	input = input.replace(/denied/gi, "denited");
	input = input.replace(/despise/gi, "dispise");
	input = input.replace(/destiny/gi, "density");
	input = input.replace(/diaries/gi, "diarise");
	input = input.replace(/dictionary/gi, "dicktionary");
	input = input.replace(/\bdid\b/gi, "dif");
	input = input.replace(/different/gi, "diffrant");
	input = input.replace(/disappear/gi, "disapper");
	input = input.replace(/discs/gi, "dics");
	input = input.replace(/dizziness/gi, "dizzness");
	input = input.replace(/doctor/gi, "docter");
	input = input.replace(/drive/gi, "dive");
	input = input.replace(/dumped/gi, "dimmed");
	input = input.replace(/dungeon/gi, "dungen");
	input = input.replace(/during/gi, "doing");
	input = input.replace(/dying/gi, "dieing");
	input = input.replace(/edition/gi, "edditon");
	input = input.replace(/elected/gi, "electric");
	input = input.replace(/election/gi, "electron");
	input = input.replace(/else/gi, "elce");
	input = input.replace(/emotional/gi, "emocionant");
	input = input.replace(/enchant/gi, "incant");
	input = input.replace(/energize/gi, "energyzeite");
	input = input.replace(/enjoy/gi, "enjoi");
	input = input.replace(/entertain/gi, "entretam");
	input = input.replace(/enterprise/gi, "enterpise");
	input = input.replace(/especially/gi, "specially");
	input = input.replace(/even/gi, "evan");
	input = input.replace(/evolution/gi, "evilultion");
	input = input.replace(/except/gi, "exept");
	input = input.replace(/excited/gi, "exited");
	input = input.replace(/exercise/gi, "exersize");
	input = input.replace(/exist/gi, "exit");
	input = input.replace(/expect/gi, "expekt");
	input = input.replace(/extremely/gi, "extrely");
	input = input.replace(/\bex\b/gi, "ax");
	input = input.replace(/eyebrow/gi, "eyebrown");
	input = input.replace(/fabulous/gi, "faboles");
	input = input.replace(/facecam/gi, "facecum");
	input = input.replace(/failure/gi, "falier");
	input = input.replace(/faint/gi, "fant");
	input = input.replace(/fall/gi, "fal");
	input = input.replace(/fame/gi, "faem");
	input = input.replace(/familiar/gi, "formiluar");
	input = input.replace(/farther/gi, "father");
	input = input.replace(/favorite/gi, "favored");
	input = input.replace(/featured/gi, "feutured");
	input = input.replace(/feature/gi, "feture");
	input = input.replace(/finally/gi, "finaly");
	input = input.replace(/fine/gi, "fin");
	input = input.replace(/fool/gi, "foul");
	input = input.replace(/forever/gi, "4evr");
	input = input.replace(/forgot/gi, "forgo");
	input = input.replace(/forgettable/gi, "forgotable");
	input = input.replace(/for real/gi, "fahreal");
	input = input.replace(/freak/gi, "frek");
	input = input.replace(/freshen/gi, "freshn");
	input = input.replace(/friendship/gi, "frndshp");
	input = input.replace(/front/gi, "frount");
	input = input.replace(/fulfill/gi, "forfill");
	input = input.replace(/funeral/gi, "funarl");
	input = input.replace(/garbage/gi, "grabage");
	input = input.replace(/gave/gi, "gaved");
	input = input.replace(/\bgay\b/gi, "guy");
	input = input.replace(/george/gi, "gearge");
	input = input.replace(/genuinely/gi, "genuenly");
	input = input.replace(/get/gi, "git");
	input = input.replace(/girls/gi, "grilz");
	input = input.replace(/goes/gi, "gos");
	input = input.replace(/going/gi, "doing");
	input = input.replace(/gomez/gi, "tomas");
	input = input.replace(/goose/gi, "goss");
	input = input.replace(/\bgot\b/gi, "qot");
	input = input.replace(/graduated/gi, "gradated");
	input = input.replace(/grandpa/gi, "qrandpa");
	input = input.replace(/grand/gi, "grath");
	input = input.replace(/graphic/gi, "grafic");
	input = input.replace(/gray/gi, "greay");
	input = input.replace(/grenade/gi, "gernade");
	input = input.replace(/grey/gi, "greay");
	input = input.replace(/groove/gi, "grove");
	input = input.replace(/gross/gi, "gorsse");
	input = input.replace(/ground/gi, "grond");
	input = input.replace(/had/gi, "hahd");
	input = input.replace(/haters/gi, "haterz");
	input = input.replace(/have/gi, "haf");
	input = input.replace(/healthier/gi, "heather");
	input = input.replace(/heart/gi, "hart");
	input = input.replace(/herself/gi, "heself");
	input = input.replace(/\bhe's\b/gi, "hi's");
	input = input.replace(/high/gi, "haii");
	input = input.replace(/his/gi, "he's");
	input = input.replace(/holiday/gi, "hoilday");
	input = input.replace(/hologram/gi, "hollow gram");
	input = input.replace(/homosexual/gi, "hobosexual");
	input = input.replace(/honeymoon/gi, "honymoon");
	input = input.replace(/hook/gi, "hock");
	input = input.replace(/hoped/gi, "hopped");
	input = input.replace(/horrid/gi, "horred");
	input = input.replace(/horror/gi, "horrorr");
	input = input.replace(/hour/gi, "hourr");
	input = input.replace(/\bhow\b/gi, "who");
	input = input.replace(/huge/gi, "hugh");
	input = input.replace(/\bhug\b/gi, "huge");
	input = input.replace(/hundred/gi, "hundr");
	input = input.replace(/hunks/gi, "hunx");
	input = input.replace(/hunt/gi, "hut");
	input = input.replace(/hurt/gi, "heart");
	input = input.replace(/hysteric/gi, "historic");
	input = input.replace(/\bI\b/g, "i");
	input = input.replace(/i'll/gi, "ill");
	input = input.replace(/i am/gi, "iam");
	input = input.replace(/idea/gi, "idear");
	input = input.replace(/\bif\b/gi, "iph");
	input = input.replace(/imagination/gi, "imagenation");
	input = input.replace(/impressed/gi, "impresses");
	input = input.replace(/improving/gi, "impoving");
	input = input.replace(/improve/gi, "impove");
	input = input.replace(/inappropriate/gi, "unopropriet");
	input = input.replace(/injures/gi, "inurs");
	input = input.replace(/inspiring/gi, "inspirating");
	input = input.replace(/internet/gi, "interent");
	input = input.replace(/into/gi, "in2");
	input = input.replace(/invisible/gi, "invincible");
	input = input.replace(/isn't/gi, "isant");
	input = input.replace(/\bis\b/gi, "iz");
	input = input.replace(/italian/gi, "italien");
	input = input.replace(/jackpot/gi, "jacepot");
	input = input.replace(/japanese/gi, "japaniese");
	input = input.replace(/jealousy/gi, "jealously");
	input = input.replace(/johnson/gi, "jhonson");
	input = input.replace(/johansson/gi, "johnsons");
	input = input.replace(/joke/gi, "jak");
	input = input.replace(/jonathan/gi, "jonatan");
	input = input.replace(/june/gi, "jue ne");
	input = input.replace(/justine/gi, "just seen");
	input = input.replace(/kick/gi, "kik");
	input = input.replace(/killed/gi, "killd");
	input = input.replace(/\bkill\b/gi, "kil");
	input = input.replace(/kitchen/gi, "kiten");
	input = input.replace(/knife/gi, "knif");
	input = input.replace(/knew/gi, "new");
	input = input.replace(/knife/gi, "knif");
	input = input.replace(/ladies/gi, "ladis");
	input = input.replace(/laid/gi, "layed");
	input = input.replace(/laser/gi, "lazza");
	input = input.replace(/lead/gi, "leed");
	input = input.replace(/leg/gi, "lag");
	input = input.replace(/lesson/gi, "lasson");
	input = input.replace(/librarian/gi, "libranian");
	input = input.replace(/listened/gi, "lisent");
	input = input.replace(/living/gi, "live&#39;ing");
	input = input.replace(/loophole/gi, "lop hole");
	input = input.replace(/loop/gi, "lop");
	input = input.replace(/lopsided/gi, "loped sided");
	input = input.replace(/losers/gi, "loosers");
	input = input.replace(/losing/gi, "lossin");
	input = input.replace(/lost/gi, "losed");
	input = input.replace(/lottery/gi, "lottary");
	input = input.replace(/lumpy/gi, "lummpy");
	input = input.replace(/lyrics/gi, "lurics");
	input = input.replace(/mad/gi, "madd");
	input = input.replace(/maker/gi, "maka");
	input = input.replace(/makes/gi, "meks");
	input = input.replace(/many/gi, "manny");
	input = input.replace(/mart/gi, "markt");
	input = input.replace(/marriage/gi, "maridge");
	input = input.replace(/massive/gi, "mahoosive");
	input = input.replace(/masturbate/gi, "mastribute");
	input = input.replace(/masturbating/gi, "masturbatig");
	input = input.replace(/match/gi, "mtch");
	input = input.replace(/maybe/gi, "maybeh");
	input = input.replace(/meter/gi, "meder");
	input = input.replace(/meeting room/gi, "meetin groom");
	input = input.replace(/meeting/gi, "meetin");
	input = input.replace(/\bmen\b/gi, "me");
	input = input.replace(/middle/gi, "midle");
	input = input.replace(/midst/gi, "mist");
	input = input.replace(/might/gi, "myt");
	input = input.replace(/milk/gi, "mild");
	input = input.replace(/mind/gi, "mine");
	input = input.replace(/missed/gi, "mist");
	input = input.replace(/molest/gi, "mlist");
	input = input.replace(/momma/gi, "moma");
	input = input.replace(/money/gi, "monni");
	input = input.replace(/morning/gi, "mourning");
	input = input.replace(/much/gi, "mmuch");
	input = input.replace(/murder/gi, "muder");
	input = input.replace(/myself/gi, "mysef");
	input = input.replace(/narration/gi, "narroration");
	input = input.replace(/necissarily/gi, "nessaraly");
	input = input.replace(/neighbor/gi, "neightboor");
	input = input.replace(/neither/gi, "neighter");
	input = input.replace(/nerd/gi, "neard");
	input = input.replace(/never/gi, "nevet");
	input = input.replace(/\bnew\b/gi, "noo");
	input = input.replace(/nickel/gi, "nickle");
	input = input.replace(/nobody/gi, "noboddy");
	input = input.replace(/normally/gi, "normly");
	input = input.replace(/\bnot\b/gi, "no");
	input = input.replace(/\bno\b/gi, "knw");
	input = input.replace(/\bnow\b/gi, "nou");
	input = input.replace(/number/gi, "nuber");
	input = input.replace(/nurturing/gi, "nuturing");
	input = input.replace(/obsidian/gi, "obsideyen");
	input = input.replace(/obvious/gi, "oveistly");
	input = input.replace(/occasion/gi, "ocean");
	input = input.replace(/officially/gi, "afisuasly");
	input = input.replace(/\boff\b/gi, "of");
	input = input.replace(/\bonce\b/gi, "1ce");
	input = input.replace(/\bone\b/gi, "whone");
	input = input.replace(/onion/gi, "onyun");
	input = input.replace(/online/gi, "onnline");
	input = input.replace(/oozing/gi, "ozzing");
	input = input.replace(/opinion/gi, "apeanyon");
	input = input.replace(/opportunity/gi, "oppoturnity");
	input = input.replace(/oregon/gi, "organ");
	input = input.replace(/orient/gi, "owrry ant");
	input = input.replace(/original/gi, "arigional");
	input = input.replace(/orthography/gi, "ortogrhafi");
	input = input.replace(/ostrich/gi, "ostric");
	input = input.replace(/other/gi, "aother");
	input = input.replace(/\bour\b/gi, "are");
	input = input.replace(/outros/gi, "extros");
	input = input.replace(/overload/gi, "overlord");
	input = input.replace(/overreacting/gi, "everreating");
	input = input.replace(/past/gi, "pass");
	input = input.replace(/paced/gi, "paste");
	input = input.replace(/pachelbel/gi, "pahclbel");
	input = input.replace(/packs/gi, "paicks");
	input = input.replace(/pain/gi, "paine");
	input = input.replace(/pajamas/gi, "pajumus");
	input = input.replace(/paparazzi/gi, "poperotzze");
	input = input.replace(/paranoid/gi, "paranoic");
	input = input.replace(/parody/gi, "paradoy");
	input = input.replace(/party/gi, "pordy");
	input = input.replace(/part/gi, "prt");
	input = input.replace(/pathetic/gi, "patetic");
	input = input.replace(/\bpedo\b/gi, "peso");
	input = input.replace(/perhap/gi, "merhap");
	input = input.replace(/person/gi, "persone");
	input = input.replace(/pervert/gi, "perfert");
	input = input.replace(/petition/gi, "patention");
	input = input.replace(/photo/gi, "foto");
	input = input.replace(/physique/gi, "physice");
	input = input.replace(/pick/gi, "pic");
	input = input.replace(/planking/gi, "plankinq");
	input = input.replace(/plus/gi, "pulse");
	input = input.replace(/poker/gi, "pocer");
	input = input.replace(/pollution/gi, "paliution");
	input = input.replace(/ponies/gi, "ponnies");
	input = input.replace(/potential/gi, "potentuioal");
	input = input.replace(/potion/gi, "poition");
	input = input.replace(/precious/gi, "precicious");
	input = input.replace(/premiere/gi, "primeir");
	input = input.replace(/privacy/gi, "provecy");
	input = input.replace(/privilege/gi, "prvvilaage");
	input = input.replace(/probably/gi, "proabbaly");
	input = input.replace(/process/gi, "prosses");
	input = input.replace(/proof/gi, "poof");
	input = input.replace(/property/gi, "propety");
	input = input.replace(/proper/gi, "prober");
	input = input.replace(/prostitute/gi, "prostitot");
	input = input.replace(/proud/gi, "prou");
	input = input.replace(/psychic/gi, "psciquic");
	input = input.replace(/psycho/gi, "psico");
	input = input.replace(/public/gi, "pubic");
	input = input.replace(/puke/gi, "puck");
	input = input.replace(/pumpkin/gi, "pumpken");
	input = input.replace(/propose/gi, "purpose");
	input = input.replace(/punch/gi, "puch");
	input = input.replace(/quake/gi, "quek");
	input = input.replace(/quickly/gi, "quikly");
	input = input.replace(/quiet/gi, "quite");
	input = input.replace(/raging/gi, "ragging");
	input = input.replace(/rapped/gi, "raped");
	input = input.replace(/rapper/gi, "raper");
	input = input.replace(/rapping/gi, "raping");
	input = input.replace(/rated/gi, "ratted");
	input = input.replace(/read/gi, "reid");
	input = input.replace(/realise/gi, "relise");
	input = input.replace(/realize/gi, "relise");
	input = input.replace(/recongnized/gi, "regodniced");
	input = input.replace(/rebecca/gi, "rebeca");
	input = input.replace(/refurbished/gi, "refebisted");
	input = input.replace(/represent/gi, "rapresent");
	input = input.replace(/remain/gi, "reman");
	input = input.replace(/rematch/gi, "remach");
	input = input.replace(/remembrance/gi, "remembrence");
	input = input.replace(/requisite/gi, "requisit");
	input = input.replace(/resolution/gi, "resoluyion");
	input = input.replace(/responsible/gi, "responsibles");
	input = input.replace(/\brest\b/gi, "arrest");
	input = input.replace(/revelations/gi, "revalations");
	input = input.replace(/rhetoric/gi, "rataric");
	input = input.replace(/rihanna/gi, "rehianna");
	input = input.replace(/rims/gi, "rimz");
	input = input.replace(/road/gi, "rode");
	input = input.replace(/rude/gi, "ruch");
	input = input.replace(/said/gi, "sed");
	input = input.replace(/satan/gi, "setan");
	input = input.replace(/satisfaction/gi, "satisfactio");
	input = input.replace(/\bsaw\b/gi, "sow");
	input = input.replace(/saying/gi, "saiyan");
	input = input.replace(/\bsay\b/gi, "sey");
	input = input.replace(/scare/gi, "sacre");
	input = input.replace(/scientific/gi, "scinetific");
	input = input.replace(/scrubs/gi, "scubs");
	input = input.replace(/seconds/gi, "secodns");
	input = input.replace(/\bsea\b/gi, "see");
	input = input.replace(/seizure/gi, "sierzure");
	input = input.replace(/selena/gi, "slena");
	input = input.replace(/send/gi, "sended");
	input = input.replace(/\bsent\b/gi, "sed");
	input = input.replace(/scenes/gi, "sence");
	input = input.replace(/scum/gi, "sucm");
	input = input.replace(/sell/gi, "sale");
	input = input.replace(/semen/gi, "seameain");
	input = input.replace(/serial/gi, "serreal");
	input = input.replace(/serving/gi, "surfing");
	input = input.replace(/severe/gi, "sever");
	input = input.replace(/sexuality/gi, "saxuality");
	input = input.replace(/\bsex\b/gi, "sexx");
	input = input.replace(/shame/gi, "sham");
	input = input.replace(/she's/gi, "shess");
	input = input.replace(/shirt/gi, "shrit");
	input = input.replace(/shocked/gi, "shalked");
	input = input.replace(/shorties/gi, "shoteez");
	input = input.replace(/shrug/gi, "shurg");
	input = input.replace(/sick/gi, "sic");
	input = input.replace(/sign/gi, "sine");
	input = input.replace(/sincere/gi, "sinsear");
	input = input.replace(/since/gi, "seence");
	input = input.replace(/singing/gi, "sining");
	input = input.replace(/singer/gi, "singinger");
	input = input.replace(/\bsing\b/gi, "sinq");
	input = input.replace(/single/gi, "singel");
	input = input.replace(/situation/gi, "sichiation");
	input = input.replace(/skittle/gi, "skittal");
	input = input.replace(/slapping/gi, "slaping");
	input = input.replace(/smack/gi, "smach");
	input = input.replace(/smallest/gi, "samllet");
	input = input.replace(/smell/gi, "smelll");
	input = input.replace(/sneezed/gi, "snessed");
	input = input.replace(/sometimes/gi, "summtimes");
	input = input.replace(/sound/gi, "sond");
	input = input.replace(/\bso\b/gi, "soo");
	input = input.replace(/spare/gi, "spar");
	input = input.replace(/speaking/gi, "spakin");
	input = input.replace(/speak/gi, "spoke");
	input = input.replace(/speechless/gi, "speakless");
	input = input.replace(/spoiler/gi, "spoliper");
	input = input.replace(/sponge/gi, "spounge");
	input = input.replace(/sprain/gi, "spran");
	input = input.replace(/spray/gi, "spry");
	input = input.replace(/spread/gi, "spreed");
	input = input.replace(/start/gi, "strat");
	input = input.replace(/statistic/gi, "statntic");
	input = input.replace(/steal/gi, "still");
	input = input.replace(/stomach/gi, "stumic");
	input = input.replace(/stopped/gi, "stupped");
	input = input.replace(/\bstop\b/gi, "stopp");
	input = input.replace(/streaking/gi, "skreaking");
	input = input.replace(/stripper/gi, "streeper");
	input = input.replace(/subject/gi, "subjecf");
	input = input.replace(/subscription/gi, "subskrichin");
	input = input.replace(/subtitles/gi, "subtittles");
	input = input.replace(/succeed/gi, "sucseed");
	input = input.replace(/success/gi, "sucsess");
	input = input.replace(/sugar/gi, "suger");
	input = input.replace(/suicide/gi, "sewerside");
	input = input.replace(/super/gi, "supa");
	input = input.replace(/suprise/gi, "surprising");
	input = input.replace(/sweet/gi, "sweat");
	input = input.replace(/swinging/gi, "swining");
	input = input.replace(/synchronization/gi, "sycernanation");
	input = input.replace(/synchronized/gi, "sincronised");
	input = input.replace(/syphilis/gi, "sphyils");
	input = input.replace(/\btable\b/gi, "tabel");
	input = input.replace(/take/gi, "takke");
	input = input.replace(/taking/gi, "takeing");
	input = input.replace(/tales/gi, "tails");
	input = input.replace(/talked/gi, "talkt");
	input = input.replace(/talking/gi, "talkiinnq");
	input = input.replace(/tarnation/gi, "tar naction");
	input = input.replace(/tastiest/gi, "tastyist");
	input = input.replace(/teenager/gi, "tennager");
	input = input.replace(/terrorist/gi, "terssiot");
	input = input.replace(/theaters/gi, "theters");
	input = input.replace(/theft/gi, "thet");
	input = input.replace(/them/gi, "dhemm");
	input = input.replace(/then/gi, "than");
	input = input.replace(/theoretical/gi, "therotical");
	input = input.replace(/these/gi, "thesw");
	input = input.replace(/they/gi, "thay");
	input = input.replace(/thinking/gi, "thunking");
	input = input.replace(/third/gi, "3th");
	input = input.replace(/those/gi, "does");
	input = input.replace(/threatening/gi, "tretining");
	input = input.replace(/though/gi, "thowe");
	input = input.replace(/threw/gi, "though");
	input = input.replace(/through/gi, "threw");
	input = input.replace(/throw/gi, "through");
	input = input.replace(/tickets/gi, "tickes");
	input = input.replace(/tiffany/gi, "tiffancy");
	input = input.replace(/tighter/gi, "titer");
	input = input.replace(/timbers/gi, "tembers");
	input = input.replace(/tired/gi, "tried");
	input = input.replace(/titanic/gi, "titaniac");
	input = input.replace(/title/gi, "tital");
	input = input.replace(/tobuscus/gi, "tobyusces");
	input = input.replace(/today/gi, "to day");
	input = input.replace(/tool/gi, "toohl");
	input = input.replace(/touch/gi, "tooch");
	input = input.replace(/tough/gi, "tuff");
	input = input.replace(/traumitized/gi, "tromitized");
	input = input.replace(/treason/gi, "threeson");
	input = input.replace(/treats/gi, "treets");
	input = input.replace(/tragic/gi, "traject");
	input = input.replace(/trolls/gi, "trolles");
	input = input.replace(/\btroll\b/gi, "trool");
	input = input.replace(/troubled/gi, "troubeled");
	input = input.replace(/trust/gi, "thrust");
	input = input.replace(/trying to/gi, "tryna");
	input = input.replace(/trying/gi, "tring");
	input = input.replace(/tube/gi, "tub");
	input = input.replace(/tutorial/gi, "taturiol");
	input = input.replace(/twilight/gi, "twigllight");
	input = input.replace(/type/gi, "typle");
	input = input.replace(/tyrannosaurus/gi, "ti-renosous");
	input = input.replace(/ugly/gi, "agli");
	input = input.replace(/unknown/gi, "unknow");
	input = input.replace(/unlike/gi, "ulike");
	input = input.replace(/until/gi, "till");
	input = input.replace(/youse/gi, "use");
	input = input.replace(/vain/gi, "vane");
	input = input.replace(/volume/gi, "valume");
	input = input.replace(/views/gi, "fews");
	input = input.replace(/viewed/gi, "wieved");
	input = input.replace(/voice/gi, "voise");
	input = input.replace(/wait/gi, "wit");
	input = input.replace(/warm/gi, "worm");
	input = input.replace(/warrior/gi, "warror");
	input = input.replace(/wasting/gi, "basting");
	input = input.replace(/waste of/gi, "wastled");
	input = input.replace(/watched/gi, "wagged");
	input = input.replace(/\bway\b/gi, "wag");
	input = input.replace(/wear/gi, "ware");
	input = input.replace(/week/gi, "wk");
	input = input.replace(/weight/gi, "wait");
	input = input.replace(/well/gi, "weel");
	input = input.replace(/we're/gi, "were");
	input = input.replace(/whack/gi, "whackk");
	input = input.replace(/whatever/gi, "wateva");
	input = input.replace(/wheels/gi, "wheelz");
	input = input.replace(/which/gi, "wich");
	input = input.replace(/whiny/gi, "winny");
	input = input.replace(/whisper/gi, "whsipered");
	input = input.replace(/whores/gi, "whres");
	input = input.replace(/whore/gi, "whoree");
	input = input.replace(/\bwill\b/gi, "wiil");
	input = input.replace(/willow/gi, "willo");
	input = input.replace(/wipe/gi, "wope");
	input = input.replace(/witch/gi, "wich");
	input = input.replace(/with or/gi, "wither");
	input = input.replace(/wonderful/gi, "wndrful");
	input = input.replace(/won't/gi, "wan't");
	input = input.replace(/\bwon\b/gi, "worn");
	input = input.replace(/woof/gi, "wof");
	input = input.replace(/work/gi, "wonk");
	input = input.replace(/world/gi, "work");
	input = input.replace(/wouldn't/gi, "wouldent");
	input = input.replace(/\bwould\b/gi, "wood");
	input = input.replace(/\bwow\b/gi, "whawwwwwww");
	input = input.replace(/wrapper/gi, "raper");
	input = input.replace(/wrapped/gi, "raped");
	input = input.replace(/wrapping/gi, "raping");
	input = input.replace(/y'all/gi, "yalk");
	input = input.replace(/yeah/gi, "yah");
	input = input.replace(/you've/gi, "use");

//2 Possible	input = input.replace(//gi, "");

	if (two === 0) {
		input = input.replace(/accent/gi, "acenst");
		input = input.replace(/accept/gi, "except");
		input = input.replace(/another/gi, "anotherr");
		input = input.replace(/anymore/gi, "enymore");
		input = input.replace(/\bany\b/gi, "anu");
		input = input.replace(/asshole/gi, "asshold");
		input = input.replace(/asymmetric/gi, "uncimetric");
		input = input.replace(/alot/gi, "alout");
		input = input.replace(/atheist/gi, "athiest");
		input = input.replace(/awkward/gi, "ankward");
		input = input.replace(/\bback\b/gi, "bck");
		input = input.replace(/bastard/gi, "bastart");
		input = input.replace(/before/gi, "brfore");
		input = input.replace(/beginning/gi, "begging");
		input = input.replace(/being/gi, "beeing");
		input = input.replace(/believe/gi, "belive");
		input = input.replace(/\bbe\b/gi, "b");
		input = input.replace(/black/gi, "balacj");
		input = input.replace(/block/gi, "blook");
		input = input.replace(/blood/gi, "bloood");
		input = input.replace(/boner/gi, "bonner");
		input = input.replace(/boss/gi, "boos");
		input = input.replace(/brain/gi, "barin");
		input = input.replace(/break/gi, "brack");
		input = input.replace(/breathe/gi, "breet");
		input = input.replace(/broad/gi, "brod");
		input = input.replace(/broke/gi, "borke");
		input = input.replace(/\bbro\b/gi, "bo");
		input = input.replace(/\bby\b/gi, "bi");
		input = input.replace(/ceiling/gi, "cieling");
		input = input.replace(/channel/gi, "canal");
		input = input.replace(/character/gi, "caracther");
		input = input.replace(/children/gi, "childeran");
		input = input.replace(/\bchild\b/gi, "caild");
		input = input.replace(/citizens/gi, "senices");
		input = input.replace(/comedy/gi, "comertry");
		input = input.replace(/come/gi, "cum");
		input = input.replace(/complete/gi, "comepealt");
		input = input.replace(/congrats/gi, "congrate");
		input = input.replace(/convenience/gi, "convenius");
		input = input.replace(/cruel/gi, "cral");
		input = input.replace(/cry/gi, "cray");
		input = input.replace(/damn/gi, "dame");
		input = input.replace(/dead/gi, "ded");
		input = input.replace(/decent/gi, "descend");
		input = input.replace(/didn't/gi, "dident");
		input = input.replace(/difference/gi, "diverence");
		input = input.replace(/dog/gi, "dawg");
		input = input.replace(/do not/gi, "doughnut");
		input = input.replace(/don't/gi, "don,t");
		input =	input.replace(/doesn't/gi, "dose&#39;t");
		input = input.replace(/everybody/gi, "eeverybody");
		input =	input.replace(/\bever\b/gi, "evar");
		input = input.replace(/funny/gi, "funni");
		input = input.replace(/genre/gi, "gender");
		input = input.replace(/getting/gi, "getn");
		input = input.replace(/good/gi, "god");
		input = input.replace(/gorgeous/gi, "goergous");
		input = input.replace(/\bgo\b/gi, "got");
		input = input.replace(/grammar/gi, "grammer");
		input = input.replace(/great/gi, "grea");
		input = input.replace(/grow/gi, "grop");
		input = input.replace(/guys/gi, "guise");
		input = input.replace(/guy/gi, "huy");
		input = input.replace(/harassing/gi, "hrasing");
		input = input.replace(/happy/gi, "hapy");
		input = input.replace(/happened/gi, "hapend");
		input = input.replace(/happen/gi, "happy");
		input = input.replace(/heard/gi, "heared");
		input = input.replace(/height/gi, "hihet");
		input = input.replace(/\bhere\b/gi, "hear");
		input = input.replace(/\bhey\b/gi, "hay");
		input = input.replace(/homophobe/gi, "homofooobbbbbb");
		input = input.replace(/hope/gi, "houp");
		input = input.replace(/horrible/gi, "hoable");
		input = input.replace(/\bhot\b/gi, "hit");
		input = input.replace(/\bhum\b/gi, "ham");
		input = input.replace(/idiot/gi, "idort");
		input = input.replace(/i'm/gi, "um");
		input = input.replace(/incredible/gi, "uncredible");
		input = input.replace(/intelligent/gi, "intailigaient");
		input = input.replace(/interesting/gi, "intersting");
		input = input.replace(/\bjealous\b/gi, "jelious");
		input = input.replace(/kidding/gi, "kitten");
		input = input.replace(/later/gi, "latter");
		input = input.replace(/little/gi, "kittle");
		input = input.replace(/\blose\b/gi, "louse");
		input = input.replace(/\bmake\b/gi, "mak");
		input = input.replace(/making/gi, "makeing");
		input = input.replace(/\bman\b/gi, "mman");
		input = input.replace(/married/gi, "merrid");
		input = input.replace(/massive/gi, "mahoosive");
		input = input.replace(/message/gi, "massege");
		input = input.replace(/massage/gi, "message");
		input = input.replace(/meant/gi, "ment");
		input = input.replace(/metal/gi, "mantel");
		input = input.replace(/more/gi, "moar");
		input = input.replace(/mother/gi, "mutha");
		input = input.replace(/music/gi, "muique");
		input = input.replace(/must/gi, "hust");
		input = input.replace(/obama/gi, "obma");
		input = input.replace(/orgasm/gi, "orgams");
		input = input.replace(/palm/gi, "plam");
		input = input.replace(/patience/gi, "patients");
		input = input.replace(/peace/gi, "piece");
		input = input.replace(/pregnant/gi, "pregnet");
		input = input.replace(/pretty/gi, "pritty");
		input = input.replace(/prophet/gi, "profect");
		input = input.replace(/poison/gi, "poson");
		input = input.replace(/quality/gi, "quelaty");
		input = input.replace(/question/gi, "quesstion");
		input = input.replace(/\breal\b/gi, "reall");
		input = input.replace(/relationship/gi, "realtionship");
		input = input.replace(/religious/gi, "regulus");
		input = input.replace(/remember/gi, "rember");
		input = input.replace(/respect/gi, "respact");
		input = input.replace(/rock/gi, "rick");
		input = input.replace(/seen/gi, "sean");
		input = input.replace(/\bsee\b/gi, "c");
		input = input.replace(/shane/gi, "shaena");
		input = input.replace(/sister/gi, "sishter");
		input = input.replace(/smile/gi, "smyle");
		input = input.replace(/someone/gi, "sum1");
		input = input.replace(/special/gi, "specile");
		input = input.replace(/spelled/gi, "spelt");
		input = input.replace(/steroids/gi, "staroids");
		input = input.replace(/straight/gi, "stragle");
		input = input.replace(/stupidest/gi, "stupdiest");
		input = input.replace(/supposed/gi, "supost");
		input = input.replace(/sure/gi, "sur");
		input = input.replace(/serious/gi, "serous");
		input = input.replace(/\bsome\b/gi, "sumome");
		input = input.replace(/teeth/gi, "teth");
		input = input.replace(/thanks/gi, "thanx");
		input = input.replace(/that's a/gi, "thatsa");
		input = input.replace(/things/gi, "thangs");
		input = input.replace(/\bthink\b/gi, "fink");
		input = input.replace(/thought/gi, "though");
		input = input.replace(/threat/gi, "threath");
		input = input.replace(/together/gi, "2gether");
		input = input.replace(/troopers/gi, "stoper's");
		input = input.replace(/turned/gi, "truned");
		input = input.replace(/under/gi, "uder");
		input = input.replace(/videos/gi, "video&#39;s");
		input = input.replace(/waste/gi, "waist");
		input = input.replace(/walking/gi, "walkign");
		input = input.replace(/watching/gi, "washin");
		input = input.replace(/window/gi, "windo");
		input = input.replace(/where/gi, "whr");
		input = input.replace(/\bwhy\b/gi, "y");
		input = input.replace(/worse/gi, "worster");
		input = input.replace(/your/gi, "ur");
		input = input.replace(/you're/gi, "your");
		input = input.replace(/you'll/gi, "your'll");
    }
	if (two === 1) {
		
		input = input.replace(/accent/gi, "accanct");
		input = input.replace(/accept/gi, "accpet");
		input = input.replace(/another/gi, "anarother");
		input = input.replace(/anymore/gi, "anyome");
		input = input.replace(/\bany\b/gi, "anny");
		input = input.replace(/asshole/gi, "asshloe");
		input = input.replace(/asymmetric/gi, "unsimetric");
		input = input.replace(/alot/gi, "allot");
		input = input.replace(/atheist/gi, "athius");
		input = input.replace(/awkward/gi, "akward");
		input = input.replace(/\bback\b/gi, "bak");
		input = input.replace(/bastard/gi, "basted");
		input = input.replace(/before/gi, "befor");
		input = input.replace(/beginning/gi, "beging");
		input = input.replace(/being/gi, "beaning");
		input = input.replace(/believe/gi, "beleave");
		input = input.replace(/\bbe\b/gi, "bee");
		input = input.replace(/black/gi, "balck");
		input = input.replace(/block/gi, "black");
		input = input.replace(/blood/gi, "blud");
		input = input.replace(/boner/gi, "bones");
		input = input.replace(/boss/gi, "bouse");
		input = input.replace(/brain/gi, "brian");
		input = input.replace(/break/gi, "brake");
		input = input.replace(/breathe/gi, "breath");
		input = input.replace(/broad/gi, "braod");
		input = input.replace(/broke/gi, "brock");
		input = input.replace(/\bbro\b/gi, "bra");
		input = input.replace(/\bby\b/gi, "bye");
		input = input.replace(/ceiling/gi, "cclieng");
		input = input.replace(/channel/gi, "canil");
		input = input.replace(/children/gi, "childern");
		input = input.replace(/\bchild\b/gi, "chield");
		input = input.replace(/citizens/gi, "bitizens");
		input = input.replace(/comedy/gi, "comady");
		input = input.replace(/come/gi, "comr");
		input = input.replace(/complete/gi, "compleet");
		input = input.replace(/congrats/gi, "conrats");
		input = input.replace(/convenience/gi, "convenuine");
		input = input.replace(/cruel/gi, "crualy");
		input = input.replace(/cry/gi, "c rie");
		input = input.replace(/damn/gi, "dam");
		input = input.replace(/dead/gi, "death");
		input = input.replace(/decent/gi, "decant");
		input = input.replace(/didn't/gi, "didant");
		input = input.replace(/difference/gi, "different");
		input = input.replace(/dog/gi, "god");
		input = input.replace(/do not/gi, "donot");
		input = input.replace(/don't/gi, "dnt");
		input = input.replace(/doesn't/gi, "dosent");
		input = input.replace(/everybody/gi, "errbody");
		input = input.replace(/\bever\b/gi, "evr");
		input = input.replace(/funny/gi, "funning");
		input = input.replace(/getting/gi, "getin");
		input = input.replace(/good/gi, "gud");
		input = input.replace(/gorgeous/gi, "gorjust");
		input = input.replace(/\bgo\b/gi, "qo");
		input = input.replace(/grammar/gi, "grandma");
		input = input.replace(/great/gi, "creat");
		input = input.replace(/grow/gi, "qrow");
		input = input.replace(/happy/gi, "ham");
		input = input.replace(/happened/gi, "happend");
		input = input.replace(/\bhappen\b/gi, "hopen");
		input = input.replace(/harassing/gi, "harsing");
		input = input.replace(/heard/gi, "herd");
		input = input.replace(/height/gi, "hight");
		input = input.replace(/\bhere\b/gi, "her");
		input = input.replace(/\bhey\b/gi, "hwy");
		input = input.replace(/homophobe/gi, "homophone");
		input = input.replace(/hope/gi, "hop");
		input = input.replace(/horrible/gi, "horable");
		input = input.replace(/\bhot\b/gi, "hottt");
		input = input.replace(/idiot/gi, "idot");
		input = input.replace(/i'm/gi, "ilm");
		input = input.replace(/incredible/gi, "incrible");
		input = input.replace(/interesting/gi, "interdesting");
		input = input.replace(/\bjealous\b/gi, "jelous");
		input = input.replace(/kidding/gi, "ciding");
		input = input.replace(/later/gi, "laterr");
		input = input.replace(/little/gi, "liitle");
		input = input.replace(/\blose\b/gi, "loose");
		input = input.replace(/\bmake\b/gi, "mece");
		input = input.replace(/making/gi, "macking");
		input = input.replace(/\bman\b/gi, "men");
		input = input.replace(/married/gi, "marred");
		input = input.replace(/massage/gi, "massege");
		input = input.replace(/message/gi, "massage");
		input = input.replace(/meant/gi, "menat");
		input = input.replace(/metal/gi, "mental");
		input = input.replace(/more/gi, "mor");
		input = input.replace(/mother/gi, "moter");
		input = input.replace(/music/gi, "muic");
		input = input.replace(/must/gi, "most");
		input = input.replace(/obama/gi, "obabo");
		input = input.replace(/orgasm/gi, "orangim");
		input = input.replace(/palm/gi, "palme");
		input = input.replace(/patience/gi, "patens");
		input = input.replace(/peace/gi, "pace");
		input = input.replace(/poison/gi, "poisn");
		input = input.replace(/pregnant/gi, "pregnat");
		input = input.replace(/pretty/gi, "prety");
		input = input.replace(/prophet/gi, "profit");
		input = input.replace(/quality/gi, "quility");
		input = input.replace(/question/gi, "cuestion");
		input = input.replace(/\breal\b/gi, "reel");
		input = input.replace(/relationship/gi, "relionship");
		input = input.replace(/religious/gi, "regilous");
		input = input.replace(/remember/gi, "member");
		input = input.replace(/respect/gi, "repscect");
		input = input.replace(/rock/gi, "rook");
		input = input.replace(/special/gi, "spacial");
		input = input.replace(/seen/gi, "sen");
		input = input.replace(/\bsee\b/gi, "she");
		input = input.replace(/serious/gi, "searis");
		input = input.replace(/shane/gi, "shain");
		input = input.replace(/sister/gi, "stither");
		input = input.replace(/smile/gi, "simile");
		input = input.replace(/someone/gi, "some on");
		input = input.replace(/\bsome\b/gi, "sum");
		input = input.replace(/spelled/gi, "speeled");
		input = input.replace(/steroids/gi, "esteroids");
		input = input.replace(/straight/gi, "st8");
		input = input.replace(/stupidest/gi, "stupid tes");
		input = input.replace(/supposed/gi, "suposted");
		input = input.replace(/sure/gi, "shore");
		input = input.replace(/teeth/gi, "theth");
		input = input.replace(/thanks/gi, "tnx");
		input = input.replace(/that's a/gi, "tahta");
		input = input.replace(/things/gi, "finz");
		input = input.replace(/\bthink\b/gi, "thank");
		input = input.replace(/thought/gi, "tho");
		input = input.replace(/threat/gi, "thret");
		input = input.replace(/together/gi, "2geva");
		input = input.replace(/troopers/gi, "stropers");
		input = input.replace(/turned/gi, "terd");
		input = input.replace(/under/gi, "undr");
		input = input.replace(/videos/gi, "vidoas");
		input = input.replace(/waist/gi, "waste");
		input = input.replace(/walking/gi, "wakin");
		input = input.replace(/watching/gi, "wacting");
		input = input.replace(/where/gi, "were");
		input = input.replace(/window/gi, "wondow");
		input = input.replace(/\bwhy\b/gi, "wah");
		input = input.replace(/worse/gi, "whorse");
		input = input.replace(/you're/gi, "yer");
		input = input.replace(/your/gi, "you&#39;re");
		input = input.replace(/you'll/gi, "ull");
    }

//3 Possible	input = input.replace(//gi, "");
	
	

		if (three === 0) {
			input = input.replace(/about/gi, "abote");
			input = input.replace(/\band\b/gi, "nd");
			input = input.replace(/birthday/gi, "birtday");
			input = input.replace(/\bbut\b/gi, "butt");
			input = input.replace(/can't/gi, "kant");
			input = input.replace(/\bcrap\b/gi, "crab");
			input = input.replace(/creeper/gi, "crepper");
			input = input.replace(/disgusting/gi, "discus sting");
			input = input.replace(/\bdoes\b/gi, "doase");
			input = input.replace(/dumbass/gi, "dunbass");
			input = input.replace(/embarass/gi, "ambars");
			input = input.replace(/english/gi, "engish");
			input = input.replace(/feel/gi, "feal");
			input = input.replace(/friend/gi, "ferind");
			input = input.replace(/\bfor\b/gi, "4");
			input = input.replace(/\bget\b/gi, "qet");
			input = input.replace(/hater/gi, "hatter");
			input = input.replace(/hating/gi, "hatin");
			input = input.replace(/impossible/gi, "impocible");
			input = input.replace(/lesbian/gi, "lebzion");
			input = input.replace(/offense/gi, "a fense");
			input = input.replace(/offence/gi, "a fence");
			input = input.replace(/\bpants\b/gi, "panths");
			input = input.replace(/pedophile/gi, "petifile");
			input = input.replace(/\bme\b/gi, "meh");
			input = input.replace(/\bmy\b/gi, "mah");
			input = input.replace(/offense/gi, "a fense");
			input = input.replace(/offence/gi, "a fence");
			input = input.replace(/\bpants\b/gi, "panths");
			input = input.replace(/religion/gi, "religoin");
			input = input.replace(/right/gi, "rite");
			input = input.replace(/school/gi, "skewl");
			input = input.replace(/self/gi, "salf");
			input = input.replace(/should/gi, "shound");
			input = input.replace(/something/gi, "somthin");
			input = input.replace(/terrible/gi, "terrble");
			input = input.replace(/\bthan\b/gi, "dan");
			input = input.replace(/that's/gi, "thas");
			input = input.replace(/time/gi, "tym");
			input = input.replace(/\bto\b/gi, "too");
			input = input.replace(/\bvideo\b/gi, "viedo");
			input = input.replace(/want/gi, "whant");
			input = input.replace(/watch/gi, "watxh");
			input = input.replace(/when/gi, "wen");
			input = input.replace(/whole/gi, "hore");
			input = input.replace(/wrong/gi, "worng");
			
		}
		if (three === 1) {
			input = input.replace(/about/gi, "bout");
			input = input.replace(/\band\b/gi, "n");
			input = input.replace(/birthday/gi, "birtdy");
			input = input.replace(/\bbut\b/gi, "bt");
			input = input.replace(/can't/gi, "cunt");
			input = input.replace(/\bcrap\b/gi, "crrap");
			input = input.replace(/creeper/gi, "creaper");
			input = input.replace(/disgusting/gi, "digesting");
			input = input.replace(/\bdoes\b/gi, "dose");
			input = input.replace(/dumbass/gi, "dumass");
			input = input.replace(/embarass/gi, "embress");
			input = input.replace(/english/gi, "elinglish");
			input = input.replace(/feel/gi, "fell");
			input = input.replace(/\bfor\b/gi, "por");
			input = input.replace(/friend/gi, "freind");
			input = input.replace(/\bget\b/gi, "git");
			input = input.replace(/hater/gi, "hayter");
			input = input.replace(/hating/gi, "hatein&#39;");
			input = input.replace(/impossible/gi, "impissible");
			input = input.replace(/lesbian/gi, "lesibend");
			input = input.replace(/offense/gi, "affense");
			input = input.replace(/offence/gi, "affence");
			input = input.replace(/\bpants\b/gi, "pents");
			input = input.replace(/pedophile/gi, "pedophoile");
			input = input.replace(/offense/gi, "affense");
			input = input.replace(/offence/gi, "affence");
			input = input.replace(/\bpants\b/gi, "pents");
			input = input.replace(/religion/gi, "religon");
			input = input.replace(/right/gi, "write");
			input = input.replace(/school/gi, "scho");
			input = input.replace(/self/gi, "slef");
			input = input.replace(/should/gi, "shld");
			input = input.replace(/something/gi, "somat");
			input = input.replace(/terrible/gi, "terriable");
			input = input.replace(/\bthan\b/gi, "thn");
			input = input.replace(/that's/gi, "thtz");
			input = input.replace(/time/gi, "tim");
			input = input.replace(/\bto\b/gi, "2");
			input = input.replace(/\bvideo\b/gi, "vifeo");
			input = input.replace(/want/gi, "wont");
			input = input.replace(/watch/gi, "wash");
			input = input.replace(/whole/gi, "hold");
			input = input.replace(/when/gi, "whn");
			input = input.replace(/wrong/gi, "rong");
            
		}
		if (three === 2) {
			input = input.replace(/about/gi, "bowt");
			input = input.replace(/\band\b/gi, "ans");
			input = input.replace(/birthday/gi, "brithard");
			input = input.replace(/\bbut\b/gi, "buut");
			input = input.replace(/can't/gi, "come");
			input = input.replace(/\bcrap\b/gi, "carp");
			input = input.replace(/creeper/gi, "crepera");
			input = input.replace(/disgusting/gi, "scustings");
			input = input.replace(/\bdoes\b/gi, "dos");
			input = input.replace(/dumbass/gi, "dumpass");
			input = input.replace(/embarass/gi, "umberac");
			input = input.replace(/english/gi, "engelish");
			input = input.replace(/feel/gi, "fill");
			input = input.replace(/\bfor\b/gi, "forr");
			input = input.replace(/friend/gi, "fredn");
			input = input.replace(/\bget\b/gi, "gat");
			input = input.replace(/hater/gi, "heater");
			input = input.replace(/hating/gi, "hateing");
			input = input.replace(/impossible/gi, "in posable");
			input = input.replace(/lesbian/gi, "lesbin");
			input = input.replace(/offense/gi, "defense");
			input = input.replace(/offence/gi, "defence");
			input = input.replace(/\bpants\b/gi, "pantesed");
			input = input.replace(/pedophile/gi, "pedaphiler");
			input = input.replace(/offense/gi, "defense");
			input = input.replace(/offence/gi, "defence");
			input = input.replace(/\bpants\b/gi, "pantesed");
			input = input.replace(/religion/gi, "real legion");
			input = input.replace(/right/gi, "rigjt");
			input = input.replace(/school/gi, "skool");
			input = input.replace(/self/gi, "selphs");
			input = input.replace(/should/gi, "shud");
			input = input.replace(/something/gi, "sum");
			input = input.replace(/terrible/gi, "tarroble");
			input = input.replace(/\bthan\b/gi, "tham");
			input = input.replace(/that's/gi, "thts");
			input = input.replace(/time/gi, "tume");
			input = input.replace(/\bto\b/gi, "tuh");
			input = input.replace(/\bvideo\b/gi, "videeeo");
			input = input.replace(/want/gi, "wnt");
			input = input.replace(/watch/gi, "wacth");
			input = input.replace(/whole/gi, "hole");
			input = input.replace(/when/gi, "went");
			input = input.replace(/wrong/gi, "wronq");
			
		}
    
//4 Possible	input = input.replace(//gi, "");

			if (four === 0) {
				input = input.replace(/amazing/gi, "amzing");
				input = input.replace(/\bare\b/gi, "r");
				input = input.replace(/because/gi, "cuz");
				input = input.replace(/better/gi, "betr");
				input = input.replace(/bitch/gi, "bich");
				input = input.replace(/comment/gi, "coment");
				input = input.replace(/commit/gi, "comit");
				input = input.replace(/douche/gi, "doushe");
				input = input.replace(/genius/gi, "genies");
				input = input.replace(/\bgirl\b/gi, "gurl");
				input = input.replace(/\bhate\b/gi, "hte");
				input = input.replace(/hungry/gi, "hungary");
				input = input.replace(/laugh/gi, "lugh");
				input = input.replace(/listen/gi, "listion");
				input = input.replace(/\bme\b/gi, "meh");
				input = input.replace(/\bmy\b/gi, "mah");
				input = input.replace(/really/gi, "realy");
				input = input.replace(/scary/gi, "scray");
				input = input.replace(/sense/gi, "seance");
				input = input.replace(/\bsong\b/gi, "snoog");
				input = input.replace(/suck/gi, "sunk");
				input = input.replace(/\bthat\b/gi, "dat");
				input = input.replace(/\bup\b/gi, "upp");
				input = input.replace(/vagina/gi, "virgina");
                
				
			}
			if (four === 1) {
				input = input.replace(/amazing/gi, "amezing");
				input = input.replace(/\bare\b/gi, "or");
				input = input.replace(/because/gi, "cos");
				input = input.replace(/better/gi, "bether");
				input = input.replace(/bitch/gi, "bich");
				input = input.replace(/comment/gi, "commant");
				input = input.replace(/commit/gi, "comet");
				input = input.replace(/douche/gi, "douesh");
				input = input.replace(/genius/gi, "genious");
				input = input.replace(/\bgirl\b/gi, "gyal");
				input = input.replace(/\bhate\b/gi, "haete");
				input = input.replace(/hungry/gi, "hungrey");
				input = input.replace(/laugh/gi, "laugth");
				input = input.replace(/listen/gi, "list");
				input = input.replace(/\bme\b/gi, "mii");
				input = input.replace(/\bmy\b/gi, "myh");
				input = input.replace(/really/gi, "rly");
				input = input.replace(/scary/gi, "sciry");
				input = input.replace(/sense/gi, "sens");
				input = input.replace(/\bsong\b/gi, "sponge");
				input = input.replace(/suck/gi, "suke");
				input = input.replace(/\bthat\b/gi, "tht");
				input = input.replace(/\bup\b/gi, "uhp");
				input = input.replace(/vagina/gi, "vigina");
                
				
			}
			if (four === 2) {
				input = input.replace(/amazing/gi, "amazeing");
				input = input.replace(/\bare\b/gi, "a");
				input = input.replace(/because/gi, "bcuz");
				input = input.replace(/better/gi, "peter");
				input = input.replace(/bitch/gi, "bich");
				input = input.replace(/comment/gi, "commend");
				input = input.replace(/commit/gi, "commite");
				input = input.replace(/douche/gi, "dush");
				input = input.replace(/genius/gi, "genuis");
				input = input.replace(/\bgirl\b/gi, "gril");
				input = input.replace(/\bhate\b/gi, "have");
				input = input.replace(/hungry/gi, "hunfry");
				input = input.replace(/laugh/gi, "laungth");
				input = input.replace(/listen/gi, "listren");
				input = input.replace(/\bme\b/gi, "mr");
				input = input.replace(/\bmy\b/gi, "mind");
				input = input.replace(/really/gi, "relly");
				input = input.replace(/scary/gi, "scariest");
				input = input.replace(/sense/gi, "since");
				input = input.replace(/\bsong\b/gi, "dong");
				input = input.replace(/suck/gi, "such");
				input = input.replace(/\bthat\b/gi, "daf");
				input = input.replace(/\bup\b/gi, "p");
				input = input.replace(/vagina/gi, "veghina");
                
				
			}
			if (four === 3) {
				input = input.replace(/amazing/gi, "amaseing");
				input = input.replace(/\bare\b/gi, "ate");
				input = input.replace(/because/gi, "becouse");
				input = input.replace(/better/gi, "beater");
				input = input.replace(/bitch/gi, "beach");
				input = input.replace(/comment/gi, "commet");
				input = input.replace(/commit/gi, "coconut");
				input = input.replace(/douche/gi, "dutch");
				input = input.replace(/genius/gi, "guineas");
				input = input.replace(/\bgirl\b/gi, "grll");
				input = input.replace(/\bhate\b/gi, "hat");
				input = input.replace(/hungry/gi, "hun gry");
				input = input.replace(/laugh/gi, "laught");
				input = input.replace(/listen/gi, "listin");
				input = input.replace(/\bme\b/gi, "ne");
				input = input.replace(/\bmy\b/gi, "mu");
				input = input.replace(/really/gi, "reallly");
				input = input.replace(/scary/gi, "sceary");
				input = input.replace(/sense/gi, "sence");
				input = input.replace(/\bsong\b/gi, "sing");
				input = input.replace(/suck/gi, "sux");
				input = input.replace(/\bthat\b/gi, "taht");
				input = input.replace(/\bup\b/gi, "ap");
				input = input.replace(/vagina/gi, "vagine");
                
				
			}
    
//5 Possible	input = input.replace(//gi, "");

		if (five === 0) {
                    
			input = input.replace(/awesome/gi, "awome");
			input = input.replace(/\bjust\b/gi, "jus");
			input = input.replace(/\bknow\b/gi, "no");
			input = input.replace(/love/gi, "luv");
			input = input.replace(/nothing/gi, "nun");
			input = input.replace(/please/gi, "plz");
			input = input.replace(/shit/gi, "shirt");
			input = input.replace(/this/gi, "diz");
			input = input.replace(/what/gi, "wat");
			input = input.replace(/with/gi, "wiv");
		}
		if (five === 1) {
			input = input.replace(/awesome/gi, "asome");
			input = input.replace(/\bjust\b/gi, "jsut");
			input = input.replace(/\bknow\b/gi, "now");
			input = input.replace(/love/gi, "lobe");
			input = input.replace(/nothing/gi, "noving");
			input = input.replace(/please/gi, "pleas");
			input = input.replace(/shit/gi, "hit");
			input = input.replace(/this/gi, "dis");
			input = input.replace(/what/gi, "when");
			input = input.replace(/with/gi, "wit");
		}
		if (five === 2) {
                    
			input = input.replace(/awesome/gi, "wasome");
			input = input.replace(/\bjust\b/gi, "juss");
			input = input.replace(/\bknow\b/gi, "noe");
			input = input.replace(/love/gi, "lov");
			input = input.replace(/nothing/gi, "nouin");
			input = input.replace(/please/gi, "ples");
			input = input.replace(/shit/gi, "shyt");
			input = input.replace(/this/gi, "thids");
			input = input.replace(/what/gi, "wt");
			input = input.replace(/with/gi, "whit");
                }
		if (five === 3) {
			input = input.replace(/awesome/gi, "awsome");
			input = input.replace(/\bjust\b/gi, "juz");
			input = input.replace(/\bknow\b/gi, "kno");
			input = input.replace(/love/gi, "live");
			input = input.replace(/nothing/gi, "nottin");
			input = input.replace(/please/gi, "pliz");
			input = input.replace(/shit/gi, "shet");
			input = input.replace(/this/gi, "tis");
			input = input.replace(/what/gi, "want");
			input = input.replace(/with/gi, "wiff");
		}
		if (five === 4) {
			input = input.replace(/awesome/gi, "asosmwe");
			input = input.replace(/\bjust\b/gi, "jst");
			input = input.replace(/\bknow\b/gi, "knowe");
			input = input.replace(/love/gi, ";ove");
			input = input.replace(/nothing/gi, "nthign");
			input = input.replace(/please/gi, "plez");
			input = input.replace(/shit/gi, "sit");
			input = input.replace(/this/gi, "thys");
			input = input.replace(/what/gi, "waht");
			input = input.replace(/with/gi, "whith");
		}
    
//6 Possible	input = input.replace(//gi, "");

			if (six === 0) {
				input = input.replace(/first/gi, "1rd");
				input = input.replace(/fuck/gi, "fuc");
				
				input = input.replace(/\bthe\b/gi, "duh");
			}
			if (six === 1) {
				input = input.replace(/first/gi, "firts");
				input = input.replace(/fuck/gi, "fucke");
				input = input.replace(/\bthe\b/gi, "teh");
			}
			if (six === 2) {
				input = input.replace(/first/gi, "frist");
				input = input.replace(/fuck/gi, "fok");
				input = input.replace(/\bthe\b/gi, "d");
			}
			if (six === 3) {
				input = input.replace(/first/gi, "fisrt");
				input = input.replace(/fuck/gi, "fuk");	
				
				input = input.replace(/\bthe\b/gi, "da");
			}
			if (six === 4) {
				input = input.replace(/first/gi, "fist");
				input = input.replace(/fuck/gi, "fck");	
				
				input = input.replace(/\bthe\b/gi, "thee");
			}
			if (six === 5) {
				input = input.replace(/first/gi, "fiarst");
				input = input.replace(/fuck/gi, "fucck");		
				
				input = input.replace(/\bthe\b/gi, "tha");
			}
    
//7 Possible	input = input.replace(//gi, "");

		if (seven === 0) {
			
			input = input.replace(/people/gi, "ppl");
			input = input.replace(/subscribe/gi, "subsribe");
			input = input.replace(/\byou\b/gi, "u");
		}
		if (seven === 1) {
			
			input = input.replace(/people/gi, "peppl");
			input = input.replace(/subscribe/gi, "subcribe");
			input = input.replace(/people/gi, "peppl");
			input = input.replace(/\byou\b/gi, "ya");
		}
		if (seven === 2) {
			
			input = input.replace(/people/gi, "peole");
			input = input.replace(/subscribe/gi, "subscibe");	
			input = input.replace(/people/gi, "peole");
			input = input.replace(/\byou\b/gi, "yu");
		}
		if (seven === 3) {
			
			input = input.replace(/people/gi, "pepole");
			input = input.replace(/subscribe/gi, "sub crubl");
			input = input.replace(/people/gi, "pepole");
			input = input.replace(/\byou\b/gi, "yuu");
		}
		if (seven === 4) {
			
			input = input.replace(/people/gi, "peapel");
			input = input.replace(/subscribe/gi, "suscribe");
			input = input.replace(/\byou\b/gi, "yhu");
		}
		if (seven === 5) {
			
			input = input.replace(/people/gi, "poeple");
			input = input.replace(/subscribe/gi, "supsuber");
			input = input.replace(/\byou\b/gi, "yew");
		}
		if (seven === 6) {
			
			input = input.replace(/people/gi, "pealpe");
			input = input.replace(/subscribe/gi, "sbruice");
			input = input.replace(/\byou\b/gi, "ye");
		}

//8 Possible	input = input.replace(//gi, "");

			if (eight === 0) {
				input = input.replace(/beautiful/gi, "beatiful");
				input = input.replace(/like/gi, "lkie");
				input = input.replace(/\bthe\b/gi, "duh");
				input = input.replace(/thumb/gi, "thum");
			}
			if (eight === 1) {
				input = input.replace(/beautiful/gi, "beautifal");
				input = input.replace(/like/gi, "liyke");
				input = input.replace(/\bthe\b/gi, "teh");
				input = input.replace(/thumb/gi, "thub");
			}
			if (eight === 2) {
				input = input.replace(/beautiful/gi, "buetiful");
				input = input.replace(/like/gi, "likee");
				input = input.replace(/\bthe\b/gi, "d");
				input = input.replace(/thumb/gi, "dumb");
			}
			if (eight === 3) {
				input = input.replace(/beautiful/gi, "biuthifull");
				input = input.replace(/like/gi, "liek");
				input = input.replace(/\bthe\b/gi, "da");
				input = input.replace(/thumb/gi, "thump");
			}
			if (eight === 4) {
				input = input.replace(/beautiful/gi, "beatifull");
				input = input.replace(/like/gi, "liie");
				input = input.replace(/\bthe\b/gi, "thee");
				input = input.replace(/thumb/gi, "tum");
			}
			if (eight === 5) {
				input = input.replace(/beautiful/gi, "beautifool");
				input = input.replace(/blike/gi, "lik");
				input = input.replace(/\bthe\b/gi, "tha");
				input = input.replace(/thumb/gi, "tup");
			}
			if (eight === 6) {
				input = input.replace(/beautiful/gi, "beautifol");
				input = input.replace(/blike/gi, "lake");
				input = input.replace(/\bthe\b/gi, "tuh");
				input = input.replace(/thumb/gi, "tamb");
			}
			if (eight === 7) {
				input = input.replace(/beautiful/gi, "butifull");
				input = input.replace(/blike/gi, "lyk");
				input = input.replace(/\bthe\b/gi, "t");
				input = input.replace(/thumb/gi, "thuimb");
			}

//9 Possible	input = input.replace(//gi, "");

		if (nine === 0) {
			input = input.replace(/like/gi, "lkie");
			input = input.replace(/retard/gi, "retarded");
		}
		if (nine === 1) {
			input = input.replace(/like/gi, "liyke");
			input = input.replace(/retard/gi, "retad");
		}
		if (nine === 2) {
			input = input.replace(/like/gi, "likee");
			input = input.replace(/retard/gi, "returd");
		}
		if (nine === 3) {
			input = input.replace(/like/gi, "liek");
			input = input.replace(/retard/gi, "retart");
		}
		if (nine === 4) {
			input = input.replace(/like/gi, "liie");
			input = input.replace(/retard/gi, "restart");
		}
		if (nine === 5) {
			input = input.replace(/blike/gi, "lik");
			input = input.replace(/retard/gi, "redard");
		}
		if (nine === 6) {
			input = input.replace(/blike/gi, "lake");
			input = input.replace(/retard/gi, "reatreterd");
		}
		if (nine === 7) {
			input = input.replace(/blike/gi, "lyk");
			input = input.replace(/retard/gi, "reterd");
		}
		if (nine === 8) {
			input = input.replace(/blike/gi, "laike");
			input = input.replace(/retard/gi, "r tard");
		}
//10 Possible	input = input.replace(//gi, "");

			if (ten === 0) {
				input = input.replace(/racist/gi, "racism");
			}
			if (ten === 1) {
				input = input.replace(/racist/gi, "raisist");
			}
			if (ten === 2) {
				input = input.replace(/racist/gi, "rasict");
			}
			if (ten === 3) {
				input = input.replace(/racist/gi, "racialist");
			}
			if (ten === 4) {
				input = input.replace(/racist/gi, "rassist");
			}
			if (ten === 5) {
				input = input.replace(/racist/gi, "rapeist");
			}
			if (ten === 6) {
				input = input.replace(/racist/gi, "raiseist");
			}
			if (ten === 7) {
				input = input.replace(/racist/gi, "rasis");
			}
			if (ten === 8) {
				input = input.replace(/racist/gi, "rasist");
			}
			if (ten === 9) {
				input = input.replace(/racist/gi, "races");
			}

//11 Possible	input = input.replace(//gi, "");

		if (eleven === 0) {
			input = input.replace(/stupid/gi, "stupied");
		}
		if (eleven === 1) {
			input = input.replace(/stupid/gi, "stubed");
		}
		if (eleven === 2) {
			input = input.replace(/stupid/gi, "stuped"); 
		}
		if (eleven === 3) {
			input = input.replace(/stupid/gi, "stubid");
		}
		if (eleven === 4) {
			input = input.replace(/stupid/gi, "stubit");
		}
		if (eleven === 5) {
			input = input.replace(/stupid/gi, "stpud");
		}
		if (eleven === 6) {
			input = input.replace(/stupid/gi, "studid");
		}
		if (eleven === 7) {
			input = input.replace(/stupid/gi, "stuipid");
		}
		if (eleven === 8) {
			input = input.replace(/stupid/gi, "stpuid");
		}
		if (eleven === 9) {
			input = input.replace(/stupid/gi, "sutpid");
		}
		if (eleven === 10) {
			input = input.replace(/stupid/gi, "stubid");
		}
	
//12 Possible 	input = input.replace(//gi, "");
	
			if (twelve === 0) {
				
			}
			if (twelve === 1) {
				
			}
			if (twelve === 2) {
				
			}
			if (twelve === 3) {
				
			}
			if (twelve === 4) {
				
			}
			if (twelve === 5) {
				
			}
			if (twelve === 6) {
				
			}
			if (twelve === 7) {
				
			}
			if (twelve === 8) {
				
			}
			if (twelve === 9) {
				
			}
			if (twelve === 10) {
				
			}
			if (twelve === 11) {
				
			}
			
//13 Possible 	input = input.replace(//gi, "");
	
		if (thirteen === 0) {
			input = input.replace(/hilarious/gi, "hallatious");
		}
		if (thirteen === 1) {
			input = input.replace(/hilarious/gi, "hillarious");
		}
		if (thirteen === 2) {
			input = input.replace(/hilarious/gi, "halours");
		}
		if (thirteen === 3) {
			input = input.replace(/hilarious/gi, "hilleriouse");
		}
		if (thirteen === 4) {
			input = input.replace(/hilarious/gi, "halari");
		}
		if (thirteen === 5) {
			input = input.replace(/hilarious/gi, "halrious");
		}
		if (thirteen === 6) {
			input = input.replace(/hilarious/gi, "heilarious");
		}
		if (thirteen === 7) {
			input = input.replace(/hilarious/gi, "halourious");
		}
		if (thirteen === 8) {
			input = input.replace(/hilarious/gi, "halariuse");
		}
		if (thirteen === 9) {
			input = input.replace(/hilarious/gi, "hallerasese");
		}
		if (thirteen === 10) {
			input = input.replace(/hilarious/gi, "hirrarious");
		}
		if (thirteen === 11) {
			input = input.replace(/hilarious/gi, "harlariouse");
		}
		if (thirteen === 12) {
			input = input.replace(/hilarious/gi, "hulariouse");
		}

// Conflicting Words

	if (four === 0) {
		input = input.replace(/life/gi, "like");
	}
	if (four === 1) {
		input = input.replace(/life/gi, "lift");
	}
	if (four === 2) {
		input = input.replace(/life/gi, "lyf");
	}
	if (four === 3) {
		input = input.replace(/life/gi, "lif");
	}
	
	input = input.replace(/virginia/gi, "vagina");
	
	if (two === 0) {
		input = input.replace(/virgin/gi, "virgine");
	}
	if (two === 1) {
		input = input.replace(/virgin/gi, "vergen");
	}
	
	input = input.replace(/\bcan\b/gi, "kan");
	input = input.replace(/disgust/gi, "descust");
	input = input.replace(/every/gi, "evry");
	input = input.replace(/mean/gi, "meen");
	input = input.replace(/racism/gi, "racistism");
	input = input.replace(/rain/gi, "ray");
	input = input.replace(/reason/gi, "rison");
	input = input.replace(/\bson\b/gi, "song");
	input = input.replace(/whenever/gi, "when never");
	input = input.replace(/write/gi, "right");
	input = input.replace(/wtf/gi, ":a what a fucke?!");
	
//CAPS LOCK MODE
	if (caps) {
		input = input.toUpperCase();
	}
	
	
	
	document.getElementById("output").innerHTML = input;
	
	
	
}

//  input = input.replace(//gi, "");
