/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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


var Puppet = {};

/**
 * PID of animation task currently executing.
 */
Puppet.pid = 0;

/**
 * Initialize Blockly and the puppet.  Called on page load.
 * @param {!Blockly} blockly Instance of Blockly from iframe.
 */
Puppet.init = function(blockly) {
  window.Blockly = blockly;

  // Add to reserved word list: API, local variables in execution evironment
  // (execute) and the infinite loop detection function.
  // Blockly.JavaScript.addReservedWords('Puppet');

  window.onbeforeunload = function() {
    if (Blockly.mainWorkspace.getAllBlocks().length > 1) {
      return 'Leaving this page will result in the loss of your work.';
    }
    return null;
  };

  if (!('BlocklyStorage' in window)) {
    document.getElementById('linkButton').className = 'disabled';
  }

  // An href with #key trigers an AJAX call to retrieve saved blocks.
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else { // Load the editor with starting blocks.
    var xml = Blockly.Xml.textToDom(
        '<xml>' +
        '  <block type="puppet" x="85" y="100"></block>' +
        '</xml>');
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  }

  Puppet.reset();
};

Puppet.reset = function(){

  // Kill any task.
  if (Puppet.pid) {
    window.clearTimeout(Puppet.pid);
  }
  Puppet.pid = 0;
};

/**
 * Execute the user's code.  Heaven help us...
 */
Puppet.execute = function() {

  // Turtle.path now contains a transcript of all the user's actions.
  // Reset the graphic and animate the transcript.
  Puppet.reset();
  Puppet.pid = window.setTimeout(Puppet.animate, 100);
};

