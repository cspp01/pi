/**
 * Created by Administrator on 2017/5/11.
 */
function $$(){
    if(arguments.length == 1){
        var cc = arguments[0];
        if(typeof(cc) == 'function'){
            window.onload = cc;
        }else if(typeof(cc) == 'string'){
            if(cc.charAt(0)=='#'){
                return document.getElementById(cc.substr(1));
            }else if(cc.charAt(0) >= 'A' && cc.charAt(0) <= 'Z' || cc.charAt(0) >= 'a' && cc.charAt(0) <= 'z'){
                return document.getElementsByTagName(cc);
            }
        }
    }else if(arguments.length == 2){
        var $doc = arguments[0];
        var docString = arguments[1];
        if(typeof($doc) == 'object' && (docString.charAt(0) == '<' && docString.charAt(docString.length-1) == '>')){
            $doc.innerHTML = $doc.innerHTML+docString;
        }
    }
}
function getStyle($doc,pro){
    return $doc.currentStyle ? $doc.currentStyle[pro] : getComputedStyle($doc)[pro];
}
