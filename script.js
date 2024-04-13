var blankobj=[]
const obj={};
function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    if (firstName == "") {
        alert("First Name is required");
    }
    if (lastName == "") {
        alert("Last Name is required");

    }

    var email = document.forms["myForm"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Email Not a valid e-mail address");
    }
    var number = document.forms["myForm"]["number"].value;
    if (number.length <= 9 || 11 <= number.length) {
        alert("Phone Number is required");

    }
    var radio = document.myForm.radio.value;
    if (radio == "") {
        alert("Gender Is Required");
    }

    var checkedValue = document.myForm.chea.checked;

    if (checkedValue == false) {
        alert("Project Submition Is Required");
        var abc = document.getElementById("cheakboxYes").checked = false;
        document.getElementById("cheakboxYes").innerHTML = abc;
        checkedValue == "";
    }

    var drop = document.getElementById("dropdown").value;
    if (drop == "") {
        alert("Division Is Required");

    }

    var Selecteddate = document.getElementById("date").value;
    if (Selecteddate == "") {
        alert("Date Is Required");

    }

    var SelectedTime = document.getElementById("time").value;
    if (SelectedTime == "") {
        alert("Time Is Required");

    }

    var SelectedUrl = document.getElementById("url").value;
    const url = "abc";
    if (SelectedUrl == !url || SelectedUrl == "") {
        alert("URL Is Not Valide");
    }

    var fuData = document.getElementById('file');
    var FileUploadPath = fuData.value;

    if (FileUploadPath == '') {
        alert("Please upload an image");

    }
    else {
        var Extension = FileUploadPath.substring(
            FileUploadPath.lastIndexOf('.') + 1).toLowerCase();

        if (Extension == "gif" || Extension == "png" || Extension == "bmp"
            || Extension == "jpeg" || Extension == "jpg") {
        }

        else {
            alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");

        }
    }


    let myObj = {
        "firstName": firstName, "lastName": lastName, "email": email,
        "number": number, "project": radio, "language": checkedValue,
        "division": drop, "date": Selecteddate, "time": SelectedTime,
        "url": SelectedUrl, "img": FileUploadPath};

    let aarray=JSON.parse(localStorage.getItem("firstform"));
    blankobj.push(myObj);
    console.log("newObj",blankobj);
        localStorage.setItem("firstform",JSON.stringify(blankobj));
    


    // var myArray = [];

    // myArray.push(myObj);

    // let array= JSON.stringify(myArray);
    
    // alert("Myarrray" + array);

    // var oldarray=localStorage.getItem("myArray");
    // console.log("oldarray",oldarray);
    
    // localStorage.setItem("myArray", array);

    // var first = JSON.parse(localStorage.getItem("myArray"));
    // console.log("jhdksd",first);


          
}