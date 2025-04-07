export class Serie {
    id: number;
    title: string;
    platform: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(id: number, title: string, platform: string, seasons: number, description: string, link: string, image: string) {
        this.id = id;
        this.title = title;
        this.platform = platform;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}