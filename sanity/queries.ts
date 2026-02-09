import { defineQuery } from "groq";

export const allWorkQuery = defineQuery(/* groq */ `
	*[_type == "work"] | order(title desc) {
		...
	}
`);

export const workQuery = defineQuery(/* groq */ `
	*[_type == "work" && defined(slug.current) && slug.current == $slug][0] {
		title,
		slug,
		color,
		cardTop,
		cardBottom,
		images[]{
			landscape,
			image,
		},
		company->{
			title,
			url
		},
		body,
		url
	}
`);
