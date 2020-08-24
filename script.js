class Movie{
    constructor (title, duration, category){
        this.title = title;
        this.duration = duration;
        this.category = category;
    }

    watch(){
        return `Kamu menonton film ${this.title} dengan kategori ${this.category} dan berdurasi ${this.duration}`;
    }

    streamAt(){
        return `Film ${this.title} ditayangkan di Televisi`;
    }
}

class SoundTrack extends Movie{
    constructor (title, duration, category, titleSong, singer){
        super(title, duration, category);
        this.titleSong = titleSong;
        this.singer = singer;
    }

    movieSoundtrack(){
        return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}`;
    }
}


class Channel extends Movie{
    constructor (title, duration, category, channelName){
        super(title, duration, category);
        this.channelName = channelName;
    }

    streamAt(){
            return `Film ${this.title} ditayangkan di ${this.channelName}`;
    }

}

let movie1 = new Movie("Suspicious Partner","60 minutes","Romance");
console.log(movie1.watch());

let movieSoundtrack1 = new SoundTrack("Suspicious Partner","60 minutes","Romance","How do you feel", "Ridho Majid");
console.log(movieSoundtrack1.movieSoundtrack());
console.log(movieSoundtrack1.streamAt());


let channel1 = new Channel("Suspicious Partner","60 minutes","Romance","Netflix");
console.log(channel1.streamAt());