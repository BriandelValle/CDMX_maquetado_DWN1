Swal.fire({
    title: '¡Aviso Importante!',
    icon: 'info',
    html:
      'Por favor, antes de realizar su viaje, verifique las últimas novedades y restricciones sobre la <strong>Pandemia Covid-19<strong> en territorio Mexicano<br>' +
      '<a target="_blank" href="https://covid19.cdmx.gob.mx/">Link</a> ',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    allowOutsideClick: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Gracias!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
    
  })
