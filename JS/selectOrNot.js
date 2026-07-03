function selectOrNot() {
    if (this.classList.contains("selected")) {
        this.classList.remove("selected");
    } else {
        this.classList.add("selected");
    }

    if (this.classList.contains("selected")) {
        if (this.classList.contains("viande")) {
            this.classList.add("viandeSelected");
            document.querySelector(".contenu-burger").appendChild(this);
        }
        if (this.classList.contains("sauce")) {
            this.classList.add("sauceSelected");
            document.querySelector(".contenu-burger").appendChild(this);
        }
        if (this.classList.contains("supplément")) {
            this.classList.add("supplémentSelected");
            document.querySelector(".contenu-burger").appendChild(this);
        }
        if (this.classList.contains("fromage")) {
            this.classList.add("fromageSelected");
            document.querySelector(".contenu-burger").appendChild(this);
        }
        if (this.classList.contains("condiment")) {
            this.classList.add("condimentSelected");
            document.querySelector(".contenu-burger").appendChild(this);
        }
    } else {
        if (this.classList.contains("viande")) {
            this.classList.remove("viandeSelected");
            document.querySelector(".ingredients").appendChild(this);
        }
        if (this.classList.contains("sauce")) {
            this.classList.remove("sauceSelected");
            document.querySelector(".ingredients").appendChild(this);
        }
        if (this.classList.contains("supplément")) {
            this.classList.remove("supplémentSelected");
            document.querySelector(".ingredients").appendChild(this);
        }
        if (this.classList.contains("fromage")) {
            this.classList.remove("fromageSelected");
            document.querySelector(".ingredients").appendChild(this);
        }
        if (this.classList.contains("condiment")) {
            this.classList.remove("condimentSelected");
            document.querySelector(".ingredients").appendChild(this);
        }
    }
}

export { selectOrNot };
