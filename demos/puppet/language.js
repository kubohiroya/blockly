/**
 * enchantjs blocks for Google Blockly
 * @author shi3z@uei.co.jp
 * Powered by enchant.js
 */
//'use strict';

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

var imagesArray = {'kuma':{file:"space3.png",w:32,h:32},
					'icon':{file:"icon0.gif",w:16,h:16},
					'chara0':{file:"chara0.png",w:32,h:32},
					'chara2':{file:"chara2.png",w:32,h:32},
					'chara3':{file:"chara3.png",w:32,h:32},
					'chara4':{file:"chara4.png",w:32,h:32},
					'chara5':{file:"chara5.png",w:32,h:32},
					'chara6':{file:"chara6.png",w:32,h:32},
					'starship':{file:"starship.png",w:24,h:24},
					'enemy01':{file:"enemy01.png",w:16,h:16},
					'effect0':{file:"effect0.gif",w:16,h:16}
};


// enchant Blocks.
Blockly.LANG_CATEGORY_ENCHANTJS = 'enchant.js';
Blockly.LANG_TEXT_TEXT_HELPURL = 'http://enchantjs.com';
Blockly.LANG_TEXT_TEXT_TOOLTIP_1 = 'A letter, word, or line of text.';
Blockly.LANG_TEXT_PRINT_HELPURL = 'http://enchantjs.com';
Blockly.LANG_TEXT_PRINT_TOOLTIP_1 = 'A letter, word, or line of text.';



Blockly.JavaScript.puppet = function() {
  // Text value.
  var className = Blockly.JavaScript.quote_(this.getTitleValue('TEXT'));
  var image =  imagesArray[this.getTitleValue('OP')];
  Blockly.__InlineMode=false;
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
   Blockly.__InlineMode=false;
 return "Puppet.create("+className+",{ filename:'"+image.file+"'"+
 				",w:"+image.w+",h:"+image.h+", \n behavior:["+branch0+"]\n});";
};


Blockly.JavaScript.run = function() {
  // Print statement.
  var argument0 = this.getTitleValue('TEXT');
      return argument0+";\n";
};

Blockly.JavaScript.behavior = function() {
  // Text value.
  var eventName = this.getTitleValue('OP');
  if(!Blockly.__InlineMode)
		return "'"+eventName+"',";
	else
		return "this.addBehavior('"+ eventName+"');\n";


};

