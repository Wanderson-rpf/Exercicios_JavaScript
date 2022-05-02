function calculadora(){
    return {
        display: document.querySelector('.display'),

        iniciarCalc(){
            this.capturaClique();
            this.enter();
        },

        enter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta){
                    alert('ATENÇÃO!!! Conta invalida.');
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('ATENÇÃO!!! Conta invalida.');
                return;
            }
        },

        limparDisplay(){
            this.display.value = '';
        },

        apagar(){
            this.display.value = this.display.value.slice(0, -1);
        },

        btnDisplay(valor){
            this.display.value += valor;
        },

        capturaClique(){
           document.addEventListener('click', e => {
               const element = e.target;

               if (element.classList.contains('btn-num')){
                   this.btnDisplay(element.innerText);
               }

               if (element.classList.contains('btn-clear')){
                   this.limparDisplay();
               }
               if (element.classList.contains('btn-del')){
                   this.apagar();
               }
               if (element.classList.contains('btn-eq')){
                   this.realizaConta();
               }

               this.display.focus();
           }) 
        }
    }
}
const calc = calculadora();
calc.iniciarCalc();