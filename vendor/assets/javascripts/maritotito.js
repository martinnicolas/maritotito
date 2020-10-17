function validateFiles(inputFile) {
  var maxFileSize = $(inputFile).data('max-file-size');
  var maxExceededMessage = "Este archivo exede el tamaño maximo permitido ("+String(maxFileSize)[0]+" MB)";
  var allowedExtension = $(inputFile).data('allowed-extensions');
  var extErrorMessage = "Solo estan permitidos los archivos con extension: "+allowedExtension.join(', ');
  var extName;
  var sizeExceeded = false;
  var extError = false;

  var errores = []; 

  $.each(inputFile.files, function() {
    if (this.size && maxFileSize && this.size > parseInt(maxFileSize)) {sizeExceeded=true;};
    extName = this.name.split('.').pop();
    if ($.inArray(extName, allowedExtension) == -1) {extError=true;};
  });
  if (sizeExceeded) {
    errores.push(maxExceededMessage);
    $(inputFile).val('');
  };
  if (extError) {
    errores.push(extErrorMessage);        
    $(inputFile).val('');
  };

  if (errores.length > 0){
    var stringErrores = "Se encontraron los siguientes errores:\n\n";
    var texto = stringErrores + errores.join('\n\n');
    alert(texto);
  }
}