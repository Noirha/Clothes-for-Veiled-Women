let but1 = document.getElementsByTagName("button")[0]
let but2 = document.getElementsByTagName("button")[1];
let but3 = document.getElementsByTagName("button")[2];
let but4 = document.getElementsByTagName("button")[3];
let flex = document.getElementById("flex");

but1.addEventListener("click", function () {

    let arry = [

        `
    <img src="imges/istockphoto-1474444790-640x640.jpg">
    <img src="imges/istockphoto-1402422488-640x640.jpg">
    <img src="imges/istockphoto-1402114790-640x640.jpg">
    <img src="imges/istockphoto-1405644924-640x640.jpg">
    <img src="imges/istockphoto-1226437569-640x640.jpg">
    <img src="imges/istockphoto-1449351295-640x640.jpg">
    <img src="imges/istockphoto-1402030657-640x640.jpg">
    <img src="imges/istockphoto-1264941895-640x640.jpg">
    <img src="imges/istockphoto-1393979668-640x640.jpg">
    `
    ]


    flex.innerHTML = `${arry}`

})
but2.addEventListener("click", function () {
    let arry = [
        `
        <img src="imges/istockphoto-1405644924-640x640.jpg">
        <img src="imges/istockphoto-1449351295-640x640.jpg">
        <img src="imges/istockphoto-1459900485-640x640.jpg">
        <img src="imges/istockphoto-1410311060-640x640.jpg">
        <img src="imges/istockphoto-1391099995-640x640.jpg">
        <img src="imges/istockphoto-1425904542-640x640.jpg">
        <img src="imges/istockphoto-1390518144-640x640.jpg">
        <img src="imges/istockphoto-1402422488-640x640.jpg">
        <img src="imges/istockphoto-1468234026-640x640.jpg">
        <img src="imges/istockphoto-1402030657-640x640.jpg">
        
        `
    ]
    flex.innerHTML = `${arry}`
})
but3.addEventListener("click", function () {
    let arry = [
        `

            <img src="imges/istockphoto-1481608030-640x640.jpg">
            <img src="imges/istockphoto-1364987272-640x640.jpg">
            <img src="imges/istockphoto-1393979668-640x640.jpg">
            <img src="imges/istockphoto-1386193391-640x640.jpg">
            <img src="imges/istockphoto-1393761441-640x640.jpg">
            <img src="imges/istockphoto-1362613842-640x640.jpg">
            <img src="imges/istockphoto-1391244909-640x640.jpg">
            <img src="imges/istockphoto-470793118-640x640.jpg">
            <img src="imges/istockphoto-1385926033-640x640.jpg">



       
            `
    ]
    flex.innerHTML = `${arry}`
})

but4.addEventListener("click", function () {
    let arry = [
        `
<img src="imges/istockphoto-1344721405-640x640.jpg">
<img src="imges/istockphoto-1474444790-640x640.jpg">
<img src="imges/istockphoto-1226437569-640x640.jpg">
<img src="imges/istockphoto-1264155276-640x640.jpg">
<img src="imges/istockphoto-1264941895-640x640.jpg">
<img src="imges/istockphoto-1226429012-640x640.jpg">
<img src="imges/istockphoto-1344721436-640x640.jpg">
<img src="imges/istockphoto-1395486884-640x640.jpg">
    
`
    ]

    flex.innerHTML = `${arry}`

})



