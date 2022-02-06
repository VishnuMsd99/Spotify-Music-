console.log("This is spotify clone");

let songIndex = 0;
let audioElement = new Audio("assets/songs");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("progressBar");
let songItems =Array.from( document.getElementsByClassName("songItem"));
let songPlay = document.getElementById("songPlay");
let songList = Array.from(document.getElementsByClassName("songList"));

let songs = [
  {
    songName: "Dacapo",
    filePath: "assets/songs/1.mp3",
  },
  {
    songName: "dance party",
    filePath: "assets/songs/2.mp3",
  },
  {
    songName: "Masti", 
    filePath: "assets/songs/3.mp3",
  },
  {
    songName: "Dance power",
    filePath: "assets/songs/4.mp3",
  },
  {
    songName: "Party Song",
    filePath: "assets/songs/5.mp3",
  },
  {
    songName: "Party power",
    filePath: "assets/songs/6.mp3",
  },
  {
    songName: "Dance masti",
    filePath: "assets/songs/7.mp3",
  },
  {
    songName: "Dance Monkey",
    filePath: "assets/songs/8.mp3",
  },
  {
    songName: "Dance Monkey",
    filePath: "assets/songs/9.mp3",
  },
  {
    songName: "Dance Monkey",
    filePath: "assets/songs/10.mp3",

  },
];

songItems.forEach((element, i)=>{
  console.log(element, i)
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})


// Songes play
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterSongName.innerText = songs[songIndex+1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songPlay.style.opacity = "1";
    
}
else{
      audioElement.pause();
      masterPlay.classList.add('fa-play-circle');
      masterPlay.classList.remove('fa-pause-circle');
      songPlay.style.opacity = "0";

  }
});

audioElement.addEventListener("timeupdate", () => {
  prograss = parseInt(audioElement.currentTime / audioElement.duration * 100);
  myProgressBar.value = prograss;
 
});

myProgressBar.addEventListener("change", () => {

  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;


})
const playAll= () =>{

  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener("click", (e)=>{
    console.log(e.target)
    playAll();
    songIndex= parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `assets/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex+1].songName;
    songPlay.style.opacity = "1";
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
  })

document.getElementById("next").addEventListener("click", () => {

  if(songIndex>=9){
    songIndex=0;
  }else{
    songIndex +=1;
  }
  audioElement.src = `assets/songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex+1].songName;
  songPlay.style.opacity = "1";
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }else{
    songIndex -=1;
  }
  audioElement.src = `assets/songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex+1].songName;
  songPlay.style.opacity = "1";
    audioElement.currentTime= 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

  
  })
