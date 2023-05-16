let switchTheme=document.getElementById('themeSwitcher')
let input=document.getElementById('input')
let main=document.querySelector('main')
let root=document.querySelector(':root')
let inputResult=document.getElementById('result')
let clear=document.getElementById('clear')
input.focus()

// teclas que podem ser pressionadas 
let allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '+', '-', '*', '/', '.', '%', ' ']


//função para pegar os botões da calculadora 
document.querySelectorAll('.charKey').forEach(function(charkeyBtn){
    charkeyBtn.addEventListener('click', function(){
        let value = charkeyBtn.dataset.value
        input.value += value
        input.focus()
    })
})

// função que irá realizar as operações
function calculate(){
    inputResult.value="ERROR!"
    inputResult.classList.add('error')
    let result=eval(input.value)
    inputResult.value = result
    inputResult.classList.remove('error')
}

document.getElementById('equal').addEventListener('click', calculate )


clear.addEventListener('click', function(){
    input.value=''
    input.focus()
    inputResult.value=''
    if (inputResult.classList == 'error'){
        inputResult.classList.remove('error')
    }
})

// função de copiar o resultado de uma operação
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    let btn = ev.currentTarget
    if(btn.innerText === 'Copy'){
        btn.innerText = 'Copied!'
        btn.classList.add('success')
        navigator.clipboard.writeText(inputResult.value)
    }else {
        btn.innerText='Copy'
        btn.classList.remove('success')
    }
})

// função de troca de tema
switchTheme.addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme='light'
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme='dark'
    }
})

// função para travar teclas indesejadas ex: letras
input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if(allowedKeys.includes(ev.key)){
        input.value+=ev.key
        return
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Delete'){
        input.value = ' '
        inputResult.value=''
    }
    if (ev.key === 'Enter'){
        calculate()
    }
    if (ev.key ==='f'){
        alert('Respeito prestado')
    }
})

