// Задание 1
// Реализовать класс, описывающий окружность. В классе долж-
// ны быть следующие компоненты:
// ■■ поле, хранящее радиус окружности;
// ■■ get-свойство, возвращающее радиус окружности;
// ■■ set-свойство, устанавливающее радиус окружности;
// ■■ get-свойство, возвращающее диаметр окружности;
// ■■ метод, вычисляющий площадь окружности;
// ■■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Circle {
    constructor() {
        this.radius = 0;
    }

    get getRadius() {
        return this.radius
    }

    set setRadius(r) {
        this.radius = r
    }
    get getDiameter() {
        return this.radius * 2
    }

    circleArea() {
        return this.radius * this.radius * Math.PI
    }
    circlePerimeter() {
        return 2 * this.radius * Math.PI
    }

}

const circle = new Circle();
function getRadius() {
    p4a.value = circle.getRadius
}
function setRadius(r) {
    circle.setRadius = r
}
function getDiameter() {
    p4a.value = circle.getDiameter
}
function circleArea() {
    p4a.value = circle.circleArea()
}
function circlePerimeter() {
    p4a.value = circle.circlePerimeter()
}












//-------------------------------------------------------------------------------------------------------
// Задание 2.
// Задание 2
// Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■■ название тега;
// ■■ самозакрывающийся тег или нет;
// ■■ текстовое содержимое;
// ■■ массив атрибутов;
// ■■ массив стилей;
// ■■ массив вложенных таких же тегов;

// ■■ метод для установки атрибута;
// ■■ метод для установки стиля;

// ■■ метод для добавления вложенного элемента в конец теку-
// щего элемента;

// ■■ метод для добавления вложенного элемента в начало те-
// кущего элемента;

// ■■ метод getHtml(), который возвращает html код в виде
// строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок
// и добавить его на страницу с помощью document.write().

class HtmlElement {
    constructor(name, tag, text) {
        this.name = name,
            this.tag = tag,
            this.text = text,
            this.atributes = "",
            this.styles = [],
            this.tagsArray = []
    }

    setAtribute(x) {
        this.atributes = x
    }
    setStyle(x) {
        this.styles = x.split(";")
    }
    setAppendEnd(x) {
        this.tagsArray.push(x)
    }

    setAppendStart(x) {
        this.tagsArray.unshift(x)
    }
    // <div class="space" style="text-align:center;">

    getHtml() {
        let res = "<" + this.name
        if (this.atributes != "") {
            res += " " + this.atributes
        }
        if (this.styles.length != 0) {
            res += " style=\"" + this.styles.join(";") + "\""
        }
        if (this.tag == false) {
            res += ">"
            res += this.text
            for (let value of this.tagsArray) {
                res += value.getHtml()
            }
            res += "</" + this.name + ">"
        } else {
            res += "/>"
        }

        return res;
    }
}
const htmlObj = new HtmlElement("div", false, "")
htmlObj.setAtribute("id=\"wrapper\"")
htmlObj.setStyle("display:flex;")
const div1 = new HtmlElement("div", false, "")
div1.setStyle("width:300px;margin: 10px;")
const h3 = new HtmlElement("h3", false, "What is Lorem Ipsum?")
const img = new HtmlElement("img", true, "")
img.setAtribute("src=\"./bg/depositphotos_43436675-stock-illustration-icon-design-element.jpg\" alt = \"Lorem Ipsum\"")
const p = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry\." +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took" +
    " a galley of type and scrambled it to make a type specimen book.")
p.setStyle("text-align: justify;")
const a = new HtmlElement("a", false, "More...")
a.setAtribute("href=\"https:\/\/www.lipsum.com/\"")
p.setAppendEnd(a)
div1.setAppendEnd(h3)
div1.setAppendEnd(img)
div1.setAppendEnd(p)
const div2 = new HtmlElement("div", false, "")
div2.setStyle("width: 300px; margin: lOpx;")
const h3b = new HtmlElement("h3", false, "What is Lorem Ipsum?")
div2.setAppendEnd(h3b)
div2.setAppendEnd(img)
div2.setAppendEnd(p)
htmlObj.setAppendEnd(div1)
htmlObj.setAppendEnd(div2)
// alert(htmlObj.getHtml())
function show() {
    out.innerHTML = htmlObj.getHtml()
}



// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■■ название css класса;
// ■■ массив стилей;
// ■■ метод для установки стиля;
// ■■ метод для удаления стиля;
// ■■ метод getCss(), который возвращает css код в виде стро-
// ки.

class CssClass {
    constructor(name) {
        this.name = name,
            this.styles = []
    }
    setStyle(x) {
        this.styles = x.split(";")
    }
    removeStyle(x) {
        for (i = 0; i < this.styles.length; i++) {
            if (this.styles[i] == x) {
                this.styles.splice(i, 1)
            }
        }
    }
    getCss() {
        let r = "";
        if (this.name == "") {
            return ""
        } else {
            r += "." + this.name + "{"
        }
        r += this.styles.join(";")
        r += "}"
        return r
    }
}
const css = new CssClass("wrap")
css.setStyle("display:flex;")
const css2 = new CssClass("block")
css2.setStyle("width:300px;margin:10px")
const css3 = new CssClass("img")
css3.setStyle("width:100%;")
const css4 = new CssClass("text")
css4.setStyle("text-align:justify;")
// alert(css.getCss())
function showCss() {
    out3.innerHTML = css.getCss() + "<br>" +
        css2.getCss() + "<br>" + css3.getCss() + "<br>" + css4.getCss()
}



// Реализовать класс, описывающий блок html документ.
// Класс HtmlBlock должен содержать внутри себя:
// ■■ коллекцию стилей, описанных с помощью класса CssClass;
// ■■ корневой элемент, описанный с помощью класса
// HtmlElement;
// ■■ метод getCode(), который возвращает строку с html ко-
// дом (сначала теги style с описанием всех классов, а потом
// все html содержимое из корневого тега и его вложенных
// элементов).
// С помощью написанных классов реализовать следующий блок
// (см. рис. 2) и добавить его на страницу с помощью document.write().

class HtmlBlock {
    constructor(css, element) {
        this.listCss = css,
            this.coreElement = element
    }
    getCode() {
        let r = "<style>"
        for (let value of this.listCss) {
            r += value.getCss()
        }
        r += "</style>"
        r += this.coreElement.getHtml()
        return r
    }
}
const arrCss = [css, css2, css3, css4]
const block = new HtmlBlock(arrCss, htmlObj)
// alert(block.getCode())

function showBlock() {
    out4.innerHTML = css.getCss() + "<br>" +
    css2.getCss() + "<br>" + css3.getCss() + "<br>" + css4.getCss() + block.getCode()
}



