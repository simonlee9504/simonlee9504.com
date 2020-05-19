let personalityList = ['a Computer Science student...', 'a Christian...', 'a musician...', ' a movie buff...', 'a globetrotter...'];

async function typing(str, index) {
    var tempLength = document.getElementById('test').innerHTML.length;
    document.getElementById('test').innerHTML += ' ';
    await sleep(100);

    if(index == 0)
        $(".cs-image").fadeIn(1700);
    else if(index == 1)
        $(".cross-image").fadeIn(1700);
    else if(index == 2)
        $(".musician-image").fadeIn(1700);
    else if(index == 3)
        $(".movie-image").fadeIn(1700);
    else if(index == 4)
        $(".travel-image").fadeIn(1700);


    for(var i = 0; i < str.length; i++) {
        document.getElementById('test').innerHTML += str.substring(i, i + 1);
        await sleep(100);
    }

    await sleep(2000);

    if(index == 0)
        setTimeout(() => { $(".cs-image").fadeOut(1000); }, (tempLength/2) * 100);
    else if(index == 1)
        setTimeout(() => { $(".cross-image").fadeOut(1000); }, (tempLength/2) * 100);
    else if(index == 2)
        setTimeout(() => { $(".musician-image").fadeOut(1000); }, (tempLength/2) * 100);
    else if(index == 3)
        setTimeout(() => { $(".movie-image").fadeOut(1000); }, (tempLength/2) * 100);
    else if(index == 4)
        setTimeout(() => { $(".travel-image").fadeOut(1000); }, (tempLength/2) * 100);


    for(var i = tempLength + str.length; i >= tempLength; i--) {
        document.getElementById('test').innerHTML = document.getElementById('test').innerHTML.substring(0, i);
        await sleep(50);
    }
}
 
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeList() {
    for(var i = 0; i < personalityList.length; i++) {
        await typing(personalityList[i], i);
        await sleep(800);
    }
    typeList();
}
