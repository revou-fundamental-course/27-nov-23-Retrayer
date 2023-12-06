function hitungluas() {
     alas = document.getElementById("alas").value;
     tinggi = document.getElementById("tinggi").value;
     luas = (alas * tinggi) * 0.5;
     document.getElementById("luas").value = luas;
}

function resetluas() {
     alas = document.getElementById("alas").value="";
     tinggi = document.getElementById("tinggi").value="";
     luas = document.getElementById("luas").value="";
}

function hitungkeliling() {
     sisi_A = document.getElementById("sisi_A").value;
     sisi_B = document.getElementById("sisi_B").value;
     sisi_C = document.getElementById("sisi_C").value;
     keliling = sisi_A*sisi_B*sisi_C;
     document.getElementById("keliling").value= keliling;
}

function resetkeliling() {
     A = document.getElementById("sisi_A").value="";
     B = document.getElementById("sisi_B").value="";
     C = document.getElementById("sisi_C").value="";
     keliling = document.getElementById("keliling").value="";
}