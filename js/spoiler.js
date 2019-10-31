class Spoiler {
    constructor(spoiler) {
        this.spoiler = spoiler;
        this.spoilerHeader = spoiler.childNodes[1];
        this.spoilerContent = spoiler.childNodes[3];
        this.opened = "opened";
        this.closed = "closed";
        this.openEvent = new Event(this.opened, {bubbles: true});
        this.closeEvent = new Event(this.closed, {bubbles: true});
        this.spoiler.addEventListener(this.opened, this.onOpen.bind(this));
        this.spoiler.addEventListener(this.closed, this.onClosed.bind(this));
        this.spoilerHeader.addEventListener("click", this.changeState.bind(this));
    }

    changeState() {
        if (this.spoiler.dataset.state === this.opened) {
            this.closeSpoiler();
        } else if (this.spoiler.dataset.state === this.closed) {
            this.openSpoiler();
        }
    }

    openSpoiler() {
        this.spoilerHeader.dispatchEvent(this.openEvent);
    }

    closeSpoiler() {
        this.spoilerHeader.dispatchEvent(this.closeEvent);
    }

    onOpen() {
        this.spoiler.dataset.state = this.opened;
    }

    onClosed() {
        this.spoiler.dataset.state = this.closed;
    }
}

for (let i = 0; i < document.getElementsByClassName("spoiler").length; i++)
    new Spoiler(document.getElementsByClassName("spoiler")[i]);
