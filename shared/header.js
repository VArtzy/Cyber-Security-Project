document.querySelector(".header").innerHTML = `
        <!--header-->
        <div class="medsos">
            <div class="container">
                <ul>
                    <li><a href="/">Beranda</a></li>
                    <li><a href="#qc">Quick Count</a></li>
                    <li><a href="politik.html">Politik</a></li>
                    <li><a href="news/ekonomi">Ekonomi</a></li>
                    <li><a href="">Teknologi</a></li>
                    <li><a href="">Olahraga</a></li>
                    <li><a href="">Hiburan</a></li>
                    <li><a href="">Tentang</a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>    
                </ul>
            </div>
        </div>
`

setTimeout(() => {
    document.body.innerHTML += `
    <!--service-->
            <section class="service" id="service">
                <div class="container">
                    <h3 style="font-size: 2.5rem;">70% Makhluk Tata Surya Mempercayai Inews Sebagai Sumber Primernya</h3>
                    <div class="box">
                        <div class="col-3">
                            <div class="icon"><i class="fa-solid fa-mobile"></i></div>
                            <h4>FLEKSIBEL</h4>

                        </div>
                        <div class="col-3">
                            <div class="icon"><i class="fa-solid fa-globe"></i></div>
                            <h4>TERPERCAYA</h4>

                        </div>
                        <div class="col-3">
                            <div class="icon"><i class="fa-solid fa-edit"></i></div>
                            <h4>SUMBER PRIMER & DETIL</h4>

                        </div>
                        <div class="col-3">
                            <div class="icon"><i class="fa-solid fa-chart-bar"></i></div>
                            <h4>AKSESIBEL</h4>

                        </div>
                    </div>

            </section>
<!--footer-->
            <footer>
                    <small>Copyright &copy; 2024 - Inews, All Rights Reserved</small>
            </footer>
`
}, 1)
