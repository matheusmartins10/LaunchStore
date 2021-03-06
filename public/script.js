const Mask = {
    apply(input, func){
        setTimeout(()=>{
             input.value = Mask[func](input.value)
        }, 1)
    },
    formatBRL(value){
        value = value.replace(/\D/g, "") // regular expression
        return  new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value/100)
    }
}

const formDelete = document.querySelector('#form-delete')
formDelete.addEventListener('submit', (event)=>{
    const confirmation = confirm("Deseja deletar ? ")
    if(!confirmation){
        event.preventDefault()
    }
})

