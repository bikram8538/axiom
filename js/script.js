    let toogleBtn = document.querySelector('.navToogler');
    let toogleBtnIcon = document.querySelector('.navToogler i');
    let dropDownMenu = document.querySelector('.dropdown-menu');

    toogleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
      let isOpen = dropDownMenu.classList.contains('open')
      toogleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    }