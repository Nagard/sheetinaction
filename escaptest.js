function myEscape(test) {
    var result = "";
    for (var i = 0; i < test.length; i++)
    {
        var ch = test[i];
        switch (ch)
        {
			 case "\/": ch = "\\/"; break;
            case "\\": ch = "\\\\"; break;
            case "\'": ch = "\\'"; break;
            case "\"": ch = '\\"'; break;
            case "\&": ch = "\\&"; break;
            case "\t": ch = "\\t"; break;
            case "\n": ch = "\\n"; break;
            case "\r": ch = "\\r"; break;
            case "\b": ch = "\\b"; break;
            case "\f": ch = "\\f"; break;
            case "\v": ch = "\\v"; break;
            default: break;
        }

        result += ch;
    }

    return result;
};


var myJSON='<a href="https://www.w3schools.com/bootstrap/w3images/fjords.jpg" target="_blank">';  

console.log(es(myJSON));
