let eye = document.getElementById("eye");
let eye_slash = document.getElementById("eyes");
let log = document.getElementById("submit");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let user_error = document.querySelector(".user_error");
let pass_error = document.querySelector(".pass_error");
let account = document.getElementById("first");
let Sign_ip = document.getElementById("Sign");
let main = document.getElementById("main_page");
let play_button = document.getElementById("play");
let pause_btn = document.getElementById("pause");
let play_button2 = document.getElementById("play2");
let pause_btn2 = document.getElementById("pause2");
let play_button3 = document.getElementById("play3");
let pause_btn3 = document.getElementById("pause3");
let play_button4 = document.getElementById("play4");
let pause_btn4 = document.getElementById("pause4");
let play_button5 = document.getElementById("play5");
let pause_btn5 = document.getElementById("pause5");
let like_button = document.getElementById("like");
let liked_button = document.getElementById("liked");
let like_button2 = document.getElementById("like2");
let liked_button2 = document.getElementById("liked2");
let like_button3 = document.getElementById("like3");
let liked_button3 = document.getElementById("liked3");
let like_button4 = document.getElementById("like4");
let liked_button4 = document.getElementById("liked4");
let like_button5 = document.getElementById("like5");
let liked_button5 = document.getElementById("liked5");
// let like_button6 = document.getElementById("like6");
// let liked_button6 = document.getElementById("liked6");
// let like_button7 = document.getElementById("like7");
// let liked_button7 = document.getElementById("liked7");
// let like_button8 = document.getElementById("like8");
// let liked_button8 = document.getElementById("liked8");
// let like_button9 = document.getElementById("like9");
// let liked_button9 = document.getElementById("liked9");
// let like_button10 = document.getElementById("like10");
// let liked_button10 = document.getElementById("liked10");
// let like_button11 = document.getElementById("like11");
// let liked_button11 = document.getElementById("liked11");
let image = document.getElementById("image");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
// let image = document.getElementById("image");
// let image = document.getElementById("image");
// let image = document.getElementById("image");
// let image = document.getElementById("image");
let dot_button = document.getElementById("dots");
let undot_button = document.getElementById("dot");
let details = document.getElementById("details");
let dot_button2 = document.getElementById("dots2");
let undot_button2 = document.getElementById("dot2");
let details2 = document.getElementById("details2");
let dot_button3 = document.getElementById("dots3");
let undot_button3 = document.getElementById("dot3");
let details3 = document.getElementById("details3");
let dot_button4 = document.getElementById("dots4");
let undot_button4 = document.getElementById("dot4");
let details4 = document.getElementById("details4");
let dot_button5 = document.getElementById("dots5");
let undot_button5 = document.getElementById("dot5");
let details5 = document.getElementById("details5");
// let dot_button6 = document.getElementById("dots6");
// let undot_button6 = document.getElementById("dot6");
// let details6 = document.getElementById("details6");
// let dot_button7 = document.getElementById("dots7");
// let undot_button7 = document.getElementById("dot7");
// let details7 = document.getElementById("details7");
// let dot_button8 = document.getElementById("dots8");
// let undot_button8 = document.getElementById("dot8");
// let details8 = document.getElementById("details8");
// let dot_button9 = document.getElementById("dots9");
// let undot_button9 = document.getElementById("dot9");
// let details9 = document.getElementById("details9");
// let dot_button10 = document.getElementById("dots10");
// let undot_button10 = document.getElementById("dot10");
// let details10 = document.getElementById("details10");
// let dot_button11 = document.getElementById("dots11");
// let undot_button11 = document.getElementById("dot11");
// let details11 = document.getElementById("details11");
// let cancel = document.getElementById("cancel");
let about = document.getElementById("about");
let sound = document.getElementById("sound");
let silent = document.getElementById("silent");

account.addEventListener("submit", (e) => {
    e.preventDefault();
})

eye_slash.addEventListener("click", () => {
        eye_slash.style.display = "none";
        pass.type = "text";
        eye.style.display = "block";
});

eye.addEventListener("click", () => {
    eye.style.display = "none";
    pass.type = "password";
    eye_slash.style.display = "block";
});

function open_music() {
    account.style.display = "none";
    main.style.display = "block"
}

function form () {
    if (user.value !== "") {
        user_error.style.display = "block";
    } else if (pass.value !== "") {
        pass_error.style.display = "block";
    } else {
        log.addEventListener("click", () => {
            open_music()
        })
    }
};

form();



// Sign_ip.addEventListener("click", () => {
//     account.style.display = "none";
//     .style.display = "block"
// });


const audio_file = new Audio("./audio/Davido-Ft-Odumodublvck-and-Chike-Funds-New-Song-(TrendyBeatz.com).mp3");

audio_file.load();

