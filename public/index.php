<!DOCTYPE html>
<html>
<head>
    <title>Code route</title>

    <meta charset="UTF-8"/>
    <meta name="og:title" content="Testez vos connaissances au code de la route" />
    <meta name="og:description" content="Un test de 1 question. Etes vous prêt à relever le défi ?" />
    <meta name="og:image" content="http://www.potiondevie.fr/wp-content/uploads/2013/01/coderoute.jpg" />

    <base href="" />

    <link rel="stylesheet" href="css/style.css"/>
    <script src="js/modernizr.js"></script>
    <script>
        var BASE_URL = ""; // Set base url from server environment
        var enablePushState = false; // Force pushState on server environment
        var isLiked = true;
    </script>
</head>
<body>
<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '879175845425888',
            xfbml      : true,
            version    : 'v2.2'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

</script>
<div id="container">
    <div id="header"></div>
    <div id="content"></div>
    <div id="footer"></div>
</div>

<script src="js/vendor.js"></script>
<script src="js/app.js"></script>
<script>
    require(["main"]);
</script>
</body>
</html>
