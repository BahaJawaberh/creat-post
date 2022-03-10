const body = document.getElementsByTagName('body')[0] 
const input = document.getElementById('PostInbut')
const btn = document.getElementById('PostTn')

const creatNewPost = function (){
    const divPost = document.createElement('div')
    const text =input.value 
    const img = document.createElement('img')
    const userName = document.createElement('h2')
    const postContent = document.createElement('h3')
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')
    const hr = document.createElement('hr')
    const commentIput = document.createElement('input')
    const commentSubmit = document.createElement('button')


    



    body.append(divPost)
    divPost.append(img,userName,postContent,hr,like,comment,share,commentIput,commentSubmit)
}

btn.addEventListener('click',creatNewPost)
