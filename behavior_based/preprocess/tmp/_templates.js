window.twigTemplates = window.twigTemplates || {};
window.twigTemplates["subdir/tpl"] = Twig.twig({ data: [{"type":"raw","value":"<span>ABC</span>\nhhh ho ho ho\n<hr/>\n<a href=\"#\" class=\"action\">"},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"message","match":["message"]}]},{"type":"raw","value":"</a>"}] });
window.twigTemplates["test-2"] = Twig.twig({ data: [{"type":"raw","value":"<div>blabla "},{"type":"output","stack":[{"type":"Twig.expression.type.variable","value":"message","match":["message"]}]},{"type":"raw","value":" test</div>\n<hr/>\n<br/>\nHAHAHA\n<br/>"}] });
window.twigTemplates["test"] = Twig.twig({ data: [{"type":"raw","value":"<div></div>"}] });
