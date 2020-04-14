export abstract class Builder {
    build() {
        this.test()
        this.lint()
        this.assemble()
        this.deploy()
    }

    abstract test();

    abstract lint();

    abstract assemble();

    abstract deploy();

}
