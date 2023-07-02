interface VideoPlayerElements {
  videoPlay: HTMLVideoElement,
  playButton: HTMLButtonElement,
  stopButton: HTMLButtonElement,
}

interface VideoPlayerProtocols {
  playToggle():void,
  stop():void,
  iniciarEventos():void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlay: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlay = videoPlayerElements.videoPlay;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle(): void {
    if(this.videoPlay.paused) {
      this.videoPlay.play();
      this.playButton.innerText = 'Pausar'
    } else {
      this.videoPlay.pause();
      this.playButton.innerText = 'Iniciar'
    }
  }

  stop(): void {

  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    })

    this.stopButton.addEventListener('click', () => {
      this.videoPlay.pause();
      this.videoPlay.currentTime = 0;
      this.playButton.innerText = 'Iniciar';
    })
  }
}

const videoplayer = new VideoPlayer({
  videoPlay: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})
videoplayer.iniciarEventos();
