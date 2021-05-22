export const THEME_COLORS = {
	main_white: '#ebebebeb',
	shadow_pale: '#adcaf790',
	grey_pale: '#6e6e6ef4',
	main_blue: '#063cebcf',
	secondary_blue: '#161aec96',
	pale_blue: '#7476ff55',
	stroke_blue: '#080185f0',
	link_blue: '#686bf7ca',
	error_red: '#f333339b',
};

declare module 'styled-components' {
	type Theme = typeof THEME_COLORS;
	export interface DefaultTheme extends Theme {}
}
