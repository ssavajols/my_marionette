window.twigTemplate = window.twigTemplate || {};
window.twigTemplate["subdir/tpl"] = Twig.twig({ data: [{"type":"raw","value":"<span>ABC</span>\nhhh ho ho ho\n<hr/>\n<a href=\"#\" class=\"action\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"message","match":["message"]}]},{"type":"raw","value":"</a>"}] });
window.twigTemplate["test-2"] = Twig.twig({ data: [{"type":"raw","value":"<div>blabla "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"message","match":["message"]}]},{"type":"raw","value":" test</div>\n<hr/>\n<br/>\nHAHAHA\n<br/>"}] });
window.twigTemplate["test"] = Twig.twig({ data: [{"type":"raw","value":"<div></div>"}] });
