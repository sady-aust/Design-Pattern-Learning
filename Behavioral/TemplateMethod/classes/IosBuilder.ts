import {Builder} from "./Builder";

export class IosBuilder extends Builder {

    assemble() {
        console.log('Assembling the Ios build');
    }

    deploy() {
        console.log('Deploying Ios build to server')
    }

    lint() {
        console.log('Linting Ios code')
    }

    test() {
        console.log('Running IOS Tests')
    }

}
