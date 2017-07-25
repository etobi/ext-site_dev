page = PAGE
page {
	headerData {
		10 = TEXT
		10.value (
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
		)
	}

	10 = COA
	10 {
		10 = TEXT
		10.value (
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">{GLOBAL:TYPO3_CONF_VARS|SYS|sitename}</a>
		</div>
		)
		10.value.insertData = 1

		20 = HMENU
		20 {
			entryLevel = 0
			1 = TMENU
			1.NO = 1
			1.NO.allWrap = <li>|</li>
			1.ACT = 1
			1.ACT.allWrap = <li class="active">|</li>

			1.wrap = <ul class="nav navbar-nav">|</ul>
			wrap = <div id="navbar" class="collapse navbar-collapse">|</div>
		}
		wrap (
			<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				|
			</div></nav>
		)
	}

	100 < styles.content.get
	100.wrap = <div class="container">|</div>

	900 = TEXT
	900.value (
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	)
}