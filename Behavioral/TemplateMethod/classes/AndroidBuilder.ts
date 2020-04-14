import {Builder} from "./Builder";

export class AndroidBuilder extends Builder {

    assemble() {
        console.log('Assembling the android build');
    }

    deploy() {
        console.log('Deploying android build to server')
    }

    lint() {
        console.log('Linting Android code')
    }

    test() {
        console.log('Running Android Tests')
    }

}
