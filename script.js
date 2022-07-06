const quizData = [
    {   
        num:1,
        question:'Inside which HTML element do we put the JavaScript?',
        choice_a:'<script>',
        choice_b:'<js>',
        choice_c:'javascript',
        correct:'a'
    },
    {
        num:2,
        question:'Where is the correct place to insert a JavaScript?',
        choice_a:'The body section',
        choice_b:'The <head> section',
        choice_c:' Both the <head> section and the <body> section are correct',
        correct:'c'
    },
    {
        num:3,
        question:'What is the correct syntax for referring to an external script called "xxx.js"?',
        choice_a:' <script name="xxx.js">',
        choice_b:' <script src="xxx.js">',
        choice_c:' <script href="xxx.js">',
        correct:'b'
    }
]

const submitBtn = document.querySelector('#submit')
const refreshBtn = document.querySelector('#refresh-btn')

const  resultMsg = document.querySelectorAll('.result-msg strong')

const questionElement = document.querySelector('.quiz-questtion header')
const choicesA = document.querySelector('.choices_a')
const choicesB = document.querySelector('.choices_b')
const choicesC = document.querySelector('.choices_c')

const choices = document.querySelectorAll('.choices')
const scoreElement = document.querySelector('.score')
const quizResultElement = document.querySelector('.quiz-result')
const quizWrapperElement = document.querySelector('.quiz-wrapper-inner')

let quizNum = 0
let score = 0
let correct = false

document.addEventListener('DOMContentLoaded', () => {
    displayQuiz()

    submitBtn.addEventListener('click', () => {
        
        if(document.querySelectorAll('.quiz-choices input:checked').length === 0){
            alert('Please select an answer')
        }else{
            let currentNum = quizNum
            quizNum++
            choices.forEach(choice => {
                if(choice.checked){
                    if(choice.value == quizData[currentNum].correct){
                        correct = true
                    }else{
                        correct = false
                    }
                }
            })
            if(correct){
                score++
            }
            scoreElement.innerText = score
            displayQuiz()
            
        }
        clearChoices()
    })

    refreshBtn.addEventListener('click', () => {
        return window.location.reload()
    })
})

function displayQuiz(){
    const quiz = quizData[quizNum]
    if(quizNum < quizData.length){
        questionElement.innerText = quiz.question
        choicesA.querySelector('span').innerText = quiz.choice_a
        choicesA.querySelector('input').value = 'a'
        choicesB.querySelector('span').innerText = quiz.choice_b
        choicesB.querySelector('input').value = 'b'
        choicesC.querySelector('span').innerText = quiz.choice_c
        choicesC.querySelector('input').value = 'c'
    }else{
        scoreElement.innerHTML = '<div class="star"><i class="fas fa-star"></i></div>'
        quizResultElement.style.display = 'flex'
        quizWrapperElement.style.display = 'none'
        submitBtn.style.display = 'none'
        refreshBtn.style.display = 'block'
        resultMsg[0].innerText = score
        resultMsg[1].innerText = quizData.length
    }
}
function clearChoices(){
    choices.forEach(choice => {
        if(choice.checked){
            return choice.checked = false
        }
    })
}

