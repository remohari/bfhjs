function Char(value) {
    this.value = value;
}

Char.prototype.getValue = function () {
    return this.value;
}

function SingleLineChar(value, string) {
    this.string = string;
    Char.call(this, value);
}

function MultiLineChar(value, line) {
    this.line = line;
    Char.call(this, value);
}

SingleLineChar.prototype = Object.create(Char.prototype);
MultiLineChar.prototype = Object.create(Char.prototype);
SingleLineChar.prototype.constructor = SingleLineChar;
MultiLineChar.prototype.constructor = MultiLineChar;

function Font(name, chars, lineHeigt = 1) {
    this.name = name;
    this.lineHeigt = lineHeigt;
    this.alphabet = {}; //oder wenn nicht von Object erben soll Object.create(null);
    chars.forEach(c => this.alphabet[c.value] = c.string); //mit function hätte das this als parameter mitgegeben werden müssen oder mit bind(this)
}


Font.prototype.render = function (text) {
    var lineArray = []
    text = text.toLowerCase();
    var textArray = text.split("");
    var linelength = textArray.length / this.lineHeigt;
    var lineText = "";
    for (i = 0; i < textArray.length; i++) {
        if (linelength > 1) {
            lineText += this.alphabet[textArray[i]];
            linelength--;
            continue;
        }
        lineText += this.alphabet[textArray[i]];
        lineArray.push(lineText);
        lineText = "";
        this.linelength = textArray.length / this.lineHeigt;
    }
    return lineArray;
};

Font.prototype.write = function (text, to) {
    debugger;
    if (to === undefined) {
        var renderText = this.render(text);
        if (Array.isArray(renderText)) {
            renderText.forEach(line => console.log(line));
        }
        else {
            console.log(renderText);
        }
    } else {
        to(this.render(text));
    }
};

// Test single Line
var alphabetString =
    "a=.-;b=-...;c=-.-.;d=-..;e=.;f=..-;g=--.;h=....;i=..;j=.---;k=-.-;l=.-..;" +
    "m=--;n=-.;o=---;p=.---.;q=--.-;r=.-.;s=...;t=-;u=..-;v=...-;w=.--;x=-..-;" +
    "y=-.-;z=--..; =//;.=.-.-.-;,=--..--;?=..--..;!=-.-.--";

var alphabetString = alphabetString.split(';');
var morseAlphabet = alphabetString.map(item => new SingleLineChar(item.split('=')[0], item.split('=')[1]));
var singleLineFont = new Font("morse", morseAlphabet);

singleLineFont.write("hallo");

