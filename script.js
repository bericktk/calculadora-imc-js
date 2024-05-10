class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura ** 2)
    }
    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return ('Abaixo do Peso')
        }else if(imc >= 18.5 && imc < 25){
            return ('Peso normal')
        }else if(imc >= 25 && imc < 30){
            return ('Acima do peso')
        }else if(imc >= 30 && imc < 40){
            return ('Obeso')
        }else{
            return('Obesidade Grave')
        }
    }
}

const jose = new Pessoa("Jose", 100, 1.75)
console.log(jose.calcularImc(), jose.classificarImc())

const will = new Pessoa("Willian", 90, 1.80)
console.log(will.calcularImc(), will.classificarImc())