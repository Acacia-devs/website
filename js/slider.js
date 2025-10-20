// Fallback para imágenes del slider: si una imagen falla en cargar, la reemplazamos
            document.addEventListener('DOMContentLoaded', function(){
                document.querySelectorAll('.tech-slide img').forEach(function(img){
                    img.addEventListener('error', function(){
                        var parent = img.closest('.tech-slide');
                        if(parent) parent.classList.add('img-missing');
                        img.src = './assets/logo-black.png';
                        img.alt = 'logo fallback';
                    });
                });
            });