var alphabetString = ' @@ @ @ @ @ @ @ @ @ @ @ @ @@@A@@ ______ @ / \\ @/$$$$$$ |@$$ |__$$ |@$$ $$ |@$$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@B@@ _______ @/ \\ @$$$$$$$ |@$$ |__$$ |@$$ $$< @$$$$$$$ |@$$ |__$$ |@$$ $$/ @$$$$$$$/ @ @ @ @@@C@@ ______ @ / \\ @/$$$$$$ |@$$ | $$/ @$$ | @$$ | __ @$$ \\__/ |@$$ $$/ @ $$$$$$/ @ @ @ @@@D@@ _______ @/ \\ @$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$ |__$$ |@$$ $$/ @$$$$$$$/ @ @ @ @@@E@@ ________ @/ |@$$$$$$$$/ @$$ |__ @$$ | @$$$$$/ @$$ |_____ @$$ |@$$$$$$$$/ @ @ @ @@@F@@ ________ @/ |@$$$$$$$$/ @$$ |__ @$$ | @$$$$$/ @$$ | @$$ | @$$/ @ @ @ @@@G@@ ______ @ / \\ @/$$$$$$ |@$$ | _$$/ @$$ |/ |@$$ |$$$$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@H@@ __ __ @/ | / |@$$ | $$ |@$$ |__$$ |@$$ $$ |@$$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@I@@ ______ @/ |@$$$$$$/ @ $$ | @ $$ | @ $$ | @ _$$ |_ @/ $$ |@$$$$$$/ @ @ @ @@@J@@ _____ @ / |@ $$$$$ |@ $$ |@ __ $$ |@/ | $$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@K@@ __ __ @/ | / |@$$ | /$$/ @$$ |/$$/ @$$ $$< @$$$$$ \\ @$$ |$$ \\ @$$ | $$ |@$$/ $$/ @ @ @ @@@L@@ __ @/ | @$$ | @$$ | @$$ | @$$ | @$$ |_____ @$$ |@$$$$$$$$/ @ @ @ @@@M@@ __ __ @/ \\ / |@$$ \\ /$$ |@$$$ \\ /$$$ |@$$$$ /$$$$ |@$$ $$ $$/$$ |@$$ |$$$/ $$ |@$$ | $/ $$ |@$$/ $$/ @ @ @ @@@N@@ __ __ @/ \\ / |@$$ \\ $$ |@$$$ \\$$ |@$$$$ $$ |@$$ $$ $$ |@$$ |$$$$ |@$$ | $$$ |@$$/ $$/ @ @ @ @@@O@@ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@P@@ _______ @/ \\ @$$$$$$$ |@$$ |__$$ |@$$ $$/ @$$$$$$$/ @$$ | @$$ | @$$/ @ @ @ @@@Q@@ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ | $$ |@$$ |_ $$ |@$$ / \\$$ |@$$ $$ $$< @ $$$$$$ |@ $$$/ @ @ @@@R@@ _______ @/ \\ @$$$$$$$ |@$$ |__$$ |@$$ $$< @$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@S@@ ______ @ / \\ @/$$$$$$ |@$$ \\__$$/ @$$ \\ @ $$$$$$ |@/ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@T@@ ________ @/ |@$$$$$$$$/ @ $$ | @ $$ | @ $$ | @ $$ | @ $$ | @ $$/ @ @ @ @@@U@@ __ __ @/ | / |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@V@@ __ __ @/ | / |@$$ | $$ |@$$ | $$ |@$$ \\ /$$/ @ $$ /$$/ @ $$ $$/ @ $$$/ @ $/ @ @ @ @@@W@@ __ __ @/ | _ / |@$$ | / \\ $$ |@$$ |/$ \\$$ |@$$ /$$$ $$ |@$$ $$/$$ $$ |@$$$$/ $$$$ |@$$$/ $$$ |@$$/ $$/ @ @ @ @@@X@@ __ __ @/ | / |@$$ | $$ |@$$ \\/$$/ @ $$ $$< @ $$$$ \\ @ $$ /$$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@Y@@ __ __ @/ \\ / |@$$ \\ /$$/ @ $$ \\/$$/ @ $$ $$/ @ $$$$/ @ $$ | @ $$ | @ $$/ @ @ @ @@@Z@@ ________ @/ |@$$$$$$$$/ @ /$$/ @ /$$/ @ /$$/ @ /$$/____ @/$$ |@$$$$$$$$/ @ @ @ @@@a@@ @ @ ______ @ / \\ @ $$$$$$ |@ / $$ |@/$$$$$$$ |@$$ $$ |@ $$$$$$$/ @ @ @ @@@b@@ __ @/ | @$$ |____ @$$ \\ @$$$$$$$ |@$$ | $$ |@$$ |__$$ |@$$ $$/ @$$$$$$$/ @ @ @ @@@c@@ @ @ _______ @ / |@/$$$$$$$/ @$$ | @$$ \\_____ @$$ |@ $$$$$$$/ @ @ @ @@@d@@ __ @ / |@ ____$$ |@ / $$ |@/$$$$$$$ |@$$ | $$ |@$$ \\__$$ |@$$ $$ |@ $$$$$$$/ @ @ @ @@@e@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ $$ |@$$$$$$$$/ @$$ |@ $$$$$$$/ @ @ @ @@@f@@ ______ @ / \\ @/$$$$$$ |@$$ |_ $$/ @$$ | @$$$$/ @$$ | @$$ | @$$/ @ @ @ @@@g@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ \\__$$ |@$$ $$ |@ $$$$$$$ |@/ \\__$$ |@$$ $$/ @ $$$$$$/ @@@h@@ __ @/ | @$$ |____ @$$ \\ @$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@i@@ __ @/ |@$$/ @/ |@$$ |@$$ |@$$ |@$$ |@$$/ @ @ @ @@@j@@ @ @ __ @ / |@ $$/ @ / |@ $$ |@ $$ |@ __ $$ |@/ \\__$$ |@$$ $$/ @ $$$$$$/ @@@k@@ __ @/ | @$$ | __ @$$ | / |@$$ |_/$$/ @$$ $$< @$$$$$$ \\ @$$ | $$ |@$$/ $$/ @ @ @ @@@l@@ __ @/ |@$$ |@$$ |@$$ |@$$ |@$$ |@$$ |@$$/ @ @ @ @@@m@@ @ @ _____ ____ @/ \\/ \\ @$$$$$$ $$$$ |@$$ | $$ | $$ |@$$ | $$ | $$ |@$$ | $$ | $$ |@$$/ $$/ $$/ @ @ @ @@@n@@ @ @ _______ @/ \\ @$$$$$$$ |@$$ | $$ |@$$ | $$ |@$$ | $$ |@$$/ $$/ @ @ @ @@@o@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@p@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ |__$$ |@$$ $$/ @$$$$$$$/ @$$ | @$$ | @$$/ @@@q@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ | $$ |@$$ \\__$$ |@$$ $$ |@ $$$$$$$ |@ $$ |@ $$ |@ $$/ @@@r@@ @ @ ______ @ / \\ @/$$$$$$ |@$$ | $$/ @$$ | @$$ | @$$/ @ @ @ @@@s@@ @ @ _______ @ / |@/$$$$$$$/ @$$ \\ @ $$$$$$ |@/ $$/ @$$$$$$$/ @ @ @ @@@t@@ __ @ / | @ _$$ |_ @/ $$ | @$$$$$$/ @ $$ | __ @ $$ |/ |@ $$ $$/ @ $$$$/ @ @ @ @@@u@@ @ @ __ __ @/ | / |@$$ | $$ |@$$ | $$ |@$$ \\__$$ |@$$ $$/ @ $$$$$$/ @ @ @ @@@v@@ @ @ __ __ @/ \\ / |@$$ \\ /$$/ @ $$ /$$/ @ $$ $$/ @ $$$/ @ $/ @ @ @ @@@w@@ @ @ __ __ __ @/ | / | / |@$$ | $$ | $$ |@$$ | $$ | $$ |@$$ \\_$$ \\_$$ |@$$ $$ $$/ @ $$$$$/$$$$/ @ @ @ @@@x@@ @ @ __ __ @/ \\ / |@$$ \\/$$/ @ $$ $$< @ /$$$$ \\ @/$$/ $$ |@$$/ $$/ @ @ @ @@@y@@ @ @ __ __ @/ | / |@$$ | $$ |@$$ | $$ |@$$ \\__$$ |@$$ $$ |@ $$$$$$$ |@/ \\__$$ |@$$ $$/ @ $$$$$$/ @@@z@@ @ @ ________ @/ |@$$$$$$$$/ @ / $$/ @ /$$$$/__ @/$$ |@$$$$$$$$/ @ @ @ @@@.@@ @ @ @ @ @ @ __ @/ |@$$/ @ @ @ @@@!@@ __ @/ |@$$ |@$$ |@$$ |@$$/ @ __ @/ |@$$/ @ @ @ @@@?@@ ____ @ / \\ @/$$$$ |@$$ $$ |@ /$$/ @ /$$/ @ $$/ @ / | @ $$/ @ @ @ @@@';
