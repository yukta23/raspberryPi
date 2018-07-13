let socket=io()

socket.on('connected',()=>{
    console.log('connection at '+socket.id)
})

$(()=>{
    let btn=$("#btn")
    let status=1;
    btn.click(()=>{
        if(status==1)
        status=0
        else
        status=1
        socket.emit('Led_status',{key:status})
    })
})