import { ErrorModalProps } from '../../utils/interfaces';
import { StyledErrorModal } from '../../styles/styled';

function ErrorModal({ error }: ErrorModalProps) {
	return error ? (
		<StyledErrorModal>Oh no, something went wrong: {error}</StyledErrorModal>
	) : null;
}

export default ErrorModal;
