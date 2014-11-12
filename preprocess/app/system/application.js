/**
 * Global application object
 */
define('system/application',
    [
        "config/config"
    ],
    function(config){

        // SET APPLICATION BASE URL IF NOT DEFINED IN CONFIG FILE
        // OVERRIDE CONFIG OPTIONS WITH META TAGS
        // OVERRIDE CONFIG OPTIONS WITH META TAGS
        var baseHREF = "";
        var metaPrefix = 'app.config.';

        _.each(document.getElementsByTagName('meta'), function(meta){
            var c;

            if( meta.name.indexOf(metaPrefix) !== -1 ) {

                if( !isNaN(meta.content) ){
                    c = Number(meta.content);
                }else if( meta.content.toLowerCase() === "true"  ){
                    c = true;
                }else if( meta.content.toLowerCase() === "false" ){
                    c = false;
                }else{
                    c = meta.content;
                }

                config[meta.name.replace(metaPrefix, '')] = c;
            }
        });

        if( 'baseURI' in document ){
            baseHREF = document.baseURI;
        }else if( document.getElementsByTagName('base').length ){
            baseHREF = document.getElementsByTagName('base')[0].href;
        }

        if(!config.base_url && baseHREF){
            config.base_url = baseHREF.replace(new RegExp('http(s)?://'+window.location.hostname), '');
        }

        return new Marionette.Application({ channelName: config.globalChannelName });
    });