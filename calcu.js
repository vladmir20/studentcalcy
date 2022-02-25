
var row = 1;
const calcy = () =>{
    let name = document.getElementById('name').value;
    let adv = document.getElementById('adv').value;
    let est = document.getElementById('est').value;
    let osy = document.getElementById('osy').value;
    let ede = document.getElementById('ede').value;
    
    let grades = "";
    let PF = "";

    if (!name ||!adv || !est || !osy || !ede){
      alert("Sorry for inconvinience but please Fill all the boxes!! ");
      return;
    }
  
    if(adv<40 || est<40 || osy<40 || ede<40){
      document.getElementById('showData').innerHTML = ` SORRY BUT YOU ARE FAILED`
      return;
    }
       

        let totalGrades = parseFloat(adv) + parseFloat(est) + parseFloat(osy) + parseFloat(ede);
        
      
        let perc = (totalGrades/400) * 100;
        
      
        
      
        if(perc <= 100  && perc >= 80){
          grades = 'A';
        }else if(perc <= 79  && perc >= 60){
           grades = 'B';
        }else if(perc <= 59  && perc >= 40){
           grades = 'C';
        }else{
           grades = 'F';
        }
        
        if(perc >= 39.5){
           PF = "Pass";
          document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are ${PF}. `
        }
        else{
           PF = "Fail"
          document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are ${PF}. `
        }
      
        
        var display = document.getElementById("display");
        var newRow = display.insertRow(row);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);


        cell1.innerHTML = name;
        cell2.innerHTML = adv;
        cell3.innerHTML = est;
        cell4.innerHTML = osy;
        cell5.innerHTML = ede;
        cell6.innerHTML = totalGrades;
        cell7.innerHTML = perc;
        cell8.innerHTML = grades;
        cell9.innerHTML = PF;
        row++;

}

function handleChange(input){
    if (input.value < 0  )
    { input.value ="";
      alert("Fill marks betn 0 to 100 :)");
    }
    if (input.value > 100){ input.value = "";
    alert("Fill marks betn 0 to 100 :)");
    }
  }
  


  
  