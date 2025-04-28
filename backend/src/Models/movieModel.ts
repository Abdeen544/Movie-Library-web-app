import mongoose, {Schema, Document} from "mongoose";

export interface IMovie extends Document {
    title: string,
    poster: string,
    type: string,
    fullplot: string,
    genres: string[],
    cast: string[],
    directors: string[],
    languages: string[],
    countries: string[],
    year: number,
    rated: string,
    imdb: number,
}

const movieSchema = new Schema<IMovie>({
    title: {type: String, required: true},
    poster: {type: String, required: true},
    type: {type: String, required: true},
    fullplot: {type: String, required: true},
    genres: {type: [String], required: true},
    cast: {type: [String], required: true},
    directors: {type: [String], required: true},
    languages: {type: [String], required: true},
    countries: {type: [String], required: true},
    year: {type: Number, required: true},
    rated: {type: String, required: true},
    imdb: {type: Number, required: true},
});

export const movieModel = mongoose.model<IMovie>('movies', movieSchema);