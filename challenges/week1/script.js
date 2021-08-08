
function move(id){
    let tl = gsap.timeline()
    let images = document.querySelector("#images");
    let icon = document.querySelector("#icon");
    let loading = document.querySelector("#loading");
    let about = document.querySelector("#about");
    if(window.innerWidth<600){
        tl.to('.bubble',{duration:0.2, marginBottom:'0px', boxShadow:'none'}).to(`#bubble${id}`,{duration:.2, marginBottom:"50px", ease:'ease-out',boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)"})
    }else{
        tl.to('.bubble',{duration:0.2, marginBottom:'0px', boxShadow:'none'})
    }

    if(id==0){
        document.querySelector('#titulo').textContent = 'IMAGENS'
        images.style.display = 'block'
        icon.style.display = 'none'
        loading.style.display = 'none'
        about.style.display = 'none'
    }else if(id==1){
        document.querySelector('#titulo').textContent = 'ÍCONES'
        images.style.display = 'none'
        icon.style.display = 'block'
        loading.style.display = 'none'
        about.style.display = 'none'
    }else if(id==2){
        document.querySelector('#titulo').textContent = 'LOADING'
        loading.style.display = 'block'
        images.style.display = 'none'
        icon.style.display = 'none'
        about.style.display = 'none'
    }else if(id==3){
        document.querySelector('#titulo').textContent = 'SOBRE'
        loading.style.display = 'none'
        images.style.display = 'none'
        icon.style.display = 'none'
        about.style.display = 'block'
    }
    }