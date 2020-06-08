function widthRatioCal(element) {
    return parseInt(element.css("width")) / $("html")[0].clientWidth;
}
var ratioMaxMin = 0.2;
var left = $("#left");
left[0].style.width = parseInt(0.6 * $("html")[0].clientWidth) + "px";
var ratio = widthRatioCal(left);
var clientWidth = $("html")[0].clientWidth;
var clientHeight = $("html")[0].clientHeight;

$("#name").disableSelection()
$('#name').css({
    'cursor': 'context-menu',
    'padding': '5px'
});
$("#logo, #name").hover(function () {
    $("#name")[0].innerText = "CodeIt";
}, function () {
    $("#name")[0].innerText = "tIedoC";
});
$('#main-window').css({ 'height': clientHeight - parseInt($("nav").css("height")) + "px" });

left.resizable();
left.resizable({
    handles: 'e, w'
});
left.resizable("option", "maxWidth", clientWidth * (1 - ratioMaxMin));
// left.resizable("option", "minWidth", clientWidth * (ratioMaxMin + 0.1));
left.resizable("option", "minWidth", 500);
// left.on("resizestart", function (event, ui) {

// });
left.on("resize", function (event, ui) {
    onresize();
});
left.on("resizestop", function (event, ui) {
    onresize();
});

var workspace;
function readStringFromFileAtPath(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;
    return returnValue;
}

Blockly.Blocks['a'] = {
    init: function () {
        this.appendValueInput("a1")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["aaa", "0"], ["b", "1"], ["c", "2"]]), "a2");
        this.setColour(130);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['a'] = function (block) {
    var dropdown_a2 = block.getFieldValue('a2');
    var value_a1 = Blockly.JavaScript.valueToCode(block, 'a1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

var toolbox_outerHTML = readStringFromFileAtPath("data/tIedoC/xml/toolbox.xml");
var toolbox_xml = Blockly.Xml.textToDom(toolbox_outerHTML)
workspace = Blockly.inject('blocklyDiv',
    {
        media: 'data/blockly/media/',
        toolbox: toolbox_xml,
        zoom:
        {
            controls: true,
            wheel: false,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        },
        grid:
        {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        trashcan: true
    });

var onresize = function () {
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
onresize();
$(window).resize(function (e) {
    if (e.target == window) {
        var clientWidth = $("html")[0].clientWidth;
        left.resizable("option", "maxWidth", clientWidth * (1 - ratioMaxMin));
        // left.resizable("option", "minWidth", clientWidth * (ratioMaxMin + 0.1));
        var leftWidth = parseInt(ratio * clientWidth);
        if (leftWidth > 500) {
            left.css({ 'width': parseInt(ratio * clientWidth) + "px" });
        } else {
            left.css({ 'width': "500px" });
        }
        onresize();
    } else if (e.target == left[0]) {
        ratio = widthRatioCal(left);
    }
});