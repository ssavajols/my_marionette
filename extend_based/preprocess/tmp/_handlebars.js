this["hbsTemplate"] = this["hbsTemplate"] || {};

this["hbsTemplate"]["application/component/sample/view/templates/templates"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div>template hbs 1</div>\n<div class=\"with-helper\">"
    + escapeExpression(((helpers.uppercase || (depth0 && depth0.uppercase) || helperMissing).call(depth0, (depth0 != null ? depth0.message : depth0), {"name":"uppercase","hash":{},"data":data})))
    + "</div>";
},"useData":true});



this["hbsTemplate"]["application/component/sample/view/templates/templates2"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});