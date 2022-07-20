import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { VideoCard } from "./VideoCard";
import { SearchBox } from "./SearchBox";

export default function VideoSearcher(props) {
	const API_URL = "https://crio-xflix.herokuapp.com/v1/videos";
	const [videosList, setVideosList] = useState([]);
	const [searchTitle, setSearchTitle] = useState("");
	const [debounceTimeout, setDebounceTimeout] = useState(0);

	const fetchVideos = async () => {
		console.log(debounceTimeout, " fetching for timeout");
		const url = searchTitle ? `${API_URL}?title=${searchTitle}` : API_URL;
		const res = await axios.get(url);
		if (res.status === 200) setVideosList(res.data.videos);
	};

	useEffect(() => {
		if (debounceTimeout > 0) {
			console.log(debounceTimeout, " old timeout cleared");
			clearTimeout(debounceTimeout);
		}

		const newTimeout = setTimeout(() => {
			fetchVideos();
		}, 500);
		console.log(newTimeout, " timeout registered");

		setDebounceTimeout(newTimeout);
	}, [searchTitle]);

	useEffect(() => {
		clearTimeout(debounceTimeout);
		fetchVideos();
	}, []);

	return (
		<>
			<SearchBox searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
			<Grid container spacing={2}>
				{videosList.map((video) => {
					const { id, previewImage, genre, title, releaseDate } = video;
					return (
						<Grid item xs={12} sm={6} md={3} key={id}>
							<VideoCard
								imgLink={previewImage}
								genre={genre}
								title={title}
								releaseDate={releaseDate}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}
