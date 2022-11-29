
let saludo = Number(prompt("Bienvenido a Teho Guitar Store. ¿Desea comprar una guitarra? \n 1. Sí \n 2. No"))
do {
    if (saludo == 1) {
        let opcion = Number(prompt(" Tienes estas opciones: \n 1. Guitarra Gibson Les Paul \n 2. Guitarra Fender Stratocaster \n 3. Guitarra Ephipone SG \n 4. No me gustan. Ya no deseo comprar"))
        if (opcion == 1) {
            alert("El pago a realizar es de $3000.00")
        } else if (opcion == 2) {
            alert("El pago a realizar es de $2500.00")
        } else if (opcion == 3) {
            alert("El pago a realizar es de $1800.00")
        } else if (opcion == 4) {
            alert ("Gracias por su visita")
            break
        } else {
            alert("Ingrese una opción correcta")
        } 
            if (opcion == 1 || 2 || 3 ) {
                let paga = Number(prompt("¿Desea pagar? \n 1. Sí \n 2. No "))
                if (paga == 1) {
                    alert("Gracias por su compra. ¡Vuelva pronto!")
                    break
                } else if (paga == 2) {
                    alert ("Gracias por su visita")
                    break
                } else {
                    alert("Ingrese una opción correcta")
                }
            } 
    } else if (saludo == 2) {
        alert ("Gracias por su visita")
    } else {
        alert("Ingrese una opción correcta")
    } 
} while (saludo != 2)



