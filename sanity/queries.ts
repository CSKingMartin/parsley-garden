import { defineQuery } from "groq";

export const allWorkQuery = defineQuery(/* groq */ `
	*[_type == "work" && !hidden] | order(year desc) {
		...
	}
`);

export const featuredWorkQuery = defineQuery(/* groq */ `
	*[_type == "work" && !hidden && featured] {
		title,
		slug,
		color,
		cardTop,
		cardBottom,
		company->{
			title,
			url,
		}
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
