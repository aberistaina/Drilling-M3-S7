const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
        tipoDeMotor: "4 cilindros en linea",
        bloqueMotor: "aleacion/aluminio",
        desplazamiento: "1.99/1996",
        caballosDeFuerza: "155 @ 6500",
        lineaRoja: "6700",
        inyeccionCombustible: "puntos multiples",

    }
}

let marcaAuto = vehiculo.marca
let modeloAuto = vehiculo.modelo
let tipoMotor = vehiculo.motor.tipoDeMotor
let psiMotor = vehiculo.motor.psi ??= "No tiene PSI"
let bloqueMotor= vehiculo.motor.bloqueMotor
let desplazamientoMotor = vehiculo.motor.desplazamiento
let rmpMotor = vehiculo.motor.caballosDeFuerza
let lineaRojaMotor = vehiculo.motor.lineaRoja
let SmartAssistMotor = vehiculo.motor.smartAssist ??= "No tiene Sistema Smart Assist"
let inyeccionMotor = vehiculo.motor.inyeccionCombustible
let encendidoMotor = vehiculo.motor.encendidoMotor ??= "No tiene Encendido Remoto del Motor"




console.log(vehiculo)


