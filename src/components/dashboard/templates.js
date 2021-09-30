// TemplatePage(setShowDash, setShowDashboard, setSHowMissionDashboard) - Page showing Prebuilt template selection options to pass to MissionBuilder
import React from 'react'

//Load Content Components
import PrimaryHeaderBar from '../header-bar'
import ConnectionBar from '../connection-bar'

//Dynamic Template Data for Template Buuilder
const templateList = [
    // id | name | desc | icon | link
    {
        id: 1,
        name: 'NFT Collectible',
        descItems: [
            'No fees',
            'Earn royalties',
            'Add an EULA',
            'Track transactions',
        ],
        icon: './images/module-icons/placeholder.jpg',
        link: 'NFT',
        disabled: false,
    },
    //{id: 2, name: 'Custom Build', descItems: ["Build Your Own"], icon: './images/module-icons/exchange.jpg', link:'CST', disabled: false},
    {
        id: 2,
        name: 'Defi Instrument',
        descItems: [
            'Automate buy / sell',
            'Split funds / profits',
            'Tax Management',
            'Smart contracts',
        ],
        icon: './images/module-icons/exchange.jpg',
        link: 'DeFi',
        disabled: true,
    },
    {
        id: 3,
        name: 'Alternative Use',
        descItems: [
            'Track transactions',
            'Collect funds',
            'Document signing',
            'Cap tables',
        ],
        icon: './images/module-icons/import-export.jpg',
        link: 'Alternate',
        disabled: true,
    },
]

const TemplatePage = (props) => {
    return (
        <div id='templateWrapper' className='m-0 p-0'>
            <PrimaryHeaderBar />
            <ConnectionBar />
            <div id='buffer' className='px-5'>
                <div className='light-opacity rounded-lg w-80 mt-4 mx-5 p-2'>
                    <div className='col-12 text-right'>
                        <a
                            className='text-light'
                            onClick={() => {
                                props.setShowDash(true)
                            }}
                        >
                            Cancel X
                        </a>
                    </div>

                    <div className='row px-4 pb-3'>
                        {templateList.map((templateInfo) => (
                            <div
                                key={templateInfo.id}
                                className='col light-opacity rounded-lg text-light m-4 p-5'
                            >
                                <div className='col  text-center mb-5'>
                                    {templateInfo.disabled ? (
                                        <img src={templateInfo.icon} />
                                    ) : (
                                        <a
                                            href='#'
                                            onClick={() => {
                                                props.setShowDashboard(false),
                                                    props.setShowMissionDashboard(
                                                        templateInfo.link
                                                    )
                                            }}
                                        >
                                            <img src={templateInfo.icon} />
                                        </a>
                                    )}
                                </div>
                                <p className='h4'>{templateInfo.name}</p>
                                <hr className='' />
                                <ul>
                                    {templateInfo.descItems
                                        .toString()
                                        .split(',')
                                        .map((liItem) => (
                                            <li key={liItem}>{liItem}</li>
                                        ))}
                                </ul>
                                <div className='text-center'>
                                    {templateInfo.disabled ? (
                                        <button
                                            className='btn btn-primary pad-btn {/* px-4 py-2 */} mt-5'
                                            onClick={() => {
                                                props.setShowDashboard(false),
                                                    props.setShowMissionDashboard(
                                                        templateInfo.link
                                                    )
                                            }}
                                            disabled
                                        >
                                            Coming Soon!
                                        </button>
                                    ) : (
                                        <button
                                            className='btn btn-primary pad-btn {/* px-4 py-2 */} mt-5'
                                            onClick={() => {
                                                props.setShowDashboard(false),
                                                    props.setShowMissionDashboard(
                                                        templateInfo.link
                                                    )
                                            }}
                                        >
                                            Get Started {templateInfo.disabled}
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*
                    <div className="col-12 text-center">
                        <button 
                            type="button" 
                            className="btn btn-primary mb-4"
                            onClick={() => {
                                props.setShowDashboard(false),
                                props.setShowMissionDashboard("Custom")
                            }} >
                            Create A Custom Build
                        </button>
                    </div>
                        */}
                </div>
            </div>
        </div>
    )
}

export default TemplatePage
