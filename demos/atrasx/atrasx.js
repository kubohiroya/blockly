/**
 * Blockly Demo: AtrasX
 *
 * Copyright 2013 Hiroya Kubo
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
 * @fileoverview Demonstration of Blockly: AtrasX
 * @author hiroya@cuc.ac.jp (Hiroya Kubo)
 */
'use strict';

if ('BlocklyStorage' in window) {
  BlocklyStorage.DISCARD_WARNING = 'Delete all "%1" blocks?';
  BlocklyStorage.HTTPREQUEST_ERROR = 'There was a problem with the request.\n';
  BlocklyStorage.LINK_ALERT = 'Share your blocks with this link:\n\n';
  BlocklyStorage.HASH_ERROR = 'Sorry, "%1" doesn\'t correspond with any saved Blockly file.';
  BlocklyStorage.XML_ERROR = 'Could not load your saved file.\n'+
      'Perhaps it was created with a different version of Blockly?\nXML: ';
}

/**
 * Create a namespace for the application.
 */
var AtrasX = {};

/**
 * CONST
 */
AtrasX.CONST_DUMMY = 150;

