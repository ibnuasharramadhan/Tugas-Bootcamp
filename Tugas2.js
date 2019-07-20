//1. Buat masing-masing 2 contoh penggunaan if, if-else, if-else-if, if-else-if-else, dan if bersarang

//if
    //a.
    if (10 < 20){
        console.log("Jawaban Benar");
    };

    //b
    if (100 != 200){
        console.log("Betul Betul Betul");
    };


//if-else
    //a.
    var nama = ("Ibnu");

    if (nama === "Ibnu"){
        console.log("Nama Benar Cuy!!");
    }else{
        console.log("Nama Salah Cuy");
    };

    ///b.
    if(true){
        console.log("Benar");
    }else{
        console.log("Salah");
    };

//if-else-if
    //a.
    var timun = "Timun Itu Sayur";

    if (timun != "sayur") {
    console.log("Anda Salah");
    } else if (timun = "sayur") {
    console.log("Anda Benar")
    };
    
    //b.
    var hargaMotor = 5000;

    if (hargaMotor >= 5000) {
        console.log("Anda Dapat Membelinya");
    } else if (hargaMotor <= 5000) {
        console.log("Anda Tidak Dapat Membelinya");
    };

//if-else-if-else
    //a.
    var hargaSayur = 4000
    var jmlUang = 5000
    
    if(hargaSayur === jmlUang){
        console.log("Anda Dapat Membeli Sayur Tersebut");
    }else if (hargaSayur < jmlUang){
        console.log("Anda Dapat Membeli Sayur Tersebut");
    }else{
        console.log ("Duit Kamu Kurang GAIS!!");
    };

    //b.
    var kecepatanMotor = 100
    var kecepatanMobil = 200

    if(kecepatanMobil < kecepatanMotor){
        console.log("Motor Anda Ngebut");
    }else if(kecepatanMobil != kecepatanMotor){
        console.log("Motor Anda Ngebut");
    }else{
        console.log("Motor Anda Lambat");
    };

//if Bersarang
    //a.
    var date = 21 ;
    var tanggal = 20 ;

    if (date == 21) {
        if (tanggal == 20) {
        console.log("Hari Ini Tanggal 21");
        }
    } else {
        console.log("Hari Ini Tanggal Berapa Cuy ??");
    };

    //b.
    var username = ("ibnu");
    var password = ("123");

        if(username == "ibnu"){
            if(password == "123"){
                console.log("Selamat datang pak bos!");
            } else {
                console.log("Password salah, coba lagi!");
            }
        } else {
            console.log("Username Dan Password Tidak Terdaftar");
        };











//2. Buat 2 contoh penggunaan looping dgn while yg dikombinasikan dengan if-else
        //a.
        var tugas = "pusing"; 

        if (tugas == "pusing"){
            var angka = 0;
            while (angka <= 10){
                console.log(angka + ". KERJAIN BOSS!");
                angka++;
            }
        } else {
            console.log("Jangan di Di diemin");
        }

        //b.
        var Cinta = "Ditolak";

        if (Cinta == "Terima"){
            var angka = 0;
            while (angka < 2){
                console.log("Loppingan nya" + angka);
                angka++;
            }
        } else {
            console.log("Maaf Anda Kurang Mapan Boss!");
        }
        

//3. Buat contoh penggunaan switch-case dan for-loop di
        //switch-case
        var warna = "merah";
 
        switch (warna){
            case "hitam":
                console.log("warna hitam");
                break;
            case "merah":
                console.log("Warna merah");
                break;
            case "hijau":
                console.log("Warna hijau");
                break;
            default:
                console.log("Warna tidak terdeteksi");
                break;
};	    

        //for-loop
        var i;
        for (i=1;i<=10;i=i+1){
            console.log("TI/4B/Malam DIGIDAW");
        };