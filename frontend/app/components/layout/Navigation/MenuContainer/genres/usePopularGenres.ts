import { useQuery } from "react-query";

import { IMenuItem } from "../menu.types";

import { getGenreUrl } from "@/config/url.config";
import { GenreService } from "@/services/genre.service";

// import { toastError } from "@/utils/api/withToastrErrorRedux";

export const usePopularGenres = () => {
	const queryData = useQuery(
		"popular genres menu",
		() => GenreService.getPopularGenres(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			onError(error) {
				console.log(error);
				// toastError(error, "Popular genres menu");
			},
		}
	);

	return queryData;
};
