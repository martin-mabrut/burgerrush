function selectOrNot() {
    if (this.classList.contains("selected")) {
        this.classList.remove("selected");
    } else {
        this.classList.add("selected");
    }

    if (this.classList.contains("selected")) {
        if (this.classList.contains("viande")) {
            this.classList.add("viandeSelected");
        }
        if (this.classList.contains("sauce")) {
            this.classList.add("sauceSelected");
        }
        if (this.classList.contains("supplément")) {
            this.classList.add("supplémentSelected");
        }
        if (this.classList.contains("fromage")) {
            this.classList.add("fromageSelected");
        }
        if (this.classList.contains("condiment")) {
            this.classList.add("condimentSelected");
        }
    } else {
        if (this.classList.contains("viande")) {
            this.classList.remove("viandeSelected");
        }
        if (this.classList.contains("sauce")) {
            this.classList.remove("sauceSelected");
        }
        if (this.classList.contains("supplément")) {
            this.classList.remove("supplémentSelected");
        }
        if (this.classList.contains("fromage")) {
            this.classList.remove("fromageSelected");
        }
        if (this.classList.contains("condiment")) {
            this.classList.remove("condimentSelected");
        }
    }
}

export { selectOrNot };
