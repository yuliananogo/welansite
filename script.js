//layanan
function showServices(specialization) {
      // Hide all services
      var services = document.getElementsByClassName("services");
      for (var i = 0; i < services.length; i++) {
        services[i].style.display = "none";
      }

      // Show the selected specialization's services
      document.getElementById(specialization).style.display = "block";
    }
    // testimoni
    document.addEventListener("DOMContentLoaded", function() {
  const testimonialsContainer = document.getElementById('testimonials-container');

  const testimonials = [
    {
      name: 'Susana Cristina Perada',
      photo: 'ati.jpg',
      text: 'Terima kasih atas pelayanan yang luar biasa. Saya merasa sangat puas dengan perawatan yang saya terima.'
    },
   
    {
      name: 'Katarina Dona',
      photo: 'dona.jpg',
      text: 'Dokter dan staff sangat ramah. Saya merasa nyaman selama proses perawatan.'
    },
     {
      name: 'Agnes Gunu Molan',
      photo: 'mama.jpg',
      text: 'Saya juga ingin menyampaikan apresiasi untuk kalian yang telah memberikan bantuan luar biasa. sangat kompeten dan membantu dalam perawatan anak saya dengan cepat dan efisien..'
    },
    // Tambahkan testimonial lainnya sesuai kebutuhan
  ];

  testimonials.forEach(testimonial => {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');

    const photoElement = document.createElement('img');
    photoElement.src = testimonial.photo;
    testimonialElement.appendChild(photoElement);

    const nameElement = document.createElement('p');
    nameElement.textContent = testimonial.name;
    testimonialElement.appendChild(nameElement);

    const textElement = document.createElement('p');
    textElement.textContent = testimonial.text;
    testimonialElement.appendChild(textElement);

    testimonialsContainer.appendChild(testimonialElement);
  });
});
//janji online
function submitForm() {
    // Anda dapat menambahkan logika validasi atau pengiriman formulir ke server di sini
    alert("Janji berhasil dibuat! Terima kasih.");
}
//kontak
function validateForm(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua kolom harus diisi");
        return false;
    }

    // Lakukan sesuatu dengan data yang valid, misalnya, kirim ke server
    alert("Pesan berhasil dikirim:\nNama: " + nama + "\nEmail: " + email + "\nPesan: " + pesan);
}
//lokasi

//menu
var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}