play_button.addEventListener("click", () => {
    audio_file.play();
    play_button.style.display = "none";
    pause_btn.style.display = "block";
    image.classList.add("music_pic");
    audio_file.volume = 1;
    audio_file2.volume = 0;
    audio_file3.volume = 0;
    audio_file4.volume = 0;
    audio_file5.volume = 0;
    image2.classList.remove("music_pic");
    image3.classList.remove("music_pic");
    image4.classList.remove("music_pic");
    image5.classList.remove("music_pic");
    pause_btn2.style.display = "none";
    pause_btn3.style.display = "none";
    pause_btn4.style.display = "none";
    pause_btn5.style.display = "none";
    play_button2.style.display = "block";
    play_button3.style.display = "block";
    play_button4.style.display = "block";
    play_button5.style.display = "block";
});

pause_btn.addEventListener("click", () => {
    audio_file.pause();
    play_button.style.display = "block";
    pause_btn.style.display = "none";
    image.classList.remove("music_pic")
});

audio_file.addEventListener("ended", () => {
    play_button.style.display = "block";
    pause_btn.style.display = "none";
    image.classList.remove("music_pic")
    audio_file2.play();
    play_button2.style.display = "none";
    pause_btn2.style.display = "block"
    image2.classList.add("music_pic");
    audio_file2.volume = 1;
});

const audio_file2 = new Audio("./audio/Bluenax_ft_Prod_Kayks_-_La_La.mp3");

audio_file2.load();

play_button2.addEventListener("click", () => {
    audio_file2.play();
    play_button2.style.display = "none";
    pause_btn2.style.display = "block"
    image2.classList.add("music_pic");
    audio_file2.volume = 1;
    audio_file.volume = 0;
    audio_file3.volume = 0;
    audio_file4.volume = 0;
    audio_file5.volume = 0;
    image.classList.remove("music_pic");
    image3.classList.remove("music_pic");
    image4.classList.remove("music_pic");
    image5.classList.remove("music_pic");
    pause_btn.style.display = "none";
    pause_btn3.style.display = "none";
    pause_btn4.style.display = "none";
    pause_btn5.style.display = "none";
    play_button.style.display = "block";
    play_button3.style.display = "block";
    play_button4.style.display = "block";
    play_button5.style.display = "block";
});

pause_btn2.addEventListener("click", () => {
    audio_file2.pause();
    play_button2.style.display = "block";
    pause_btn2.style.display = "none";
    image2.classList.remove("music_pic")
});

audio_file2.addEventListener("ended", () => {
    play_button2.style.display = "block";
    pause_btn2.style.display = "none";
    image2.classList.remove("music_pic");
    audio_file3.play();
    play_button3.style.display = "none";
    pause_btn3.style.display = "block"
    image3.classList.add("music_pic");
    audio_file3.volume = 1;
});

const audio_file3 = new Audio("./audio/Odumodublvck_Ft_Bloody_Civilian_Wale_-_Blood_On_The_Dance_Floor.mp3");

audio_file3.load();

play_button3.addEventListener("click", () => {
    audio_file3.play();
    play_button3.style.display = "none";
    pause_btn3.style.display = "block"
    image3.classList.add("music_pic");
    audio_file3.volume = 1;
    audio_file.volume = 0;
    audio_file2.volume = 0;
    audio_file4.volume = 0;
    audio_file5.volume = 0;
    image2.classList.remove("music_pic");
    image.classList.remove("music_pic");
    image4.classList.remove("music_pic");
    image5.classList.remove("music_pic");
    pause_btn2.style.display = "none";
    pause_btn.style.display = "none";
    pause_btn4.style.display = "none";
    pause_btn5.style.display = "none";
    play_button2.style.display = "block";
    play_button.style.display = "block";
    play_button4.style.display = "block";
    play_button5.style.display = "block";
});

pause_btn3.addEventListener("click", () => {
    audio_file3.pause();
    play_button3.style.display = "block";
    pause_btn3.style.display = "none";
    image3.classList.remove("music_pic")
});

audio_file3.addEventListener("ended", () => {
    play_button3.style.display = "block";
    pause_btn3.style.display = "none";
    image3.classList.remove("music_pic");
    audio_file4.play();
    play_button4.style.display = "none";
    pause_btn4.style.display = "block"
    image4.classList.add("music_pic");
    audio_file4.volume = 1;
});


const audio_file4 = new Audio("./audio/Black-Sherif-Kwaku-The-Traveller-(TrendyBeatz.com).mp3");

audio_file4.load();

