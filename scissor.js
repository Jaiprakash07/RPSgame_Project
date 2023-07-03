const parent = document.querySelector('.parent')
const child1 = document.querySelector('.child1')
const child2 = document.querySelector('.child2')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const para1 = document.querySelector('.para1')
const para2 = document.querySelector('.para2')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const result = document.querySelector('.result')

const box = document.querySelectorAll('.box')
// console.log(child2);
let x = 0;
let y = 0;
for (item of box) {
    item.addEventListener('click', game)

    function game(e) {
        let comp1 = computer('rock', 'paper', 'scissor');
        if (e.target === first && comp1 === 'rock') {
            first.style.backgroundColor = 'aqua';
            one.style.backgroundColor = 'aqua';
            setTimeout(rock, 5000)
            function rock() {
                first.style.backgroundColor = 'transparent';
                one.style.backgroundColor = 'transparent';
            }
            result.innerHTML = '!Draw';
            console.log('!Draw');
            console.log(comp1, ' ', e.target)
        }

        else if (e.target === second && comp1 === 'paper') {
            second.style.backgroundColor = 'aqua';
            two.style.backgroundColor = 'aqua';
            setTimeout(paper, 5000)
            function paper() {
                second.style.backgroundColor = 'transparent';
                two.style.backgroundColor = 'transparent';
            }
            result.innerHTML = '!Draw';
            console.log('!Draw');
            console.log(comp1, ' ', e.target)

        }

        else if (e.target === third && comp1 === 'scissor') {
            third.style.backgroundColor = 'aqua';
            three.style.backgroundColor = 'aqua';
            setTimeout(scissor, 5000)
            function scissor() {
                third.style.backgroundColor = 'transparent';
                three.style.backgroundColor = 'transparent';
            }
            result.innerHTML = '!Draw';
            console.log('!Draw');
            console.log(comp1, ' ', e.target)
        }

        else if (e.target === first && comp1 === 'scissor') {
            result.innerHTML = 'You win';
            console.log('You win');
            y++;
            para2.innerHTML = 'score:-' + y;
            console.log(comp1, ' ', e.target)
        }

        else if (e.target === second && comp1 === 'rock') {
            result.innerHTML = 'You win';
            y++;
            para2.innerHTML = 'score:-' + y;
            console.log('You win');
            console.log(comp1, ' ', e.target)
        }

        else if (e.target === third && comp1 === 'paper') {
            result.innerHTML = 'You win';
            y++;
            para2.innerHTML = 'score:- ' + y;
            console.log('You win');
            console.log(comp1, ' ', e.target)
        }

        else {
            result.innerHTML = 'Computer win';
            x++;
            para1.innerHTML = 'score:-' + x;
            console.log('Computer win')
            console.log(comp1, ' ', e.target)
        }
    }
}




var set;
//computer continuous hovering function
child2.addEventListener('mouseover', hover);
// console.log(child2)

let l = 1;
function hover(e) {
    e.stopImmediatePropagation();
    if (e.type === 'mouseover') {
        // console.log('body')
        let a = [one, two, three]
        set = setInterval(alpha, 2000)
        function alpha() {
            if (l == 1 && l != 2 && l != 3) {
                one.style.backgroundColor = 'aqua';
                two.style.backgroundColor = 'transparent';
                three.style.backgroundColor = 'transparent';
                console.log(a[0]);
                l = 2;
            }
            else if (l == 2 && l != 3 && l != 1) {
                one.style.backgroundColor = 'transparent';
                two.style.backgroundColor = 'aqua';
                three.style.backgroundColor = 'transparent';
                console.log(a[1]);
                l = 3
            }
            else if (l == 3 && l != 1 && l != 2) {
                one.style.backgroundColor = 'transparent';
                two.style.backgroundColor = 'transparent';
                three.style.backgroundColor = 'aqua';
                console.log(a[2]);
                l = 1;
            }
        }
    }
}


// const com = document.querySelectorAll('.com')

child2.addEventListener('mouseout', unhover)
// Event.stopImmediatePropagation();

function unhover(e) {
    e.stopImmediatePropagation();
    clearInterval(set);
    // console.log(com);
    one.style.backgroundColor = 'transparent';
    two.style.backgroundColor = 'transparent';
    third.style.backgroundColor = 'transparent';
}


//computer sorting function
function computer(...element) {
    element.sort(function () { return 0.5 - Math.random() });
    return element[0];
}

