AFRAME.registerComponent('newbutton',{
    init:function(){
        var b1=document.createElement('button')
        b1.innerHTML='M1'
        b1.setAttribute('id','button1')
        b1.setAttribute('class','btn btn-warning')

        var b2=document.createElement('button')
        b2.innerHTML='M2'
        b2.setAttribute('id','button2')
        b2.setAttribute('class','btn btn-warning')

        var b3=document.createElement('button')
        b3.innerHTML='M3'
        b3.setAttribute('id','button3')
        b3.setAttribute('class','btn btn-warning')

        var b4=document.createElement('button')
        b4.innerHTML='Search'
        b4.setAttribute('id','button4')
        b4.setAttribute('class','btn btn-warning')

        var buttonDiv=document.getElementById('button-div')
        buttonDiv.appendChild(b1)
        buttonDiv.appendChild(b2)
        buttonDiv.appendChild(b3)
        buttonDiv.appendChild(b4)
    }
})