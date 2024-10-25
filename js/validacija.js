
    //VALIDACIJA FOMRE

function validacijaSlova(tekst){
    var slovaFormat = /^[A-Za-z]+$/; 
    // /IZRAZ/ OVAKO PISE IZRAZ ZA POREDJENJE(REGEX)
    //^ pocetak $ kraj stringa
    //[]u rasponu od A DO Z ako bi A-Z a-z ukljucivao bi i " "
    //+ moze da sadrzi bilo koji karakter iz klase []   
    if(tekst.value.match(slovaFormat) || tekst.value==""){//  || tekst.value="" da ne izbaca stalno dok unosis prompt
                  return true;
    }else{
                  alert('Please enter a valid first or last name.');
                  return false;
           }
    } 
    function validacijaEmail(mail){
           var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           if(mail.value.match(emailFormat) || mail.value==""){
                  return true;
           }else{
                  alert('Please enter a valid email.');
                  return false;
           }
    } 
    //SUBMIT DUGME
    //sve treba da bude popunjeno da bi radilo
    //? kako se na dr nacin stavlja za svako da bude obavezno:kod svakog required
    function provera(delo,ime, prezime, email, poruka)   {
           if(ime.value!="" && prezime.value!="" && email.value!="" && poruka.value!=""){
                  alert("Thank you for your message "+
                    ime.value + " " + prezime.value+". \n" +"We are looking forward on reading your review of "+delo.value+" part of Narnia books.");
                  return true;//ime.value i ostalog je vr unesenog, dok pol.value smo MS i Mr.defin jer imamo izbor ne kucas sama
           }else{
                  alert("All fields are required!");
                  return false;
           }
    }
   
    
