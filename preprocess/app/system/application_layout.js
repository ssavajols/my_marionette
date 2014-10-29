define('system/application_layout',
    [
        "system/core/ma_layout"
    ],
    function(MA_layout){

    var Layout = MA_layout.extend({
        initialize: function(){
            this.addRegions({
                modal: "#modal"
            });

            this.$el.append('<div id="modal"></div>');
        }
    });

    return Layout;
});