Blockly.JavaScript.Puppet_boolean =function() {
  var str = this.getTitleValue('COND');
//  alert(str);
  return [str,Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.Puppet_booleanCond =function() {
  var str = this.getTitleValue('COND');
//  alert(str);
  return [str,Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.newPuppet = function(){
  var puppetName = this.getTitleValue('TEXT');
  var preInlineMode = Blockly.__InlineMode;
  Blockly.__InlineMode=true;
  var branch0 = Blockly.JavaScript.statementToCode(this, 'OPTION');
  Blockly.__InlineMode=preInlineMode;
  branch0 = branch0.replace(/this\./g,"puppet.");
  return "var puppet = new "+puppetName+"(this.x,this.y);\n"+branch0;
};

Blockly.JavaScript.listener = function() {
  var eventName = this.getTitleValue('OP');
  var preInlineMode = Blockly.__InlineMode;
  Blockly.__InlineMode=true;
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
  Blockly.__InlineMode=preInlineMode;
  
  if(Blockly.__InlineMode)
	 return "this.addEventListener('"+eventName+"',function(event)"+"{ \n"+branch0+"\n});";
  else
	 return "{ "+eventName+" :function(event)"+"{ \n"+branch0+"\n}},";
};

Blockly.JavaScript.option = function() {
  var optionName = this.getTitleValue('OP');
  var val = this.getTitleValue('VALUE');
  if(!Blockly.__InlineMode){
  	if((optionName=='startPin')||(optionName=='interval'))
	 	return "{ sceneStart :function()"+"{ \n this."+optionName+"="+val+"\n}},";
	else
		 return "{ init :function()"+"{ \n this."+optionName+"="+val+"\n}},";
	}else
	 return "this."+ optionName+"="+val+";\n";
	
};
Blockly.JavaScript.collision = function() {
  var className = this.getTitleValue('CLASSNAME');
  var str ="{ init :function()"+"{ \n this.collision = ['"+className+"']; \n}},";
  console.log("--"+this.getTitleValue('HITANDDIE') );
  if(  this.getTitleValue('HITANDDIE') =="true"){
  	str+=" 'hitAndDie',";
  }
  if(this.getTitleValue('SCORE')>0){
  	str+="{ hit :function()"+"{ \n game.score+="+this.getTitleValue('SCORE')+"; \n}},";
  }
  return str;
};


Blockly.JavaScript.stage = function() {
  var backDrop = this.getTitleValue('OP');
  return "BackdropImage='"+backDrop+"';";
};

if (!Blockly.Language) Blockly.Language = {};


var images = [['クマ','kuma'],
					['アイコン','icon'],
					['こども','chara0'],
					['ブタ','chara2'],
					['せんしゃ','chara3'],
					['くるま','chara4'],
					['ナイト','chara5'],
					['モンスター','chara6'],
					['ひこうき','starship'],
					['うちゅうせん','enemy01'],
					['ばくはつ','effect0'],
					];

Blockly.Language.puppet = {
  // Print statement.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(195);
    this.appendDummyInput()
    .appendTitle("パペット ")
    .appendTitle(new Blockly.FieldTextInput('Name'), 'TEXT')
    .appendTitle("がぞう")
    .appendTitle(new Blockly.FieldDropdown(images), 'OP');
    this.appendStatementInput('DO');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_PRINT_TOOLTIP_1);
  }
};


behaviors = [//["クリックして動きを選ぼう",{}],
					['スクリーンにでてくる',"standAlone"],
					['ランダムにでてくる',"randomSetup"],
					['タップしたところへうごく',"tapMove"],
					['タップしたところへスルスルうごく',"tapChase"],
					['タップでラジコンのように動く',"tapRC"],
					['ジグザグX',"zigzagX"],
					['ジグザグY',"zigzagY"],
					['一回だけ当たる',"hitOnce"],
					['消える',"die"],
					['大きくなる',"bigger"],
					['小さくなる',"smaller"],
//					['当たると死ぬ',"hitAndDie"],
//					['当たると得点',"hitAndScore"],
					['上から出てくる',"randomAppearTop"],
					['下から出てくる',"randomAppearBottom"],
					['左から出てくる',"randomAppearLeft"],
					['右から出てくる',"randomAppearRight"],
					['上へうごく',"moveUp"],
					['下へうごく',"moveDown"],
					['左へうごく',"moveLeft"],
					['右へうごく',"moveRight"],
					['ランダムな方向へうごく',"moveRandomDir"],
					['タップしたところへ横だけうごく',"tapMoveX"],
					['タップしたところへスルスル横だけうごく',"tapChaseX"],
					['タップしたところへ縦だけうごく',"tapMoveY"],
					['タップしたところへスルスル縦だけうごく',"tapChaseY"],
　					];

Blockly.Language.behavior = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
    .appendTitle("動き")
    .appendTitle(new Blockly.FieldDropdown(behaviors), 'OP');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};

var optionList = [['フレーム',"frame"],
					['スタート地点',"startPin"],
					['スケールX',"scaleX"],
					['スケールY',"scaleY"],
					['スピード',"speed"],
					['でてくる間隔',"interval"],
					['さいしょにでる数',"initialNumber"],
					];


Blockly.Language.option = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
    .appendTitle(new Blockly.FieldDropdown(optionList), 'OP')
    .appendTitle("= ")
    .appendTitle(new Blockly.FieldTextInput(''), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};

var yesOrNo = [['消えない',"false"],
					['消える',"true"]];


Blockly.Language.collision = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(220);
    this.appendDummyInput()
    .appendTitle("当たる相手")
    .appendTitle(new Blockly.FieldTextInput(''), 'CLASSNAME')
    .appendTitle("当たると")
    .appendTitle(new Blockly.FieldDropdown(yesOrNo), 'HITANDDIE')
    .appendTitle("得点")
    .appendTitle(new Blockly.FieldTextInput('0'), 'SCORE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};


var eventNames = [
	['時間がすすんだ','enterframe'],
	['タップされた','touchend'],
	['画面がタップされた','sceneTouchend'],
	['あたった','hit'],
	['スタート','init'],
	];


Blockly.Language.listener = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
        this.setColour(220);
    this.appendDummyInput()
    .appendTitle(new Blockly.FieldDropdown(eventNames), 'OP')
    .appendTitle("とき");
    this.appendStatementInput(Blockly.NEXT_STATEMENT); 
//    this.appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
//    this.setOutput(true, String);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};

Blockly.Language.Puppet_boolean = {
  // Boolean data type: true and false.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_LOGIC_BOOLEAN_HELPURL,
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
    .appendTitle("条件式")
    .appendTitle(new Blockly.FieldTextInput(''), 'COND');
    this.setOutput(true, Boolean);
  }
};

var condNames = [
	['条件をえらんでください','false'],
	['2コマに一回','this.age%2==1'],
	['4コマに一回','this.age%4==1'],
	['10コマに一回','(this.age%10==1)&&(this.age>10)'],
	['30コマに一回','(this.age%30==1)&&(this.age>30)'],
	['100コマに一回','(this.age%100==1)&&(this.age>100)'],
	['150コマに一回','(this.age%150==1)&&(this.age>150)'],
	['HPが0以上','this.HP>0'],
	['HPが0','this.HP==0']
	];


Blockly.Language.Puppet_booleanCond = {
  // Boolean data type: true and false.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_LOGIC_BOOLEAN_HELPURL,
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
    .appendTitle(new Blockly.FieldDropdown(condNames), 'COND');
    this.setOutput(true, Boolean);
  }
};

