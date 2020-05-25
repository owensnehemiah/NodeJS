"use strict"

$(document).ready(function(){
    // THE JSON ARRAY.
    
    // $.getJSON( "testdate.json", function( data ) {
    //     format:"json"
    // })
    // .done(function( json ) {
    var items = [{
        "id": 1,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
        }, {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
        }, {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
        }, {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
        }];
        
        var results = []
        // var data = JSON.parse(items)
        // $.each( items, function( key, val ) {
        //     items.push( "<li id='" + key + "'>" + val + "</li>" );
        // });
    
        // $( "<ul/>", {
        // "class": "my-new-list",
        // html: items.join( "" )
        // }).appendTo( "body" );

        var ele = document.getElementById('testselect');
        for (var i = 0; i < items.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            ele.innerHTML = ele.innerHTML +
                '<option value="' + items[i]['gender'] + '">' + items[i]['first_name'] + '</option>';
        }
    // })
    // .fail(function( jqxhr, textStatus, error ) {
    //     var err = textStatus + ", " + error;
    //     console.log( "Request Failed: " + err );
    // })
})

function show(ele) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById('msg');
  msg.innerHTML = 'Selected Bird: <b>' + ele.options[ele.selectedIndex].text + '</b> </br>' +
      'ID: <b>' + ele.value + '</b>';
}