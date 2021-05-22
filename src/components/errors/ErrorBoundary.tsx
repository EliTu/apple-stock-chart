import React from 'react';
import {
	StyledCenteredDiv,
	StyledClickableSpan,
	StyledResponsiveContainer,
} from '../../styles/styled';

export class ErrorBoundary extends React.Component {
	state = { hasError: false };

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<StyledResponsiveContainer>
					<StyledCenteredDiv>
						<h1>OH no... the app has crashed :(</h1>
						<h2>
							Try to{' '}
							<StyledClickableSpan onClick={() => window.location.reload()}>
								refresh
							</StyledClickableSpan>{' '}
							the page and see if it works now
						</h2>
					</StyledCenteredDiv>
				</StyledResponsiveContainer>
			);
		}

		return this.props.children;
	}
}
