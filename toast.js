const ativarToast = document.getElementById('b-email')
const menssagem = document.getElementById('toast-teste')

if (ativarToast) {
    ativarToast.addEventListener('click', function(){
        const toast = new bootstrap.Toast(menssagem)
        toast.show()
    })
}