function test_it(entry) {
 

    var pyt_10;
       if (entry.value!=null && entry.value.length!=0) {
       entry.value=""+ eval(entry.value);
       }
       computeForm(entry.form);
       }
   
       function computeForm(form) {
       var total=0
       
       for (var count=0; count<4; count++)
       {
       if (form.a[count].checked){
       var total=total+parseInt(form.a[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.b[count].checked){
       var total=total+parseInt(form.b[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.c[count].checked){
       var total=total+parseInt(form.c[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.d[count].checked){
       var total=total+parseInt(form.d[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.e[count].checked){
       var total=total+parseInt(form.e[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.f[count].checked){
       var total=total+parseInt(form.f[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.g[count].checked){
       var total=total+parseInt(form.g[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.h[count].checked){
       var total=total+parseInt(form.h[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.i[count].checked){
       var total=total+parseInt(form.i[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.j[count].checked){
       var total=total+parseInt(form.j[count].value);
       pyt_10 = form.j[count].value;
       }
       }
       
   
       if (total > 12 || pyt_10 > 1){ alert('Uzyskany wynik  Edynburskiej Skali Depresji Poporodowej  wskazuje na wyst??powanie ryzyka depresji, wi??c wskazana jest konsultacja z lekarzem lub psychologiem. Diagnoza depresji mo??e by?? postawiona przez specjalist?? wy????cznie na podstawie pe??nego wywiadu i oceny stanu psychicznego. Nie zwlekaj i skonsultuj si?? jak najszybciej z  psychiatr??, lekarzem rodzinnym lub psychologiem. Tylko specjalista mo??e zweryfikowa?? wynik testu, postawi?? diagnoz?? depresji lub wykluczy?? j??.') }
       else { alert('Uzyskany wynik nie wskazuje na prawdopodobie??stwo wyst??powania depresji. Jest to jednak narz??dzie pomocnicze i je??li podejrzewasz, ??e mo??esz mie?? depresj??, najlepiej skonsultuj si?? z psychiatr??, lekarzem rodzinnym lub psychologiem. Tylko specjalista mo??e zweryfikowa?? wynik testu: rozpozna?? lub wykluczy?? depresj??.')}
   
       }