document.addEventListener('DOMContentLoaded', function() {
    const tombol = document.getElementById('tombolSapa');
    
    if (tombol) {
        tombol.addEventListener('click', function() {
            alert('Mantap! Website statis dari folder tesGIT sudah berfungsi dengan baik. Waktunya deploy ke GitHub!');
        });
    }
});
