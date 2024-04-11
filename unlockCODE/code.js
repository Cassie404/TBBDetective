var Acode = document.getElementById('code');
var submit = document.getElementById('submit');


submit.onclick = function () {
    switch (Acode.value.toLowerCase().trim()) {
        case 'gotoisekai':
            location.replace("https://cassie404.github.io/tbbdetective.github.io/Day1/index.html");
            alert("Day1");
            break;
        case 'w0rlds':
            location.replace("https://cassie404.github.io/tbbdetective.github.io/isekaiDay2/index.html");
            alert("Day2");
            break;
        case 'gr1mmr':

            break;
        case 'r3v3rs':

            break;
        case 'ch4os7':

            break;
        case 'f4nt4s':

            break;
        case 'myth0s':

            break;
        case 'leg3nd':

            break;
        case 'kn1ght':

            break;
        case 'qu3st':

            break;
        case 'dr3ams':

            break;
        default:
            alert("請輸入正確的code：）可從公會冒險餐點中取得~");
    }
}
