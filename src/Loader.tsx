import SpinnerSvg from './spinner.svg';
import { StyledSvgImage } from './styled';

function Loader() {
	return <StyledSvgImage src={SpinnerSvg} alt='loader spinner' />;
}

export default Loader;
