class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Fikrimin İnce Gülü", "Müzeyyen Senar", "fikreminincegülü.jpg", "fikriminincegülüsarkı.mp3"),
    new Music("Stereo Loves Slow", "Slowo", "stereolovexonthefloor.jpg", "stereoloveslowsarkı.mp3"),
    new Music("Tırnağın Kırılmasın", "Emir Can İğrek", "tırnagınkırılmasın.jpg", "tırnagınkırılmasınsarkı.mp3"),

]
