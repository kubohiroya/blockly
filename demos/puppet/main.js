//子供達にもっとプログラミングの楽しさをわかりやすく伝えたい!
//puppet.enchant.js開発途中バージョンです
enchant();

//劇場をつくる
Puppet.Theatre.create();

recv=function(code){
	Puppet.clear();
	eval(code);
        if(BackdropImage){
        	var bdi = new Sprite(320,320);
        	bdi.image = game.assets[BackdropImage];
    	    backdrop.addChild(bdi);
        }
	game.score=0;
				var listeners =enchant.Puppet.sceneStartEventListener
				for(var i in listeners){
					listeners[i].func.call(window["___"+listeners[i].puppetName+"_definition"]);
				}
	console.log(window["___りんご_definition"]);
	return "yes!";
}