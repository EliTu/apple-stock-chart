import SpinnerSvg from '../../assets/spinner.svg';
import { StyledSvgImage } from '../../styles/styled';

function Loader() {
	return <StyledSvgImage src={SpinnerSvg} alt='loader spinner' />;
}

export default Loader;
