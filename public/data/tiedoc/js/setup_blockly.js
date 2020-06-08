var workspace;
function readStringFromFileAtPath(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;
    return returnValue;
}

window.addEventListener('DOMContentLoaded', (event) => {
    Blockly.Blocks['a'] = {
        init: function() {
            //console.log("yesss");
            this.appendValueInput("a1")
                .setCheck(null)
                .appendField(new Blockly.FieldDropdown([["aaa","0"], ["b","1"], ["c","2"]]), "a2");
            this.setColour(130);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['a'] = function(block) {
        var dropdown_a2 = block.getFieldValue('a2');
        var value_a1 = Blockly.JavaScript.valueToCode(block, 'a1', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n';
        return code;
    };
    var onresize = function(e) {
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(workspace);
    };
    var toolbox_outerHTML = readStringFromFileAtPath("data/tIedoC/xml/toolbox.xml");
    var toolbox_xml = Blockly.Xml.textToDom(toolbox_outerHTML)
    workspace = Blockly.inject('blocklyDiv',
                               {media: 'data/blockly/media/',
                                toolbox: toolbox_xml,
                                zoom:
                                {controls: true,
                                 wheel: false,
                                 startScale: 1.0,
                                 maxScale: 3,
                                 minScale: 0.3,
                                 scaleSpeed: 1.2},
                                grid:
                                {spacing: 20,
                                 length: 3,
                                 colour: '#ccc',
                                 snap: true},
                                trashcan: true});
    window.addEventListener('resize', onresize, true);
    onresize();
    Blockly.svgResize(workspace);
});




