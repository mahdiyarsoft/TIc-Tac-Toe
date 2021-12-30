(() => {
    const pos: NodeListOf<Element> = document.querySelectorAll('.row');
    let option: string = "O";

    pos.forEach(pos => pos.addEventListener("click", () => {
        CHECKoption();
        if (pos.innerHTML == "") {
            const x = document.createElement("h1");
            pos.appendChild(x); x.classList.add(`${option}-item`); x.innerHTML = option;
        };
        function CHECKoption() {
            if (option == "X") {
                option = "O";
            } else {
                option = "X";
            };
        };
        CHECKwin();
    }));

    function CHECKwin() {
        if (pos[0].innerHTML == pos[1].innerHTML && pos[2].innerHTML == pos[1].innerHTML && pos[0].innerHTML !== "" && pos[1].innerHTML !== "" && pos[2].innerHTML !== "") {
            win(0, 1, 2);

        }
        if (pos[3].innerHTML == pos[4].innerHTML && pos[5].innerHTML == pos[4].innerHTML && pos[3].innerHTML !== "" && pos[4].innerHTML !== "" && pos[5].innerHTML !== "") {
            win(3, 4, 5);

        }
        if (pos[6].innerHTML == pos[7].innerHTML && pos[8].innerHTML == pos[7].innerHTML && pos[6].innerHTML !== "" && pos[7].innerHTML !== "" && pos[8].innerHTML !== "") {
            win(6, 7, 8)
        }
        if (pos[0].innerHTML == pos[3].innerHTML && pos[6].innerHTML == pos[3].innerHTML && pos[0].innerHTML !== "" && pos[3].innerHTML !== "" && pos[6].innerHTML !== "") {
            win(0, 3, 6)
        }
        // ////
        if (pos[1].innerHTML == pos[4].innerHTML && pos[7].innerHTML == pos[4].innerHTML && pos[1].innerHTML !== "" && pos[4].innerHTML !== "" && pos[7].innerHTML !== "") {
            win(1, 4, 7)
        }
        if (pos[2].innerHTML == pos[5].innerHTML && pos[8].innerHTML == pos[5].innerHTML && pos[2].innerHTML !== "" && pos[5].innerHTML !== "" && pos[8].innerHTML !== "") {
            win(2, 5, 8)
        }
        if (pos[0].innerHTML == pos[4].innerHTML && pos[8].innerHTML == pos[4].innerHTML && pos[0].innerHTML !== "" && pos[4].innerHTML !== "" && pos[8].innerHTML !== "") {
            win(0, 4, 8)
        }
        if (pos[2].innerHTML == pos[4].innerHTML && pos[6].innerHTML == pos[4].innerHTML && pos[2].innerHTML !== "" && pos[4].innerHTML !== "" && pos[6].innerHTML !== "") {
            win(2, 4, 6)
        }
        
        if (pos[0].innerHTML!==""&&pos[1].innerHTML!==""&&pos[2].innerHTML!==""&&pos[3].innerHTML!==""&&pos[4].innerHTML!==""&&pos[5].innerHTML!==""&&pos[6].innerHTML!==""&&pos[7].innerHTML!==""&&pos[8].innerHTML!=="") {
           alert("The end")            
        }
    }
    function win(x1: number, x2: number, x3: number) {
        pos[x1].classList.add("win");
        pos[x2].classList.add("win");
        pos[x3].classList.add("win");
        var winnerOption = pos[x3].childNodes[0].innerHTML;

        console.log(winnerOption);

        let x = document.createElement("div");
        let y = document.createElement("h1");
        let t = document.createElement("button");
        document.body.appendChild(x);
        x.classList.add("end");

        function whoWin(winnerOption: any) {
            y.innerHTML = `${winnerOption} Win :)`;
        }
        whoWin(winnerOption);
        t.addEventListener("click", reset);
        const end = <HTMLDivElement>document.querySelector('.end');
        end.appendChild(y);
        end.appendChild(t);
        function reset() {
            window.location.reload();
        }
    }
})();