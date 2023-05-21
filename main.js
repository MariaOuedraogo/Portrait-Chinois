fetch('data.json').then(function (response) {
  response.json().then(function (data) {
    console.log(data);

    data.forEach(function (resultat) {

      var sec = document.querySelector(".analogie");


      sec.innerHTML += "<div class='section ' id='a" + resultat.numerotation + "'> <div class='in'><div class='back' ></div><div class='fond'> <h2>" + resultat.analogie + " </h2><p class='paragraphe'>" + resultat.valeurAnalogie + resultat.car + "</p> </div></div>"

    })
    //intégrer l'image
    var div = document.querySelectorAll('.back');
    div.forEach(function (divUnique, index) {
      divUnique.style.backgroundImage = "url(" + data[index].backgroundImage + ")"
    })

    //pop up
    openModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
      })
    })

    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        closeModal(modal)
      })
    })

    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
      })
    })

    function openModal(modal) {
      if (modal == null) return
      modal.classList.add('active')
      overlay.classList.add('active')
    }

    function closeModal(modal) {
      if (modal == null) return
      modal.classList.remove('active')
      overlay.classList.remove('active')
    }

    //le formulaire
    
    envoyer.addEventListener('click', function () {
      var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=maria.ouedraogo&courriel=" + document.querySelector('input#mail').value + "&message=Si j'étais " + document.querySelector('input#analogie').value + " je serais " + document.querySelector('input#reponse').value + " car " + document.querySelector('input#detail').value + "lien de l'image :" + document.querySelector('input#img').value;

      fetch(urlVisitee).then(function (response) {
        response.json().then(function (data) {
          console.log("Réponse reçue : ")
          console.log(data);

          var sec = document.querySelector(".analogie");
          sec.innerHTML += "<div class='sectionn ' id='p'> <div class='in'><div class='back'><img class='back' src="+ document.querySelector('input#img').value+" alt=''></div><div class='fond'> <h2>" + document.querySelector('input#analogie').value + " </h2><p class='paragraphe'>Je serais " + document.querySelector('input#reponse').value + " ,car " + document.querySelector('input#detail').value + "</p> </div></div>"

          var divUnique = document.querySelector('div.analogie div:last-child')
          console.log(divUnique);


        })
      })
      
    })
    
  })
})

