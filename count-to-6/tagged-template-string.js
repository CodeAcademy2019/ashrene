
var html = (string,arg1,arg2) => {
    
    if(arg2){
        var res1 = arg2.split(' ');
        var res2 = res1.map(function(x){
            x=x.replace(/&/g,"&amp;");
            x=x.replace(/'/g,"&apos;");
            x=x.replace(/"/g, "&quot;");
            x=x.replace(/</g,"&lt;");
            x=x.replace(/>/g,"&gt;");
            
            return x; 
        }).join(' ');
        return(`<b>${arg1} says</b>: "${res2}"`);
    }
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
//moved this statement here because after making html an es6 fn, o/p - "html is not a function" at line 1

module.exports = html