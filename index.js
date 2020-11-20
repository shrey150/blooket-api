const SET_VAL_URL = "https://www.blooket.com/api/firebase/setval";
const KICK_URL = "https://www.blooket.com/api/firebase/client";

let gameId = null;
let name = null;

$(() => {
    pics.forEach(n => $("#animalPic").append(`<option value="${n}">${n}</option>`));
});

$("#joinForm").submit(e => {

    e.preventDefault();

    gameId = $("#gameId").val();
    name = $("#name").val();

    $("#setup").hide();
    $("#controls").show();

});

$("#setValForm").submit(e => {

    e.preventDefault();

    const animalPic = $("#animalPic").val();
    const newScore = $("#newScore").val();

    const data = {
        path: `${gameId}/c/${name}`,
        val: {
            b: animalPic,
            g: parseInt(newScore)
        }
    };

    $.ajax({
        url: SET_VAL_URL,
        type: "PUT",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        success: () => console.log("Set score successfully"),
    });

});

$("#kickForm").submit(e => {

    e.preventDefault();

    const kickName = $("#kickName").val();

    $.ajax({
        url: `${KICK_URL}?id=${gameId}&name=${kickName}`,
        type: "DELETE",
        success: () => console.log("Kicked player successfully"),
    });

});