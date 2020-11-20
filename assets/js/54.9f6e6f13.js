(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{405:function(s,t,a){s.exports=a.p+"assets/img/4.16462ada.png"},588:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-整体流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-整体流程"}},[s._v("#")]),s._v(" 1. 整体流程")]),s._v(" "),n("p",[s._v("上篇文章中我们说了，在模板解析阶段主要做的工作是把用户在"),n("code",[s._v("<template></template>")]),s._v("标签内写的模板使用正则等方式解析成抽象语法树（"),n("code",[s._v("AST")]),s._v("）。而这一阶段在源码中对应解析器（"),n("code",[s._v("parser")]),s._v("）模块。")]),s._v(" "),n("p",[s._v("解析器，顾名思义，就是把用户所写的模板根据一定的解析规则解析出有效的信息，最后用这些信息形成"),n("code",[s._v("AST")]),s._v("。我们知道在"),n("code",[s._v("<template></template>")]),s._v("模板内，除了有常规的"),n("code",[s._v("HTML")]),s._v("标签外，用户还会一些文本信息以及在文本信息中包含过滤器。而这些不同的内容在解析起来肯定需要不同的解析规则，所以解析器不可能只有一个，它应该除了有解析常规"),n("code",[s._v("HTML")]),s._v("的HTML解析器，还应该有解析文本的文本解析器以及解析文本中如果包含过滤器的过滤器解析器。")]),s._v(" "),n("p",[s._v("另外，文本信息和标签属性信息却又是存在于HTML标签之内的，所以在解析整个模板的时候它的流程应该是这样子的：HTML解析器是主线，先用HTML解析器进行解析整个模板，在解析过程中如果碰到文本内容，那就调用文本解析器来解析文本，如果碰到文本中包含过滤器那就调用过滤器解析器来解析。如下图所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(405),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"_2-回到源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-回到源码"}},[s._v("#")]),s._v(" 2. 回到源码")]),s._v(" "),n("p",[s._v("解析器的源码位于"),n("code",[s._v("/src/complier/parser")]),s._v("文件夹下，其主线代码如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码位置：/src/complier/parser/index.js")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Convert HTML string to AST.\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseHTML")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    expectHTML"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("expectHTML"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    isUnaryTag"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isUnaryTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    canBeLeftOpenTag"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("canBeLeftOpenTag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    shouldDecodeNewlines"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shouldDecodeNewlines"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    shouldDecodeNewlinesForHref"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shouldDecodeNewlinesForHref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    shouldKeepComment"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("comments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" attrs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unary")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("end")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chars")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("comment")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("p",[s._v("从上面代码中可以看到，"),n("code",[s._v("parse")]),s._v(" 函数就是解析器的主函数，在"),n("code",[s._v("parse")]),s._v(" 函数内调用了"),n("code",[s._v("parseHTML")]),s._v(" 函数对模板字符串进行解析，在"),n("code",[s._v("parseHTML")]),s._v(" 函数解析模板字符串的过程中，如果遇到文本信息，就会调用文本解析器"),n("code",[s._v("parseText")]),s._v("函数进行文本解析；如果遇到文本中包含过滤器，就会调用过滤器解析器"),n("code",[s._v("parseFilters")]),s._v("函数进行解析。")]),s._v(" "),n("h2",{attrs:{id:"_3-总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-总结"}},[s._v("#")]),s._v(" 3. 总结")]),s._v(" "),n("p",[s._v("本篇文章主要梳理了模板解析的整体运行流程，模板解析其实就是根据被解析内容的特点使用正则等方式将有效信息解析提取出来，根据解析内容的不同分为HTML解析器，文本解析器和过滤器解析器。而文本信息与过滤器信息又存在于HTML标签中，所以在解析器主线函数"),n("code",[s._v("parse")]),s._v("中先调用HTML解析器"),n("code",[s._v("parseHTML")]),s._v(" 函数对模板字符串进行解析，如果在解析过程中遇到文本或过滤器信息则再调用相应的解析器进行解析，最终完成对整个模板字符串的解析。")]),s._v(" "),n("p",[s._v("了解了模板解析阶段的整体运行流程后，接下来，我们就对流程中所涉及到的三种解析器分别深入分析，逐个击破。")])])}),[],!1,null,null,null);t.default=e.exports}}]);