play_button4.addEventListener("click", () => {
    audio_file4.play();
    play_button4.style.display = "none";
    pause_btn4.style.display = "block"
    image4.classList.add("music_pic");
    audio_file4.volume = 1;
    audio_file.volume = 0;
    audio_file2.volume = 0;
    audio_file3.volume = 0;
    audio_file5.volume = 0;
    image2.classList.remove("music_pic");
    image3.classList.remove("music_pic");
    image.classList.remove("music_pic");
    image5.classList.remove("music_pic");
    pause_btn2.style.display = "none";
    pause_btn3.style.display = "none";
    pause_btn.style.display = "none";
    pause_btn5.style.display = "none";
    play_button2.style.display = "block";
    play_button3.style.display = "block";
    play_button.style.display = "block";
    play_button5.style.display = "block";
});

pause_btn4.addEventListener("click", () => {
    audio_file4.pause();
    play_button4.style.display = "block";
    pause_btn4.style.display = "none";
    image4.classList.remove("music_pic")
});

audio_file4.addEventListener("ended", () => {
    play_button4.style.display = "block";
    pause_btn4.style.display = "none";
    image4.classList.remove("music_pic");
    audio_file5.play();
    play_button5.style.display = "none";
    pause_btn5.style.display = "block"
    image5.classList.add("music_pic");
    audio_file5.volume = 1;
});

const audio_file5 = new Audio("./audio/Outsyd_DJ_ft_Famous_Pluto_Outsyd_Eddie_Tega_Boi_DC_-_Feel_D_Mood.mp3");

audio_file5.load();

play_button5.addEventListener("click", () => {
    audio_file5.play();
    play_button5.style.display = "none";
    pause_btn5.style.display = "block"
    image5.classList.add("music_pic");
    audio_file5.volume = 1;
    audio_file.volume = 0;
    audio_file2.volume = 0;
    audio_file3.volume = 0;
    audio_file4.volume = 0;
    image2.classList.remove("music_pic");
    image3.classList.remove("music_pic");
    image4.classList.remove("music_pic");
    image.classList.remove("music_pic");
    pause_btn2.style.display = "none";
    pause_btn3.style.display = "none";
    pause_btn4.style.display = "none";
    pause_btn.style.display = "none";
    play_button2.style.display = "block";
    play_button3.style.display = "block";
    play_button4.style.display = "block";
    play_button.style.display = "block";
});

pause_btn5.addEventListener("click", () => {
    audio_file5.pause();
    play_button5.style.display = "block";
    pause_btn5.style.display = "none";
    image5.classList.remove("music_pic")
});

audio_file5.addEventListener("ended", () => {
    play_button5.style.display = "block";
    pause_btn5.style.display = "none";
    image5.classList.remove("music_pic")
});

like_button.addEventListener("click", () => {
    like_button.style.display = "none";
    liked_button.style.display = "block"
});

liked_button.addEventListener("click", () => {
    liked_button.style.display = "none";
    like_button.style.display = "block"
});

like_button2.addEventListener("click", () => {
    like_button2.style.display = "none";
    liked_button2.style.display = "block"
});

liked_button2.addEventListener("click", () => {
    liked_button2.style.display = "none";
    like_button2.style.display = "block"
});

like_button3.addEventListener("click", () => {
    like_button3.style.display = "none";
    liked_button3.style.display = "block"
});

liked_button3.addEventListener("click", () => {
    liked_button3.style.display = "none";
    like_button3.style.display = "block"
});

like_button4.addEventListener("click", () => {
    like_button4.style.display = "none";
    liked_button4.style.display = "block"
});

liked_button4.addEventListener("click", () => {
    liked_button4.style.display = "none";
    like_button4.style.display = "block"
});

like_button5.addEventListener("click", () => {
    like_button5.style.display = "none";
    liked_button5.style.display = "block"
});

liked_button5.addEventListener("click", () => {
    liked_button5.style.display = "none";
    like_button5.style.display = "block"
});

// like_button6.addEventListener("click", () => {
//     like_button6.style.display = "none";
//     liked_button6.style.display = "block"
// });

// liked_button6.addEventListener("click", () => {
//     liked_button6.style.display = "none";
//     like_button6.style.display = "block"
// });

// like_button7.addEventListener("click", () => {
//     like_button7.style.display = "none";
//     liked_button7.style.display = "block"
// });

// liked_button7.addEventListener("click", () => {
//     liked_button7.style.display = "none";
//     like_button7.style.display = "block"
// });

// like_button8.addEventListener("click", () => {
//     like_button.style.display = "none";
//     liked_button.style.display = "block"
// });

// liked_button8.addEventListener("click", () => {
//     liked_button.style.display = "none";
//     like_button.style.display = "block"
// });
// like_button8.addEventListener("click", () => {
//     like_button.style.display = "none";
//     liked_button.style.display = "block"
// });

// liked_button.addEventListener("click", () => {
//     liked_button.style.display = "none";
//     like_button.style.display = "block"
// });

// like_button9.addEventListener("click", () => {
//     like_button9.style.display = "none";
//     liked_button9.style.display = "block"
// });

