import { movieModel } from "../Models/movieModel"

interface GetMovieParams{
    title: string
}

export const getMovie = async ({title}:GetMovieParams) => {
    const findMovie = await movieModel.findOne({title});
    if(!findMovie){
        return {data: "movie doesn't exists", statusCode: 400};
    }
    return {data: findMovie, statusCode: 200};
}

export const getAllMovies = async () => {
    return movieModel.find();
}