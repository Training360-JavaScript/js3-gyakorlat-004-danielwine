
const checkMac = (MAC) => {
    const pattern = /^([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}$/;
    return MAC.match(pattern) ? true : false;
}

// console.log(checkMac('6f:18:95:11:c3:0f'));

export default checkMac;
