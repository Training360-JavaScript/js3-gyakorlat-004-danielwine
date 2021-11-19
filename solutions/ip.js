
const checkIP = (IP) => {
    const pattern = /^((\d\d?|1\d\d|2([0-4]\d|5[0-5]))\.){3}(\d\d?|1\d\d|2([0-4]\d|5[0-5]))$/;
    return IP.match(pattern) ? true : false;
}

// console.log(checkIP('255.0.100.89'));

export default checkIP;
