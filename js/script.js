function hitungayam() {
     var alasi = parseFloat(document.getElementById("alasi").value);
     var tinggian = parseFloat(document.getElementById("tinggian").value);
     var sisi_C = parseFloat(document.getElementById("sisi_C").value);
     var luasa =  alasi + tinggian + sisi_C ;
     document.getElementById("keliling").value = luasa;
 }
 
 function hitungluas() {
     var alas = parseFloat(document.getElementById("alas").value);
     var tinggi = parseFloat(document.getElementById("tinggi").value);
     var luas = (alas * tinggi) * 0.5;
     document.getElementById("luas").value = luas;
 }
 
 function resetluas() {
     var alas = document.getElementById("alas").value="";
     var tinggi = document.getElementById("tinggi").value="";
     var luas = document.getElementById("luas").value="";
 }
 
 function resetkeliling() {
     var alasi = document.getElementById("alasi").value="";
     var tinggian = document.getElementById("tinggian").value="";
     var sisi_C = document.getElementById("sisi_C").value="";
     var keliling = document.getElementById("keliling").value="";
 }