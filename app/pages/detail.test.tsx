import renderer from "react-test-renderer";
import DetailScreen from "./detail/DetailScreen";
import { Movie } from "../types";

const MOCK_MOVIE_DATE: Movie = {
  typeId: "Movie",
  adult: false,
  backdrop_path: "backdrop_path",
  genre_ids: [],
  id: 1,
  original_language: "original_language",
  overview: "overview",
  popularity: 100,
  poster_path: "poster_path",
  vote_count: 246,
  vote_average: 99,
  title: "title",
  original_title: "original_title",
  video: false,
  release_date: "release_date",
};

it("changes the class when hovered", () => {
  const component = renderer.create(<DetailScreen {...MOCK_MOVIE_DATE} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
