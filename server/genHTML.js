export const genHTML = () => (
`<!doctype html>
<html>
<head>
    <title>Dibbs | Student Platform</title>
    <meta name="description" content="">

    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-title" content="Dibbs | Student Platform">
    <meta name='apple-mobile-web-app-capable' content='yes'>
    <meta name="apple-itunes-app" content="app-id=1080189334">

    <link rel="icon" href="data:;base64,=">

    ${process.env.NODE_ENV == 'production' ? `

    <script>window.env = {'NODE_ENV': 'production'}</script>

    <script src="/jspm_packages/system.js"></script>
    <script defer src="/config.js"></script>
    <link rel="stylesheet" href="/build/app.css">
    <script defer src="/build/bundle.js"></script>

    ` : `

    <script>window.env = {'NODE_ENV': 'development'}</script>
    <script src="jspm_packages/system.js"></script>
    <script defer src="config.js"></script>
    <script defer src="/build/dev-bundle.js"></script>

    `}
</head>
<body>
    <div id="root">
    </div>

    <script type="text/javascript" charset="utf-8">
    window.onload = function() {
        
    ${process.env.NODE_ENV == 'production' ? `
		System.import('dibbs/web/web.js')

        ` : `

        var server = 'http://' + window.location.hostname + ':' + (window.location.port == '' ? '80' : window.location.port)
	    System.trace = true
	    System.import('app.css!')
        System.import('capaj/systemjs-hot-reloader').then(function (HotReloader) { new HotReloader.default(server)}).then(function () {
		    System.import('app/app.js')
        });

    `}
    }
    </script>
</body>
</html>
`)
