// 어떤 다른 함수에 매개변수로 함수를 넘겨주는
const checkMood = (mood, goodCallback, badCallback) => {
    if (mood === 'good') {
        goodCallback();
    } else {
        badCallback();
    }
};

const cry = () => {
    console.log('ACTION :: CRY');
};

const sing = () => {
    console.log('ACTION :: SING');
};
const dacne = () => {
    console.log('ACTION :: DANCE');
};

checkMood('sad', sing, cry);

//

console.log(helloB());
//함수표현식
let helloA = function () {
    return '안녕하세요';
};
//함수선언식
function helloB() {
    return '안녕하세요 여러분##';
}
// 1. 함수선언식은 프로그램 실행 전에 코드 최상단으로 끌어 올려진다 -> hoisting
// 2. 함수표현식은 hoisting이 되지 않는다
//     해당 함수가 선언되기 전에는 접근이 불가능
//     즉, helloA()라는 함수를 호출하고 싶다면 선언 이후에 호출해야 한다
//      ex) console.log(helloA())
//          let helloA = function () { }... -> X
