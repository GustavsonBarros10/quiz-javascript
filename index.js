const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0



function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()


}

function displayNextQuestion() {
  resetState()
  
  if(questions.length == currentQuestionIndex) {
    return finishGame()
  }  




    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if(answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })

}

function resetState() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++

    } else {
        document.body.classList.add("incorrect")

    }

    document.querySelectorAll(".answer").forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame(){
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)


    let message = ""

    switch (true){
        case (performance >= 90):
            message = "Excelente :)"
            break
        case (performance >= 70):
            message = "Muito Bom :)"
            break 
        case (performance >= 50):
            message = "Bom"
            break
        default:
            message = "Pode Melhorar :("

    }

    $questionsContainer.innerHTML =
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span>Resultado: ${message} </span>  
        </p>
        <button onclick=window.location.reload() class="button">
            Refazer Teste
        </button>
    `




}





const questions = [
    {
      question: "Quem foi o fundador do UBUNTU?",
      answers: [
        { text: "Mark Zuckerberg", correct: false },
        { text: "Steve Jobs", correct: false },
        { text: "Mark Shuttleworth ", correct: true },
        { text: "Bill Gates", correct: false }
      ]
    },
    {
      question: "Em que ano foi lançado o Ubuntu?",
      answers: [
        { text: "2004", correct: true },
        { text: "1998", correct: false },
        { text: "2000", correct: false },
        { text: "2002", correct: false }
      ]
    },
    {
      question: 'Qual ambiente desktop padrão do Ubuntu?',
      answers: [
        { text: 'GNOME', correct: true },
        { text: 'XFCE', correct: false },
        { text: 'MATE', correct: false },
        { text: "KDE", correct: false }
      ]
    },
    {
      question: 'O que significa LTS em uma versão Ubuntu? ',
      answers: [
        { text: "Versão a curto prazo", correct: false },
        { text: "Banco de Dados", correct: false },
        { text: "Versão a longo prazo", correct: true },
        { text: "Pacote de Drivers", correct: false }
      ]
    },
    {
      question: 'Quais são os aplicativos pré-instalados no Ubuntu?',
      answers: [
        { text: 'Pacote Office', correct: false },
        { text: 'Adobe Reader', correct: false },
        { text: 'Libre Office', correct: true },
        { text: 'Windows Media Player', correct: false }
      ]
    },
    {
      question: 'Qual o sistema de arquivos mais comuns no Ubuntu?',
      answers: [
        { text: 'Fat32', correct: false },
        { text: 'NTFS', correct: false },
        { text: 'EXE', correct: false },
        { text: 'EXT4', correct: true }
      ]
    },
    {
      question: 'O que é PPA ?',
      answers: [
        { text: 'Pacote Office', correct: false },
        { text: 'Repositório de software', correct: true },
        { text: 'Leitor de PDF', correct: false },
        { text: 'Terminal', correct: false },
      ]
    },
    {
        question: 'Qual a função do comando APT-GET UPDATE ?',
        answers: [
          { text: 'listar arquivos', correct: false },
          { text: 'Criar diretório', correct: false },
          { text: 'Deletar arquivo', correct: false },
          { text: 'Atualizar Repositório', correct: true },
        ]
      },
      {
        question: 'Você abriu terminal do ubuntu e precisa acessar o diretório onde fica seu downloads, qual comando você utilizaria? ',
        answers: [
          { text: 'cd/home/usuario/Downloads', correct: true },
          { text: 'cd/Downloads', correct: false },
          { text: 'home/Downloads', correct: false },
          { text: 'cd/usuario/Downloads', correct: false },
        ]
      },
      {
        question: 'O que é ROOT? ',
        answers: [
          { text: 'Usuário sem permissão', correct: false },
          { text: 'Grupo de usuário', correct: false },
          { text: 'Domínio', correct: false },
          { text: 'Super Usuário ', correct: true },
        ]
      },

      
  ]