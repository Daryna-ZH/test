    function showError(cont, errorMessage) {
      cont.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      cont.appendChild(msgElem);
    }

    function resetError(cont) {
      cont.className = '';
      if (cont.lastChild.className == "error-message") {
        cont.removeChild(cont.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;

      resetError(elems.user.parentNode);
      if (!elems.user.value) {
        showError(elems.user.parentNode, 'Enter your name');
      }

      resetError(elems.mail.parentNode);
      if (!elems.mail.value) {
        showError(elems.mail.parentNode, 'Indicate your email');
      }

      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, 'Missing text');
      }

    }