Blockly.Language.newPuppet = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
    .appendTitle("パペット出現")
    .appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
    this.appendStatementInput(Blockly.NEXT_STATEMENT);  //'OPTION'
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};

Blockly.Language.run = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
    .appendTitle("じっこう")
    .appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};
/*
Blockly.Language.behavirDescriptor = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_TEXT_HELPURL,
  init: function() {
    this.setColour(290);
    this.appendTitle("動きを定義");
    this.appendTitle(new Blockly.FieldTextInput(''), 'TEXT');
   this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_TEXT_TOOLTIP_1);
  }
};
*/

var bgNames = [
	['背景を選んで下さい','false'],
	['ビーチ','beach.png'],
	['さばく','desert.png'],
	['空','sky.png'],
	['ハリウッド','hollywood.png'],
	['日蝕','eclipse.png'],
	['宇宙','spacebg.png']
	];



Blockly.Language.stage = {
  // Print statement.
  category: Blockly.LANG_CATEGORY_ENCHANTJS,
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(40);
    this.appendDummyInput()
    .appendTitle("ステージ ")
    .appendTitle(new Blockly.FieldDropdown(bgNames), 'OP');
  }
};

function init() {

      Blockly.inject(document.body, {path: '../../'});

      if (window.parent.init) {
        // Let the top-level application know that Blockly is ready.
        window.parent.init(Blockly);
      } else {
        // Attempt to diagnose the problem.
        var msg = 'Error: Unable to communicate between frames.\n\n';
        if (window.parent == window) {
          msg += 'Try loading index.html instead of frame.html';
        } else if (window.location.protocol == 'file:') {
          msg += 'This may be due to a security restriction preventing\n' +
              'access when using the file:// protocol.\n' +
              'http://code.google.com/p/chromium/issues/detail?id=47416';
        }
        alert(msg);
      }
}
