var active = true
function on_submit () {

    const nome = document.getElementById("f-name")
    const tel = document.getElementById("f-tel")
    const email = document.getElementById("f-email")
    const cpf = document.getElementById("f-cpf")
    const senha = document.getElementById("f-senha")
    var falta = 0

    
    if (nome.value=='' && active){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning'
            p_text.innerHTML = '*Campo Obrigatório*'
            if (active) {
            warn.appendChild(p_text)
            document.getElementById('name').appendChild(warn)
            document.getElementById('f-name').className = 'input-fault'}
            falta++;
    }
    if (tel.value==''){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning'
            p_text.innerHTML = '*Campo Obrigatório*'
            if (active) {
            warn.appendChild(p_text)
            document.getElementById('email').appendChild(warn)
            document.getElementById('f-email').setAttribute('class','input-fault')}
            falta++;
    }
    if (email.value==''){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning'
            p_text.innerHTML = '*Campo Obrigatório*'
            if (active) {
            warn.appendChild(p_text)
            document.getElementById('phone').appendChild(warn)
            document.getElementById('f-tel').setAttribute('class','input-fault')}
            falta++;
    }
    if (cpf.value=='' && active){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning'
            p_text.innerHTML = '*Campo Obrigatório*'
            if (active) {
            warn.appendChild(p_text)
            document.getElementById('cpf').appendChild(warn)
            document.getElementById('f-cpf').setAttribute('class','input-fault')}
            falta++;
    }
    if (senha.value==''){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning'
            p_text.innerHTML = '*Campo Obrigatório*'
            if (active) {
            warn.appendChild(p_text)
            document.getElementById('senha').appendChild(warn)
            document.getElementById('f-senha').setAttribute('class','input-fault')}
            falta++;
    }
    if (falta!=0 && active){
            const warn = document.createElement('div')
            const p_text = document.createElement('p')
            p_text.className = 'text_warnning_master'
            if (active) {
            p_text.innerHTML = falta + '  Campos Obrigatórios não Registrados'
            warn.appendChild(p_text)
            document.getElementById("submit-button").appendChild(warn)}
            if (active) {
                active = false

            }

    } else if (falta==0){
        const warn = document.createElement('div')
        const p_text = document.createElement('p')
        p_text.className = 'text_Sucess_master'
        p_text.innerHTML =  'Sucesso!'
        warn.appendChild(p_text)
        document.getElementById("submit-button").appendChild(warn)


    }

}