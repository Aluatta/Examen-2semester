/**The code fetches the "errorcode.json" file using the Fetch API. */
fetch("errorcode.json")   
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);  
      /**If the response is not successful (response.ok = is false), an error is thrown.*/
    }
    return response.json();
    /**The response is converted to JSON format using the response.json() method */
  })

  .then(data => {
    // .then Handle the loaded JSON data
    const errorCodes = data.errorcode;    
    /** errorCodes variable is assigned the value of the errorcode property from the JSON data. */
    console.log(errorCodes);

    // Set the data in the DOM
      /** pAlertTekst variable selects an element with the class "alert-tekst" from the DOM */
    const pAlertTekst = document.querySelector('.alert-tekst');
    const randomNumber = Math.floor(Math.random() * errorCodes.length);
    /**    //** this variable is an index that was randomly generated to access a specific error code from the errorCodes array. */ 
    /**assigns the clarification value from the randomly selected error code. */
    const clarification = errorCodes[randomNumber].clarification;
    pAlertTekst.textContent = clarification;
    console.log(randomNumber, pAlertTekst.textContent);

    /**statusAlert variable selects an element with the class "headline--alert-tekst"*/
    const statusAlert = document.querySelector(".headline--alert-tekst");
    /** assigns the status value from the randomly selected error code. */
    statusAlert.textContent= ` ${errorCodes[randomNumber].status}`;
    console.log(randomNumber, statusAlert.textContent)


    /***alertPlace variable selects an element with the class "alertPlace" than assigns the "place" value from the randomly selected error code. */
    const alertPlace = document.querySelector(".alert-place");
    alertPlace.textContent=  ` ${errorCodes[randomNumber].place}`;
    console.log(randomNumber, alertPlace.textContent);

    /**selects an element with the class "circle" from the DOM and assigns it to the variable  */
    const warningCircle = document.querySelector(".circle");
   

    /** assignes the "color" value from the randomly selected "error codes" to colorCode variable. */
    //**henter den tilsvarende farvekode fra den tilfældigt /random/valgte errorCodes og gemmer den i variablen colorCode  */
    const colorCode = errorCodes[randomNumber].color;
    console.log(colorCode)

  if (colorCode === "okColor"){
    warningCircle.classList.add("okColor");
  }
  else if( colorCode === "warningColor"){
    warningCircle.classList.add("warningColor");
  }
 
  else if(colorCode === "alarmColor"){
    warningCircle.classList.add("alarmColor")
  }
 } 
 )


/** handles any errors that occurred during the fetch operation and logs them to the console. */
  .catch(error => {
    console.error("Could not fetch JSON:", error);

    const errorMessage = document.createElement("p"); 
    errorMessage.setAttribute("class","error-message" );
    errorMessage.textContent = "Der opstod en fejl under indlæsningen af data. Vær venlig at genindlæse siden og prøv igen.";
    errorMessage.style.color="red"
    console.log(errorMessage)
  
    const reloadButton = document.createElement("button"); /** variable that creates button  element  in html , for at reload the page */
    reloadButton.setAttribute("class", "reloadSide");
    reloadButton.textContent = "Genindlæs siden";          /**  create text on this button */
    /** added eventListener, that triggers an action  of reloading the  page  and  getting  all  page with code again :*/
   
    const container = document.querySelector('.error-state');
    container.appendChild(errorMessage);
    container.appendChild(reloadButton);
    container.style.background= "#e51f1f38"


    reloadButton.addEventListener("click", () => {   /**addListener  event to button to  trigger action: reload page */
      window.location.reload(); 
    });

    const infoField = document.querySelector('.main-alert');  /**remove main section from html document flow */
    infoField.style.display = "none";

    const buttonAfslut = document.querySelector('.button--afslut');  /** hide butto´s vivibility in html document */
    buttonAfslut.style.visibility ="hidden";

  
  });
  


  

