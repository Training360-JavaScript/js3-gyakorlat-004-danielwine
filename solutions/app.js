
import checkVisa from "./visa"
import checkIP from "./ip"
import checkMac from "./mac"

const checker = {
    rules: {
        checkVisa,
        checkIP,
        checkMac
    },
    validate(text, patternType) {
        switch (patternType) {
            case 'visa':
                return this.rules.checkVisa(text)
                break;
            case 'ip':
                return this.rules.checkIP(text)
                break;
            case 'mac':
                return this.rules.checkMac(text)
                break;
        }
    }
}

export default checker;
