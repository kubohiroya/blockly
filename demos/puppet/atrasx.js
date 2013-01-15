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


// atlasx Blocks.
Blockly.LANG_CATEGORY_ATLASX = 'AtlasX';
Blockly.LANG_TEXT_TEXT_HELPURL = '';
Blockly.LANG_TEXT_TEXT_TOOLTIP_1 = 'A letter, word, or line of text.';
Blockly.LANG_TEXT_PRINT_HELPURL = '';
Blockly.LANG_TEXT_PRINT_TOOLTIP_1 = 'A letter, word, or line of text.';




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
