# Feedback Developer

Tecrübeli bir insan ile edilecek 5 dk'lik sohbet yalnız başınıza öğrendiğiniz 1 günlük eğitimden faydalıdır.Çünkü hayatta en pahalı şey tecrübedir. Kazanmak için kaybetmek gerekir.
Çok uzun zamandır medium'a içirik üretmediğimi fark edip bu yazıyı hazırlamaya karar verdim.Peki neden böyle bir başlık seçtim.Bu konu üzerinde durmak istiyorum çünkü başlık bir developerin lifecycle da sürekli karşılaşacağı bir sürecin yazıya dökülmesi hali olacak.
Aldığım feedbackler(geri bildirimler) ile oluştuduğum web sayfasının geliştirmesini yapacağım. Geri bildirim önemlidir. Hem görülmeyen görülür hem de gelişim bir sonraki evreye geçer yani konfor alanında çıkılıp zorunlu öğrenime geçilir. Bu öğrenin meşekkalidir. İçerisinde mutlak doğruyu aramayan kişiler bu yola adım dahi atmaz. Bazıları ise bu yolda vaz geçip küfür edip geri döner kimileri de uzun uğraşlar sonucu tecrübeye layık olur. Evet bu anlattığım iş bir metefordan ibaret olsada şunu sylemeliyim öğrenme başlı başına sancılı bir süreçtir. Bu kadar uzun gizirgahı burada bitirelim ve aynı düşünce ile hemhal olan arkadaşlar ile yolumuza devam edelim.

## Aldığım feedbackler
 
 Yaptığım portfolio sitesine geri bildirim yapılmasını içerisinde bulunduğum bir developer topluluğundan rica ettim. Onlarda sağolsunlar. Yaparsam güzel olacağını düşündükleri şeyleri geribildirim yoluyla dile gelirdiler.
 https://umutpolatportfolio.netlify.app/
 
 - Mobile'de ekteki aşağıdaki kısım biraz daha ferahlayabilir. Bence biraz sıkışık olmuş. Desktop'ta da benzer şekilde. (ilk görsel)
 - Contact me kısmının da mobile tarafta düzenlenmesi gerekiyor bence. (ikinci görsel)
 - My Project sayfasında projeler için küçük özetler ve isim bulundurabilirsiniz. Bence daha açıklayıcı olmuş olur.
 - About Me sayfasındaki header görseli yazının biraz okunaklığı azaltmış gibi geldi bana. Biraz daha flu olabilir belki ya da yazı fontuyla oynayabilirsiniz.
 - Bazı kısımlardaki yazılar çok küçük
 - Responsive yapısında dikkat etmek gereken yerler var.
 - img boyutları çok büyük bunları comparasor edilmesi gerekiyor.
 - Sayfalar arası geçişte loading effect kullanılabilir.
 - CSS dosyası minify edilmediği için sayfa geç yüleniyor.
 
 ### Şimdi bunları tek tek kontrol edip düzenleyelim.

<div>
<img src="./feedback img/image1.png" width="500" height="1000"/>
<img src="./feedback img/image2.png" width="500" height="1000"/>
</div>

İlk olarak şunu belirtmem gerekir web sitesinin templetini ben yapmadım hazır alıp içini kendime göre dizayn ettim. Bazı noktalara mühahale etmem gerektiğini biliyordum. Ama gözden kaçan noktaları da feedback sonrası düzeltmek istedim.Sass ile yazılan bu projede dikkatimden kaçan bir nokta width ve height değerlerine sabit bir sayı verilmesi. Projelerinizde bunu yapmayın 
 aksi halde responsivelik adına çok fazla geri dönüş alırsınız.

<br/>

![img](feedback%20img/fb02.png)<br/>
![img](feedback%20img/fb03.png)<br/>

Padding kullanarak bu durumu düzeltebilirsiniz.Genellikle ferahlık için padding kullanılır.

![img](feedback%20img/fb04.png)<br/>

Bende bu şekilde ufak dokunuşlar ile durumu düzeltmeye çalıştım.Burada önemli olan nokta ufak ufak dokunuşlar ile yol almak!

![img](feedback%20img/fb05.png)<br/>

Mobil tarafıda bu şekilde düzelttim.Burada akıllara su soru gelebilir. Sabit değer neden verdin. Tabi dikkat edilinebilir ben her şeye yüzdelik dilim verip, web sitemi öyle dizayn edicem diyene saygım sonsuz ama 50px lik iconlar genellik ile site responsivligine etkisi çok az olur. Bundan dolayı iconların yüksekli ve genişlik değerlerini sabit verdim. Bazen responsive ligi etkilebilir bu durumlarda ise bu farklı şekillerde müdahale edilinebilir.
 
 Contact me kısmındaki yazıyı mobile cihazlara uygun hale getirdim tabi bununiçin @media kullandım. ve flex drection: column yapıp üstesinden geldim.

<br/>

![img](feedback%20img/fb01.png)

<br/>

Tabi burada değinmem gereken bir kaç nokta var. Ben Bozulmayı 600px de müdahale ettim.
 
 - Mobile devices – 320px — 480px.
 - iPads, Tablets – 481px — 768px.
 - Small screens, laptops – 769px — 1024px.
 - Desktops, large screens – 1025px — 1200px.
 - Extra large screens, TV – 1201px, and more.
 
 Bu breakpointleri referans alarak sizde kendi projelerinizi geliştirebilirsiniz.
 
 Bu noktada https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/ yazıyı okumanızı öneririm.

