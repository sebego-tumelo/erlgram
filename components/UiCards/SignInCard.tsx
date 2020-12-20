export default function SignIn({ emptyAccountAction }) {
	return (
		<div className="signin-card-container">
			<div className="signin-card">
				<div className="close-icon-container">
					<button
						className="light-icon-button close-icon"
						onClick={() => emptyAccountAction({ type: "noCard" })}
					>
						<span className="small-icon bi-x"></span>
					</button>
				</div>

				<a className="brand">
					<span
						className={"bi-instagram regular-icon brand-icon brandIcon"}
					></span>
					<h5 className="brandName">Erlgram</h5>
				</a>

				<form
					className="signin-form"
					onSubmit={(event) => event.preventDefault()}
				>
					<div className="text-control">
						<span className="bi-envelope-fill small-icon"></span>
						<input
							type="text"
							className="user-email text-input"
							placeholder="Email"
						/>
					</div>

					<div className="text-control">
						<span className="bi-lock small-icon"></span>
						<input
							type="password"
							className="user-password text-input"
							placeholder="Password"
						/>
					</div>

					<button className="primary-button pxb sign-in-button" type="submit">
						Sign in
					</button>

					<p className="px alt-text">
						no account?
						<button
							className="link-button pxb"
							onClick={() => emptyAccountAction({ type: "SIGNUP" })}
						>
							create account
						</button>
					</p>
				</form>
			</div>
		</div>
	);
}
