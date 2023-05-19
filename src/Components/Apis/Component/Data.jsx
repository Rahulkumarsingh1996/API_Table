const CustomerArray = [
    {
        id: 1,
        customer_name: "Rahul",
        customer_email: "sample20@gmail.com",
        address: "Bihar",
    },
    {
        id: 2,
        customer_name: "kumar",
        customer_email: "rolu20@gmail.com",
        address: "india",
    },
    {
        id: 3,
        customer_name: "Rahul",
        customer_email: "sample20@gmail.com",
        address: "Bihar",
    },
    {
        id: 4,
        customer_name: "Rahul",
        customer_email: "movy20@gmail.com",
        address: "Aus",
    },
    {
        id: 5,
        customer_name: "Rahul",
        customer_email: "sample20@gmail.com",
        address: "Bihar",
    },
];

//bind json to html table
bindjsondata();

function bindjsondata() {
    document.getElementById("tblbody").innerHTML = "";
    CustomerArray.forEach(function (item, index) {
        var btnEditId = "btnedit" + item.id;
        var btnDeleteId = "btndelete" + item.id;
        function btnDeleteId() {
            document.getElementById("btndelete1").style.marginLeft = "5px";
        }
        var tableRow =
            "<tr Id='" +
            item.id +
            "'  data-CustomerID='" +
            item.id +
            "'  data-CustomerName='" +
            item.customer_name +
            "' data-email='" +
            item.customer_email +
            "' data-Address='" +
            item.address +
            "'>" +
            "<td className='td-data'>" +
            item.id +
            "</td>" +
            "<td className='td-data'>" +
            item.customer_name +
            "</td>" +
            "<td className='td-data'>" +
            item.customer_email +
            "</td>" +
            "<td className='td-data'>" +
            item.address +
            "</td>" +
            "<td className='td-data'>" +
            "<button id='" +
            btnEditId +
            "' className='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" +
            item.id +
            ")'><i className='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
            "<button id='" +
            btnDeleteId +
            "' className='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" +
            item.id +
            ")'><i className='fa fa-trash' aria-hidden='true' >Delete</button>" +
            "</td>" +
            "</tr>";
            document.getElementById("tblbody").innerHTML += tableRow;
    });

    //Add tr adding recoard in the table at the bottom

    var AddRow=
    "<tr>" +
    "<td className='td-data'></td>"+
    "<td className='td-data'><input type='text' id='txtCustomerName' placeholder='name..'/></td>"+
    "<td className='td-data'><input type='email' id='txtemail' placeholder='email..'/></td>"+
    "<td className='td-data'><input type='text' id='txtAddress' placeholder='Address..'/></td>"+
    "<td className='td-data'>"+
    "<button id='btnaddCustomer' onclick='addCustomer' class='btn btn-success'><i className='fa fa-plus-circle aria-hidden='true'></i>Add</button>"+
    "</td>" +
    "</tr>" ;
    document.getElementById("tblbody").innerHTML +=AddRow;
}

function CreateUniqueCustomerID(){
    //generate unique number for id
    const ID = Date.now();
    return ID; 
}

function addCustomer(){
    var CustomerID = CreateUniqueCustomerID();
    var CustomerName =document.getElementById("txtcustomer").value;
    if (!CustomerName){
        alert("please enter name..!");
        return false;
    }
    var email = document.getElementById("txtemail").value;
    if(!email){
        alert("please enter email..!");
        return false;
    }
    var emailfilter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(email)) {
    alert("Please enter a valid email address!");
    return false; 
}

var address = document.getElementById("txtAddress").value;
if(!address){
    alert("please enter address");
    return false;
}

//createing object and push to json array
CustomerArray.push({
    id: CustomerID,
    customer_name:CustomerName,
    customer_email:email,
    address:address,

});

    document.getElementById("txtCustomerName").value ="";
    document.getElementById("txtemail").value ="";
    document.getElementById("txtaddress").value ="";

    bindjsondata();
}


function showEditRow(CustomerID){
    //select tr whose button was clicked
    var CustomerRow = document.getElementById(CustomerID);

    //return array of element with class "row-data" in customer Row
    var data = CustomerRow.querySelectorAll(".td-data");

    var CustomerID = data[0].innerHTML;
    var CustomerName = data[1].innerHTML;
    var Customeremail = data[2].innerHTML;
    var address = data[3].innerHTML;

    data[0].innerHTML =
 '<input name="txtupdate_CustomerID"  disabled id="txtupdate_CustomerID" value="' + CustomerID + '"/>';

 data[1].innerHTML =
'<input name="txtupdate_CustomerName" id="txtupdate_CustomerName" value="' + CustomerName + '"/>';

 data[2].innerHTML =
 '<input name="txtupdate_email" id="txtupdate_email" value="' + Customeremail + '"/>';

 data[3].innerHTML =
 '<input name="txtupdate_Address" id="txtupdate_Address" value="' + address + '"/>';

data[4].innerHTML =
"<button class='btn btn-primary btn-xs btn-updateCustomer' onclick='updateCustomers(" + CustomerID + ")'>" +

 "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
"<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelUpdate(" +

 CustomerID +
 ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>" +
"<button class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" +

 CustomerID +
 ")'>" +
"<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>";

}

function cancelUpdate(CustomerID){
    var btneditId = "btnedit" + CustomerID;
    var btndeleteId = "btndelete" + CustomerID;

    //select tr of whose button was clicked

    var CustomerRow = document.getElementById(CustomerID);
    var data = CustomerRow.querySelectorAll(".td-data");

    var CustomerName = CustomerRow.getAttribute("data-customerName");
    var address = CustomerRow.getAttribute("data-Address");
    var email = CustomerRow.getAttribute("data-email");


    data[0].innerHTML = CustomerID;
    data[1].innerHTML = CustomerName;
    data[2].innerHTML = email;
    data[3].innerHTML = address;


    var actionbtn =
   "<button id='" +

   btneditId +
   "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" +
   CustomerID +
    ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
    "<button id='" +
    btndeleteId +
    "'class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" +
    CustomerID +
    ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>";
    data[4].innerHTML = actionbtn;
}

function deleteCustomerRow(CustomerID){
    //remove object from json array

    CustomerArray.splice(
        CustomerArray.findIndex((a) => a.id === CustomerID),
        1
    );
    bindjsondata();
}

function updateCustomer(CustomerID){
    //select tr of whose button was clicked

    var CustomerRow = document.getElementById(CustomerID);
    var data = CustomerRow.querySelectorAll('.td-data');

    var CustomerName = data[1].querySelector("#txtupdate_CustomerName").value;
    var email = data[2].querySelector("#txtupdate_email").value;
    var address = data[3].querySelector("#txtupdate_Address").value;

    //updateing json object using filter

    var CustomerObj = CustomerArray.filter((x)=>x.id ==CustomerID).pop();
    if(CustomerObj != null){
        CustomerObj.customer_name = CustomerName;
        CustomerObj.customer_email = email;
        CustomerObj.address = address;
    }
    bindjsondata();
}

export default CustomerArray;