- My Project sayfasında projeler için küçük özetler ve isim bulundurabilirsiniz. Bence daha açıklayıcı olmuş olur.
 Burada açıklama yapmak yerine kullanıcının merakını diri tutup github ve projenin canlı halini görsel içerisine gömdüm.
 
 - About Me sayfasındaki header görseli yazının biraz okunaklığı azaltmış gibi geldi bana. Biraz daha flu olabilir belki ya da yazı fontuyla oynayabilirsiniz.
 Evet okunaklığı gerçekten çok kötü fontunu değiştirmek gerçekten faydalı olabilir.
 https://fonts.google.com/specimen/Poppins
 Bu şekilde bir font kullanıp font-weight: bold; line-height: 1.4rem; ile daha iyi bir hale getirdim.
 
 -img boyutları çok büyük bunları comparasor edilmesi gerekiyor.
 Bu nokta gerçekten çok önemli çünkü bu direkt olarak sayfa yüklenme hızına etki ediyor.

![img](feedback%20img/imgFb.png)<br/>

Sitenin performasını direkt etkileyecek bir müdahale olduğunu bilmenizde fayda var.
 https://tinypng.com/ den sizlerde deneyimleye bilirsiniz.
 Tabi bu performan olayı gerçekten çok önemli bu konuda sizlere mutlaka okumanız gereken
 https://medium.com/@mstfbiccer/web-sitem-ne-kadar-performansl%C4%B1-1bd950d09fac ve https://mstfbiccer.medium.com/web-sitem-ne-kadar-ya%C5%9Fayacak-841105e7d03 yazılarını öneriyorum.
 
 
 - Sayfalar arası geçişte loading effect kullanılabilir.
 ### Bir sonra ki geribildirimim bu şekildeydi.
 Saylalar arası geçişe bir transition uygulayıp internet hızından dolayı yaşanacak gecikmelere de preloader ile çözüm bulabilirim diye düşünüp. Geliştirmeyi yaptım.

<br/>

![img](feedback%20img/transition.png)<br/>
![img](feedback%20img/pre01.png)<br/>
![img](feedback%20img/pre02.png)<br/>
![img](feedback%20img/pre04.png)<br/>

- CSS dosyası minify edilmediği için sayfa geç yüleniyor.

### Burada yine sayfanın performansı ile ilgili bir geliştirme yapmam lazım.

![img](feedback%20img/network.png)<br/>

Burada da görülebileceği gibi benim sitemin performansını etkiliyen en önemli ikinci sebep main.css boyutu bunu minify etmem gerek altında ki ise fontawesome bundle ona şuan için yapacağım bir şey yok fontawesome cdn ninden çekme süresiyle alakalı ben css minify edicem.Ayrıca büyük projelerde kullanılıcak olan iconlar cdn de çekilmez cdn olayı özetle şöyle açıklıyayım. ben bir bundle yardımıyla font ikonlarını fontawesome sevlerlerinden istiyorum. Server performasını uzaklık yakınlık request type ve bir çok nedene bağlı olduğu için genellik ile büyük projelerde iconlar svg türünde proje içerisine tutulur ve daha yönetilebilir bir halde olması istenir.Biz main.css mızı minify etmenin yoluna bakalım.
 Burada su noktaya dikkat çekmek istiyorum. Bu işlemi production çıkmadan önce yapmanız gerek yoksa bir şey değiştiricem diye tekrar unminify etmeniz gerekebilir. 
 Gerçi Sass kullandığımız için bu projede watch sass dediğimiz zaman bizim için unminify edicek ama olsun.
 Bunu de belirmek istedim.
 Sass kullanırken scss izlemeyi kapatmayı unutmayın!

![img](feedback%20img/minifycss.png)<br/>
![img](feedback%20img/network.png)<br/>
![img](feedback%20img/minifycss02.png)<br/>

Bunu yaptıktan sonra aslında bu olayın bu şartlar altında çok da verimli olmadığını gördüm.Burdan su sonucu çıkardım bunun için en iyi yöntem webpack veya gulp gibi minify kütüphanelerini kullanmak daha faydalı olabilir. Tabi bu proje için böyle bir şey yapmayacağım . Denemeyi okuyucunun insiyatifine bırakıyorum. Şöyle bir toparlayalım.
 Sitemizin performasını bir çok şey etkiliyebilir bunların üstesinden gelmek ve iyi bir site oluşturma için belli bir birkime ihtiyacımız var. Buda ancak çalışarak elde edeceğimiz bir maharet bu nedenle okumanız için https://blog.hubspot.com/website/how-to-optimize-website-speed blog yazısını buraya bırakıyorum okuyarak demek istediğim şeyi daha iyi anlayabilrisiniz.
 
 Genel değerlendirme
 Başarılı bir insan olmak istiyorsak bu söyleyeceğim bütün meslek dalları için geçerli başkalarının değerlendirmelerine kulak arkası etmeden ama çok da güvenmeden dengeli bir şekilde değerlendirip ihtiyacımız kadarını almak bizi geçekten on plana çıkartacağına inanıyorum. Bugün aldığım geri dönüşler ile çok değerli şeyler öğrenip bunları okuyucularım ile paylaşma fırsatı buldum.
 Yaptığım değişikleden sonra web sitesi:
 https://portfoliafterfeedback.netlify.app/contact.html
 Umarım sizlerde çok şey katmışımdır bir sonraki yazıma kadar kendinize iyi bakıp bol bol çalışın...
