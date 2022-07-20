import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

export const SearchBox = ({ searchTitle, setSearchTitle }) => {
	return (
		<Box mb={2}>
			<TextField
				size="small"
				type="text"
				name="search-box"
				placeholder="Search for video title"
				value={searchTitle}
				onChange={(e) => setSearchTitle(e.target.value)}
			/>
		</Box>
	);
};
