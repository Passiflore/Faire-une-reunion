
// Get all DOM elements
const container = document.querySelector('.container')

const question1 = container.querySelector('.question1')
const question2 = container.querySelector('.question2')
const question3 = container.querySelector('.question3')
const question4 = container.querySelector('.question4')
const question5 = container.querySelector('.question5')
const question6 = container.querySelector('.question6')
const question7 = container.querySelector('.question7')

const reponseN = container.querySelector('.reponseN')
const reponseN2 = container.querySelector('.reponseN2')
const reponseN3 = container.querySelector('.reponseN3')
const reponseN4 = container.querySelector('.reponseN4')
const reponseN5 = container.querySelector('.reponseN5')
const reponseP = container.querySelector('.reponseP')
const reponseP2 = container.querySelector('.reponseP2')

const buttons = container.querySelector('.buttons')
const non = container.querySelector('.non')
const oui = container.querySelector('.oui')
const valider = container.querySelector('.valider')


// Question

let truecount = 0
let falsecount = 0
let yes = 'false'
let no = 'false'


const affirmative = () =>
 {
    yes = 'true'
    no = 'false'

 }
 oui.addEventListener('click',affirmative)


const negative = () =>
{
    yes = 'false'
    no ='true'

}
non.addEventListener('click',negative)



const nextquestion = () =>
{
    if (yes == 'true')
    {
        truecount++
    }

    if (no == 'true')
    {
        falsecount++
    }


    if (truecount == 1 && falsecount == 0)
    {
        question2.style.display = ("block")
        question1.style.display = ("none")
    }
    if (truecount == 0 && falsecount == 1)
    {
        reponseN.style.display = ("block")
        question1.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (truecount == 2 && falsecount == 0)
    {
        reponseP.style.display = ("block")
        question2.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (truecount == 1 && falsecount == 1)
    {
        question3.style.display = ("block")
        question2.style.display = ("none")
    }

    if (truecount == 1 && falsecount == 2)
    {
        question4.style.display = ("block")
        question3.style.display = ("none")
    }

    if (truecount == 2 && falsecount == 1)
    {
        question5.style.display = ("block")
        question3.style.display = ("none")
    }

    if (truecount == 1 && falsecount == 3)
    {
        reponseN2.style.display = ("block")
        question4.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (truecount == 2 && falsecount == 2)
    {
        question6.style.display = ("block")
        question4.style.display = ("none")
    }

    if (truecount == 3 && falsecount == 1)
    {
        reponseP.style.display = ("block")
        question5.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (truecount == 3 && falsecount == 2)
    {
        reponseN3.style.display = ("block")
        question6.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }

    if (truecount == 2 && falsecount == 3)
    {
        question7.style.display = ("block")
        question6.style.display = ("none")
    }

    if (truecount == 2 && falsecount == 4)
    {
        reponseN4.style.display = ("block")
        question7.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }
    if (truecount == 3 && falsecount == 3)
    {
        reponseP2.style.display = ("block")
        question7.style.display = ("none")
        non.style.display = ("none")
        oui.style.display = ("none")
        valider.style.display = ("none")
    }



}
valider.addEventListener('click',nextquestion)
