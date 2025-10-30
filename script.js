document.addEventListener('DOMContentLoaded', function() {

    // data alamat yang tercover
    const alamatTercover = [
        "jalan merdeka 10",
        "anggrek",
        "jalan taman pahlawan",
        "benteng mutiara mas",
        "sadang"
    ];

    // dOM SELECTOR
    
    // memilih bagian tombol "berlangganan" yang ada di html
    const tombolBerlangganan = document.querySelectorAll('.btn-berlangganan');
    
    // memilih bagian/section cek coverage dan forumulir pendaftaran
    const sectionCekCoverage = document.getElementById('cek-coverage');
    const sectionFormulir = document.getElementById('formulir-pendaftaran');

    // memilih elemen di dalam form cek coverage yaitu alamat, tombol cek, hasil coverage, dan formulir daftar
    const inputAlamat = document.getElementById('alamat');
    const tombolCek = document.getElementById('btn-cek');
    const hasilCoverage = document.getElementById('coverage-result');
    const form = document.getElementById('form-daftar');


    // DOM EVENTS

    tombolBerlangganan.forEach(function(tombol) {
        tombol.addEventListener('click', function() {
            
            // DOM MANIPULATION
            
            // mengubah properti coverage dari yang tadinya ga ada jadi ada kalo tombol berlangganan nya diklik
            sectionCekCoverage.style.display = 'block'; 
            
            // otomatis scroll ke section agar langsung ke bagian cek ketersediaan jaringan
            sectionCekCoverage.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // event Listener 'click' untuk tombol "Cek Ketersediaan"
    tombolCek.addEventListener('click', function() {
        
        // DOM MANIPULATION
        // mengambil nilai yaitu alamat dari input
        const alamatInputanUser = inputAlamat.value.trim().toLowerCase();

        if (alamatInputanUser === "") {
            alert("Alamat tidak boleh kosong!");
            return;
        }

        // pengecekan alamat tercover atau tidak (kondisional)
        if (alamatTercover.includes(alamatInputanUser)) {

            alert("Selamat! Alamat Anda tercover oleh jaringan kami.");
            hasilCoverage.innerHTML = "Selamat! Alamat Anda tercover oleh jaringan kami. Silahkan isi formulir pendaftaran untuk melanjutkan.";
            hasilCoverage.style.color = "#3498db";

            // formulir pendaftaran bakal tampil kalo alamatnya tercover
            sectionFormulir.style.display = 'block';
            sectionFormulir.scrollIntoView({ behavior: 'smooth' });

        } else {
            alert("Mohon maaf, alamat Anda belum tercover oleh jaringan kami.");
            
            sectionFormulir.style.display = 'none'; // Kebalikannya, bagian ini bakal bikin formulir pendaftaran gak muncul kalo alamatnya gak tercover
            hasilCoverage.innerHTML = "";
        }
    });

    // DOM EVENTS 
    // event Listener 'submit' formulir pendaftaran
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // mengambil nilai dari nama
        const nama = document.getElementById('nama').value;
        
        alert(`Terima kasih, ${nama}! Pendaftaran Anda telah kami terima. Teknisi kami akan segera menghubungi Anda.`);
        
        // jika sudah submit form, maka semua yang di isi akan direset ke semula atau dari 0 lagi dah
        form.reset();
        sectionFormulir.style.display = 'none';
        sectionCekCoverage.style.display = 'none';
        hasilCoverage.innerHTML = "";
        inputAlamat.value = "";
    });

});