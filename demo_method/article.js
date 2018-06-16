/*
* 判断一篇英语文章中出现次数最多的英语单词
*/

function findWord(article) {
    var words = article.split("/[\.|\,|\s|\!]/");
    var max = 0 ;
    var wordCounts = {};
    console.log(words[0]);
    words.map(function (word) {
        if (JSON.stringify(wordCounts) == "{}") {
            wordCounts[word] = 1;
        }
        else {
            for (key in wordCounts) {
                if (key === word) {
                    wordCounts[key]++;
                }
                else {
                    wordCounts[word] = 1;
                }
            }
        }

    });


    for (key in wordCounts) {

        if ( max < wordCounts[key]) {
            max = wordCounts[key];
        }
    }
    console.log(max);
}

var article = "this is a good place,and i like it!";
findWord(article);