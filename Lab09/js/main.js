// const checkboxes = document.querySelectorAll('input[name="color"]:checked');
// let radioValue = document.querySelector('input[name="gender"]:checked').value;
alert( radioValue);
function  print(event){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;
    // alert(strUser);
    // let gender = document.querySelectorAll('input[name="gender"]:checked').values;
    var elem = document.getElementsByName('gender');
    let gender;
    for(i = 0; i < elem.length; i++) {
        if(elem[i].checked)
        gender = elem[i].value
    }
    // alert(gender);

    let html = `
    <h1>${document.cv.last_name.value} CV</h1>
    <h3>ЕРӨНХИЙ МЭДЭЭЛЭЛ:</h3>
    <!-- ЕРӨНХИЙ МЭДЭЭЛЭЛ: -->
    <ul>
      <li><strong>Ургийн овог:</strong>&emsp;&emsp;&emsp; &emsp;${document.cv.family_name.value}</li>
      <li><strong>Овог:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${document.cv.last_name.value}</li>
      <li>
        <strong>Нэр:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        ${document.cv.first_name.value}
      </li>
      <li>
        <strong>Харьяалал:</strong> &emsp;&emsp;&emsp;&emsp;&emsp;${strUser}
      </li>
      <li>
        <strong>Төрсөн огноо:</strong>&emsp;&emsp;&emsp;&emsp; 
        ${document.cv.birth_date.value}
      </li>
      <li>
        <strong>Хүйс:</strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
        ${gender}
      </li>
     
      <li>
        <strong>И-мэйл:</strong> &emsp;
        &emsp;&emsp;&emsp;&emsp;&emsp; ${document.cv.mail.value}
      </li>
      <li><strong>Утасны дугаар:</strong> &emsp;&emsp;&emsp;${document.cv.phone.value}</li>
    </ul>
    <!-- <br /> -->
    <!-- МИНИЙ ТУХАЙ -->
    <h3>МИНИЙ ТУХАЙ</h3>
    <ul>
      <li>
        <p>
        ${document.cv.texts.value}
        </p>
      </li>
    </ul>

    `;

    document.getElementById("cv").innerHTML = html;
    event.preventDefault(); 
}