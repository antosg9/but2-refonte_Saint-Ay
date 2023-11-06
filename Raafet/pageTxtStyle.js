//g�n�ration du style  pageTxtStyle	 par h�ritage ou fabrication  
	//var debugJs=true;

function windowWidth() {
	var w = window.innerWidth ;
	if (w==0) w = window.outerWidth ;
	return w ;
}
function windowHeight() {
	var w = window.innerHeight ;
	if (w==0) w = window.outerHeight ;
	return w ;
}

if (typeof debugJs==='undefined') eval("var debugJs=false ;");
if (typeof decim2==='undefined') { eval("function decim2(n){return Math.round(100*n)/100 ;}") ; }
if(debugJs) {alert (document.URL+"\nsetPageTxtStyle.js") ;}
var txtFontSize = 20 ;	// default
var txt2Factor = 1 ;
var defaultPageTxtStyleJs = 
'"<style id=pageTxtStyle>\\n" + ' + 
'".menu {font-size: "+ decim2(txtFontSize*2) +"px}\\n" + ' +
'".hdr  {font-size: "+ decim2(txtFontSize*1.5) +"px}\\n" + ' +
'".txt  {font-size: "+ decim2(txtFontSize) +"px}\\n" + ' +
'".txt2 {font-size: "+ decim2(txtFontSize*txt2Factor) +"px}\\n" + ' +
'".note {font-size: "+ decim2(txtFontSize*0.6) +"px}\\n" + ' +
'"</style>";' ;
if(debugJs) {alert(document.URL+"\ndefaultPageTxtPageJs\n"+defaultPageTxtStyleJs) ; }
if(debugJs) alert(document.URL+"\neval(defaultPageTxtStyleJs)\n"+eval(defaultPageTxtStyleJs) ) ;
var windowOpener = window.opener ;	// if no opener exists :  undefined in IE, null in other browsers
if(debugJs) {alert(document.URL+"\nwindowOpener "+windowOpener ) ; }
var windowOpenerExists = windowOpener!==undefined && windowOpener!==null ;
if (windowOpenerExists) windowOpenerExists = document.URL != windowOpener.document.URL ;
if (windowOpenerExists) { 
	if(debugJs) alert(document.URL+"\nwindowOpener   windowOpener.document.URL\n"+windowOpener.document.URL) ;
	if(windowOpener.document.getElementById('pageTxtStyle')!==null) {
		if(debugJs) {alert (document.URL+"\nwindowOpener source\n"+windowOpener.URL) ; }                      
		var openerPageTxtStyle = windowOpener.document.getElementById('pageTxtStyle').outerHTML ;
		if(debugJs) {alert(document.URL+"\ndocument.write  openerPageTxtStyle \n\n"+openerPageTxtStyle) ;	}
		document.write (openerPageTxtStyle) ;
		if(debugJs) {alert(document.URL+"\npageTxtStyle \n\n"+document.getElementById("pageTxtStyle").outerHTML) ; }
	}
}	
else {								   
	if(debugJs) {alert (document.URL+"\ncalculating from screen/window") ;	}
	txtFontSize = screen.width/50 ;									   
	if(debugJs) {alert(document.URL+"\nwindow.innerWidth "+window.innerWidth+"   windowWidth "+windowWidth() ) ; }
	if(debugJs) {alert(document.URL+"\nscreenWidth "+screen.width+" /50= "+txtFontSize+
		"\nwindowWidth "+windowWidth()+" /50= "+windowWidth()/50) ;	}
	var onloadPageTxtStyleJs ="";
	if (windowWidth()===undefined) { 
		onloadPageTxtStyleJs = 
			'txtFontSize=windowWidth()/50);'+
			'if(debugJs) {alert("onload\nwindowWidth "+window.innerWidth+" //50= "+txtFontSize);}'+
			'document.getElementById("pageTxtStyle").outerHTML = eval(defaultPageTxtStyleJs) ;' ;
		if(debugJs) {alert(document.URL+"\nwindowWidth "+windowWidth()+"\n"+onloadPageTxtStyleJs) ;	}
	}
	else {
		txtFontSize = windowWidth() / 50 ;
		if(debugJs) {alert(document.URL+"\ntxtFontSize "+txtFontSize+"\n\n"+defaultPageTxtStyleJs+"\n\n"+eval(defaultPageTxtStyleJs) ) ; }
	}
	if(debugJs) {alert(document.url+"\ndocument.write\n"+eval(defaultPageTxtStyleJs)) ;} 
	document.write (eval(defaultPageTxtStyleJs)) ;
	if(debugJs) {alert(document.URL+"\npageTxtStyle \n\n"+document.getElementById("pageTxtStyle").outerHTML) ; }
}
var categorySelect = document.getElementById('categorySelect');
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var filteredResults = document.getElementById('filteredResults');
var categoryContents = document.querySelectorAll('.category-content');

searchButton.addEventListener('click', function () {
    var selectedCategoryId = categorySelect.value;
    var searchQuery = searchInput.value.toLowerCase();

    // Masquer toutes les catégories
    categoryContents.forEach(function (categoryContent) {
        categoryContent.style.display = 'none';
    });

    // Afficher la catégorie sélectionnée qui correspond à la recherche
    var selectedCategoryContent = document.querySelector('.category-content[data-category="' + selectedCategoryId + '"]');
    
    if (selectedCategoryContent) {
        var contentText = selectedCategoryContent.textContent.toLowerCase();
        if (contentText.includes(searchQuery) || searchQuery === "") {
            selectedCategoryContent.style.display = 'block';
        }
    }
});

// Appelez l'événement de changement de sélection pour afficher la catégorie par défaut (Métiers d'art)
categorySelect.dispatchEvent(new Event('change'));
