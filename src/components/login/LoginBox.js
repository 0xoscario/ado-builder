// LoginBox - Component showing the install and connection options for linking TerraWallet to App
import React from 'react'

//Load Terra-Money Modules
import {
	NetworkInfo,
	WalletProvider,
	ConnectType,
	useWallet,
	WalletStatus,
} from '@terra-money/wallet-provider'

const LoginBox = (props) => {
	const {
		status,
		network,
		wallets,
		availableConnectTypes,
		availableInstallTypes,
		connect,
		install,
		disconnect,
	} = useWallet()

	return (
		<div id="wrapper" className="col-8 offset-lg-2">
			<div id="loginbox" className="m-5 p-5">
				<div
					id="login-header"
					className="text-center text-light mb-4"
				>
					<img
						src="./images/AND_Logo.svg"
						className="mb-4"
						height="50"
					/>
					<p className="h6 mt-5">Functional Smart Contracts</p>
					<div className="">
						<p
							className="font-weight-light d-inline-block"
							style={{ maxWidth: '400px' }}
						>
							NFTs and Contracts embeded with governance,
							rules, royalties, and other commercial terms
						</p>
					</div>
				</div>

				<div id="wrapper-buttons" className="col-12 offset-lg-3">
					<div id="extension-button-box" className="row">
						<div className="col justify-content-center">
							{availableInstallTypes.length ? (
								<button
									style={{ height: '60px' }}
									className="btn btn-primary w-50 mt-3 mb-4 text-left"
									onClick={() => {
										install('CHROME_EXTENSION')
									}}
								>
									<img
										src="./images/terra.svg"
										width="30"
										className="ml-4 mr-4"
										alt="Terra"
									/>
									<span className="">
										Install Terra Station
										Extension
									</span>
								</button>
							) : (
								status ===
									WalletStatus.WALLET_NOT_CONNECTED && (
									<button
										style={{ height: '60px' }}
										className="btn btn-primary w-50 mt-3 mb-4 text-left"
										onClick={() => {
											connect(
												'CHROME_EXTENSION'
											)
											//props.setShowDashboard(true)
										}}
									>
										<img
											src="./images/terra.svg"
											width="30"
											className="ml-4 mr-4"
											alt="Terra"
										/>
										<span className="">
											Connect Terra Station
											Extension
										</span>
									</button>
								)
							)}
						</div>
					</div>

					<div id="mobile-button-box" className="row">
						<div className="col">
							<button
								style={{ height: '60px' }}
								className="btn btn-primary w-50 text-left"
								onClick={() => {
									connect('WALLETCONNECT')
								}}
							>
								<img
									src="./images/walletconnect.svg"
									width="30"
									className="ml-4 mr-4"
									alt="Wallet Connect"
								/>
								<span className="">
									Connect Terra Station Mobile
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LoginBox
