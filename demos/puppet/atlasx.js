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

Blockly.Language.atlasx = {
  // Text value.
  category: Blockly.LANG_CATEGORY_ATLASX,
  helpUrl: Blockly.LANG_CATEGORY_ATLASX_HELPURL,
  init: function() {
    this.setColour(360);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
        'media/quote0.png', 12, 12))
        .appendTitle(new Blockly.FieldTextInput(''), 'ATLASX')
        .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
        'media/quote1.png', 12, 12));
    this.setOutput(true, String);
    this.setTooltip(Blockly.LANG_TEXT_ATLASX_TOOLTIP);
  }
};

