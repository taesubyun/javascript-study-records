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
