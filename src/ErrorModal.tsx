import { ErrorModalProps } from './interfaces';
import { StyledErrorModal } from './styled';

function ErrorModal({ error }: ErrorModalProps) {
	return error ? (
		<StyledErrorModal>Oh no, something went wrong: {error}</StyledErrorModal>
	) : null;
}

export default ErrorModal;