// liked_button10.addEventListener("click", () => {
//     liked_button10.style.display = "none";
//     like_button10.style.display = "block"
// });

// like_button11.addEventListener("click", () => {
//     like_button11.style.display = "none";
//     liked_button11.style.display = "block"
// });

// liked_button11.addEventListener("click", () => {
//     liked_button11.style.display = "none";
//     like_button11.style.display = "block"
// });

dot_button.addEventListener("click", () => {
    dot_button.style.display = "none";
    details.style.display = "block";
    undot_button.style.display = "block";
});

undot_button.addEventListener("click", () => {
    undot_button.style.display = "none";
    details.style.display = "none";
    dot_button.style.display = "block";
});

dot_button2.addEventListener("click", () => {
    dot_button2.style.display = "none";
    details2.style.display = "block";
    undot_button2.style.display = "block";
});

undot_button2.addEventListener("click", () => {
    undot_button2.style.display = "none";
    details2.style.display = "none";
    dot_button2.style.display = "block";
});

dot_button3.addEventListener("click", () => {
    dot_button3.style.display = "none";
    details3.style.display = "block";
    undot_button3.style.display = "block";
});

undot_button3.addEventListener("click", () => {
    undot_button3.style.display = "none";
    details3.style.display = "none";
    dot_button3.style.display = "block";
});

dot_button4.addEventListener("click", () => {
    dot_button4.style.display = "none";
    details4.style.display = "block";
    undot_button4.style.display = "block";
});

undot_button4.addEventListener("click", () => {
    undot_button4.style.display = "none";
    details4.style.display = "none";
    dot_button4.style.display = "block";
});

dot_button5.addEventListener("click", () => {
    dot_button5.style.display = "none";
    details5.style.display = "block";
    undot_button5.style.display = "block";
});

undot_button5.addEventListener("click", () => {
    undot_button5.style.display = "none";
    details5.style.display = "none";
    dot_button5.style.display = "block";
});
// dot_button6.addEventListener("click", () => {
//     dot_button6.style.display = "none";
//     details6.style.display = "block";
//     undot_button6.style.display = "block";
// });

// undot_button6.addEventListener("click", () => {
//     undot_button6.style.display = "none";
//     details6.style.display = "none";
//     dot_button6.style.display = "block";
// });

// dot_button7.addEventListener("click", () => {
//     dot_button7.style.display = "none";
//     details7.style.display = "block";
//     undot_button7.style.display = "block";
// });

// undot_button7.addEventListener("click", () => {
//     undot_button7.style.display = "none";
//     details7.style.display = "none";
//     dot_button7.style.display = "block";
// });

// dot_button8.addEventListener("click", () => {
//     dot_button8.style.display = "none";
//     details8.style.display = "block";
//     undot_button8.style.display = "block";
// });

// undot_button8.addEventListener("click", () => {
//     undot_button8.style.display = "none";
//     details8.style.display = "none";
//     dot_button8.style.display = "block";
// });

// dot_button9.addEventListener("click", () => {
//     dot_button9.style.display = "none";
//     details9.style.display = "block";
//     undot_button9.style.display = "block";
// });

// undot_button9.addEventListener("click", () => {
//     undot_button9.style.display = "none";
//     details9.style.display = "none";
//     dot_button9.style.display = "block";
// });
// dot_button10.addEventListener("click", () => {
//     dot_button10.style.display = "none";
//     details10.style.display = "block";
//     undot_button10.style.display = "block";
// });

// undot_button10.addEventListener("click", () => {
//     undot_button10.style.display = "none";
//     details10.style.display = "none";
//     dot_button10.style.display = "block";
// });

// dot_button11.addEventListener("click", () => {
//     dot_button11.style.display = "none";
//     details11.style.display = "block";
//     undot_button11.style.display = "block";
// });

// undot_button11.addEventListener("click", () => {
//     undot_button11.style.display = "none";
//     details11.style.display = "none";
//     dot_button11.style.display = "block";
// });

sound.addEventListener("click", () => {
    sound.style.display = "none";
    silent.style.display = "block";
    audio_file.volume = 0;
    audio_file2.volume = 0;
    audio_file3.volume = 0;
    audio_file4.volume = 0;
    audio_file5.volume = 0;
    pause_btn.style.display = "none";
    pause_btn2.style.display = "none";
    pause_btn3.style.display = "none";
    pause_btn4.style.display = "none";
    pause_btn5.style.display = "none";
    play_button.style.display = "block";
    play_button2.style.display = "block";
    play_button3.style.display = "block";
    play_button4.style.display = "block";
    play_button5.style.display = "block";
});

silent.addEventListener("click", () => {
    silent.style.display = "none";
    sound.style.display = "block";
    
});