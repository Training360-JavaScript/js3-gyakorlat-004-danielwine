
const checkVisa = (cardId) => {
    const pattern = /^4\d{15}$/;
    return cardId.match(pattern) ? true : false;
}

// console.log(checkVisa('4937394237451022'));

export default checkVisa;
