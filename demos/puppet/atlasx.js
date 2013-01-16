/**
 * Visual Blocks Language
 *
 * Copyright 2013 Hiroya Kubo.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview AtlasX blocks for Blockly.
 * @author hiroya@cuc.ac.jp (Hiroya Kubo)
 */
'use strict';
Blockly.LANG_CATEGORY_ATLASX = 'アトラスX';
Blockly.LANG_CATEGORY_ATLASX_HELPURL = '';
Blockly.LANG_CATEGORY_ATLASX_TOOLTIP = 'アトラスX';

if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.atlasx = {
  category: Blockly.LANG_CATEGORY_ATLASX,
  helpUrl: Blockly.LANG_CATEGORY_ATLASX_HELPURL
};


Blockly.Language.atlasx_message = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ATLASX,
  helpUrl: Blockly.LANG_CATEGORY_ATLASX_HELPURL,
  init: function() {
    this.setColour(360);
    this.appendDummyInput()
    .appendTitle("台詞")
    .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_ATLASX_TOOLTIP);
  }
};

Blockly.JavaScript.atrasx_message = function() {
  var message = this.getTitleValue('TEXT');
  var str ="台詞('"+message.replace("'","\\'")+"');";
  return str;
};


var scene_branches = [['A','A'],
              ['B','B'],
              ];

Blockly.Language.atlasx_option = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ATLASX,
  helpUrl: Blockly.LANG_CATEGORY_ATLASX_HELPURL,
  init: function() {
    this.setColour(360);
    this.appendDummyInput()
    .appendTitle("選択肢")
    .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
    .appendTitle(new Blockly.FieldDropdown(scene_branches), 'OP');
    this.setMutator(new Blockly.Mutator(['option_label','option_label_command']));//TODO
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_TEXT_ATLASX_TOOLTIP);
  }
};

Blockly.JavaScript.atrasx_option = function() {
  var message = this.getTitleValue('TEXT');
  var option = this.getTitleValue('OP');
  var command = '';//TODO
  if(){
      return "選択肢('"+message.replace("'","\\'")+"', "+option+');';
  }else{
      return "選択肢('"+message.replace("'","\\'")+"', "+option+','+command+');';
  }

};

# プロローグ=function(){}をデフォルトに

台詞("HTMLタグが使える");
次へ(関数を参照する変数);
一時停止();
選択肢("選択肢名",関数を参照する変数);
選択肢("選択肢名",関数を参照する変数,フラグ操作);

game.end(スコア,表示メッセージ);

画像("ファイル名");


シーンの呼び出しをするとき、選択肢名が引数となる



