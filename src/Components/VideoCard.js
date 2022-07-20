import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const VideoCard = ({ imgLink, genre, title, releaseDate }) => {
	return (
		<Card>
			<CardMedia component="img" height="140" image={imgLink} alt="Video" />
			<CardContent>
				<Typography color="text.secondary" gutterBottom>
					{genre}
				</Typography>
				<Typography gutterBottom variant="h5">
					{title}
				</Typography>
				<Typography color="text.secondary">{releaseDate}</Typography>
			</CardContent>
		</Card>
	);
};
