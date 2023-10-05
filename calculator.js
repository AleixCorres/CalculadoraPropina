function calculatorSubmit() {
    
    let diners = document.getElementById("diners").value;
    let totalAccount = document.getElementById("totalAccount").value;
    let serviceQualification = document.getElementById("serviceQualification").value;
    let percentage;

    if (diners == "") {
        diners = 1;
    }

    if (totalAccount == "") {
        document.getElementById("errorTotalAccount").innerHTML = "Debes ingresar el monto total";
          console.log("totalAccount:", totalAccount);
          return;
    } else {
        document.getElementById("errorTotalAccount").innerHTML = ""; // Borrar mensaje de error
    }

    if (serviceQualification == "horrible") {
        percentage = 0;
    } else if (serviceQualification == "acceptable") {
        percentage = 0.05;
    } else if (serviceQualification == "brilliant") {
        percentage = 0.10;
    } else {
        document.getElementById("errorTotalAccount").innerHTML = "Calificación de servicio no válida";
        return;
    }

    let tip = parseFloat(totalAccount) * percentage / parseInt(diners);
    if (tip <= 0.50) {
        document.getElementById("tipResult").innerHTML = "La propina es 0.50€";
    } else {
        document.getElementById("tipResult").innerHTML = "La propina es " + tip.toFixed(2);
    }
     
}